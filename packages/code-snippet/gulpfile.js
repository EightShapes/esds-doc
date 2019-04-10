const gulp = require('esds-build');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const minifyHTML = require('rollup-plugin-minify-html-literals').default;

const prefix = '[owc-building-rollup]';

const production = true;

const rollupIeConfig = {
  input: './scripts/esds-code-snippet.js',
  treeshake: !!production,
  output: {
    // output into given folder or default /dist. Output legacy into a /legacy subfolder
    dir: `./dist/legacy`,
    format: 'system',
    sourcemap: true
  },
  plugins: [
    // minify html and css template literals if in production
    production &&
      minifyHTML({
        failOnError: true,
      }),

    // resolve bare import specifiers
    resolve(),

    // resolve require statements
    commonjs(),

    // run code through babel
    babel({
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        // rollup rewrites import.meta.url, but makes them point to the file location after bundling
        // we want the location before bundling
        ['bundled-import-meta', { importStyle: 'baseURI' }],
      ],
      presets: [
        [
          '@babel/env',
          {
            targets: ['ie 11'],
            useBuiltIns: false,
          },
        ],
      ],
    }),

    // only minify if in production
    production && terser(),
  ],
};

gulp.task('scripts:rollup:esm', async() => {
  const bundle = await rollup.rollup({
    input: './scripts/esds-code-snippet.js',
    plugins: [resolve(), commonjs()]
  });
  await bundle.write({
    compact: true,
    sourcemap: true,
    file: './dist/esds-code-snippet.js',
    format: 'esm'
  });
});

gulp.task('scripts:rollup:ie', async() => {
  const bundle = await rollup.rollup(rollupIeConfig);
  await bundle.write(rollupIeConfig.output);
});

gulp.task('dist:scripts:to:webroot', () => {
  return gulp.src('./dist/**/*.js')
        .pipe(gulp.dest('_site/latest/scripts'));
});

gulp.task('esds-hook:pre:build:all', gulp.series('scripts:rollup:esm', 'scripts:rollup:ie', 'dist:scripts:to:webroot'));

// Watch base WC for changes and re-rollup
gulp.task('watch:scripts:rollup', function () {
    return gulp.watch(['./scripts/**/*.js'], gulp.series('scripts:rollup:esm', 'scripts:rollup:ie', 'dist:scripts:to:webroot'));
});
