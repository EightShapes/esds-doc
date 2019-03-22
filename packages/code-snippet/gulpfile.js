const gulp = require('esds-build');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const rollupInputOptions = {
  plugins: [resolve({
      jsnext: true,
      main: true
    }), commonjs(      {include: 'node_modules/**'},  // Default: undefined
)]
};

const rollupOutputOptions = {
  compact: true,
  sourcemap: true,
  format: 'esm'
};

gulp.task('scripts:rollup', (done) => {
  const inputPath = './scripts/';
  const outputPath = './_site/latest/scripts/';
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

gulp.task('esds-hook:pre:build:all', gulp.series('scripts:rollup'));

// Watch base WC for changes and re-rollup
gulp.task('watch:scripts:rollup', function () {
    return gulp.watch(['./scripts/**/*.js'], gulp.parallel('scripts:rollup'));
});
