const gulp = require('esds-build');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const inputPath = './scripts/';
const outputPath = './_site/latest/scripts/';
const rollupInputOptions = {
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({include: 'node_modules/**'})
  ]
};

const rollupOutputOptions = {
  compact: true,
  sourcemap: true,
  format: 'esm'
};

gulp.task('scripts:rollup', (done) => {
  const sourceFiles = ['dependency-bundle-es6.js'];

  sourceFiles.forEach(async(s) => {
    const inputOptions = rollupInputOptions;
    inputOptions.input = `${inputPath}${s}`;

    const bundle = await rollup.rollup(inputOptions);

    const outputOptions = rollupOutputOptions;
    outputOptions.file = `${outputPath}compiled-${s}`;

    await bundle.write(outputOptions);
  });

  done();
});

gulp.task('scripts:rollup:component', (done) => {
  const sourceFiles = ['esds-code-snippet.js'];

  sourceFiles.forEach(async(s) => {
    const inputOptions = rollupInputOptions;
    inputOptions.input = `${inputPath}${s}`;

    const bundle = await rollup.rollup(inputOptions);

    const outputOptions = rollupOutputOptions;
    outputOptions.file = `${outputPath}compiled-${s}`;

    await bundle.write(outputOptions);
  });

  done();
});

gulp.task('scripts:rollup:ie-component', (done) => {
  const sourceFiles = ['esds-code-snippet.js'];

  sourceFiles.forEach(async(s) => {
    const inputOptions = rollupInputOptions;
    inputOptions.plugins.push(babel({
      exclude: 'node_modules/**'
    }))
    inputOptions.input = `${inputPath}${s}`;

    const bundle = await rollup.rollup(inputOptions);

    const outputOptions = rollupOutputOptions;
    outputOptions.format = 'iife';
    outputOptions.name = 'IEEsdsCodeSnippet';
    outputOptions.file = `${outputPath}compiled-ie-${s}`;

    await bundle.write(outputOptions);
  });

  done();
});

gulp.task('esds-hook:pre:build:all', gulp.series('scripts:rollup', 'scripts:rollup:component', 'scripts:rollup:ie-component'));

// Watch base WC for changes and re-rollup
gulp.task('watch:scripts:rollup', function () {
    return gulp.watch(['./scripts/**/*.js'], gulp.parallel('scripts:rollup'));
});
