'use strict';

const   gulp = require('gulp'),
        browserSync = require('browser-sync').create(),
        concat = require('gulp-concat-util'),
        eslint = require('gulp-eslint'),
        gutil = require('gulp-util'),
        nunjucksRender = require('gulp-nunjucks-render'),
        sass = require('gulp-sass'),
        sassLint = require('gulp-sass-lint'),
        svgmin = require('gulp-svgmin'),
        svgSprite = require('gulp-svg-sprite');

// Lint scss files
gulp.task('sass-lint', function () {
  return gulp.src('src/**/*.scss', {since: gulp.lastRun('sass-lint')})
    .pipe(sassLint({
        configFile: '.sass-lint.yaml'
    }))
    .pipe(sassLint.format())
});

// Compile scss files
gulp.task('compile-library-styles', function() {
    return gulp.src('src/library/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/styles/'));
});

gulp.task('compile-doc-library-styles', function() {
    return gulp.src('src/doc_library/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/styles/'));
});

gulp.task('compile-doc-styles', function() {
    return gulp.src('src/doc/assets/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/styles/'));
});

// Concatenate library nunjucks macros
gulp.task('concatenate-library-macros', function(){
    return gulp.src(['src/library/components/**/*.njk', '!src/library/components/mds_library_macros.njk'])
        .pipe(concat('mds_library_macros.njk'))
        .pipe(concat.header('{# DO NOT EDIT: This file is automatically generated by the project\'s build task #}\n'))
        .pipe(gulp.dest('src/library/components/'));
});

// Concatenate doc_library nunjucks component macros
gulp.task('concatenate-doc-library-macros', function(){
    return gulp.src(['src/doc_library/components/**/*.njk', '!src/doc_library/components/mds_doc_library_macros.njk'])
        .pipe(concat('mds_doc_library_macros.njk'))
        .pipe(concat.header('{# DO NOT EDIT: This file is automatically generated by the project\'s build task #}\n'))
        .pipe(gulp.dest('src/doc_library/components/'));
});

// Compile doc src to html
gulp.task('compile-docs', function() {
    return gulp.src('src/doc/**/*.njk')
        .pipe(
            nunjucksRender({
                path: ['src'],
                envOptions: {
                    watch: false
                }
            }).on('error', function(e){
                gutil.log(e);
                gutil.beep();
                this.emit('end');
            })
        )
        .pipe(gulp.dest('dist'));
});


// Lint JS files
gulp.task('scripts:lint', function () {
  return gulp.src('src/**/*.js', {since: gulp.lastRun('scripts:lint')})
    .pipe(eslint({
        configFile: '.eslintrc'
    }))
    .pipe(eslint.formatEach('compact', process.stderr))
    .pipe(eslint.failAfterError());
});

// Concatenate Library JS files
gulp.task('scripts:concat-library-scripts', function() {
    return gulp.src(['src/library/components/**/*.js', 'src/library/scripts/**/*.js'])
        .pipe(concat('mds_library.js'))
        .pipe(concat.header('// DO NOT EDIT: This file is automatically generated by the project\'s build task\n'))
        .pipe(gulp.dest('dist/assets/scripts/'));
});

// Concatenate Doc Library JS files
gulp.task('scripts:concat-doc-library-scripts', function() {
    return gulp.src(['src/doc_library/components/**/*.js'])
        .pipe(concat('mds_doc_library.js'))
        .pipe(concat.header('// DO NOT EDIT: This file is automatically generated by the project\'s build task\n'))
        .pipe(gulp.dest('dist/assets/scripts/'));
});

// Optimize SVGs
gulp.task('svg:optimize', function () {
    return gulp.src('src/library/icons/**/*.svg', {since: gulp.lastRun('svg:optimize')})
        .pipe(svgmin({
            plugins: [
                {
                    removeAttrs: {
                        attrs: ['fill']
                    }
                },
                {
                    removeStyleElement: true
                }
            ]}))
        .pipe(gulp.dest('src/library/icons'));
});

// Generate SVG Sprite
gulp.task('svg:sprite', function() {
    return gulp.src('src/library/icons/**/*.svg')
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: '.',
                    sprite: 'mds_icons.svg',
                    example: false
                }
            }
        }))
        .pipe(gulp.dest('dist/assets/icons'));
});

// Launch browser with demo - autoreload on save
gulp.task('browser-sync', function() {
    browserSync.init({
        files: [
            'dist/**/*'
        ],
        server: {
            baseDir: "dist"
        }
    });
});

// Watch for file changes and rebuild/reload as needed
gulp.task('watch:library-styles', function(){
    return gulp.watch('src/library/**/*.scss', gulp.series('sass-lint', 'compile-library-styles', 'compile-doc-library-styles', 'compile-doc-styles'));
});

gulp.task('watch:doc-library-styles', function(){
    return gulp.watch('src/doc_library/**/*.scss', gulp.series('sass-lint', 'compile-library-styles', 'compile-doc-library-styles'));
});

gulp.task('watch:doc-styles', function(){
    return gulp.watch('src/doc/**/*.scss', gulp.series('sass-lint', 'compile-library-styles', 'compile-doc-styles'));
});

gulp.task('watch:library-macros', function(){
    return gulp.watch(['src/library/components/**/*.njk', '!src/library/components/mds_library_macros.njk'], gulp.series('concatenate-library-macros', 'compile-docs'));
});

gulp.task('watch:doc-library-macros', function(){
    return gulp.watch(['src/doc_library/components/**/*.njk', '!src/doc_library/components/mds_doc_library_macros.njk'], gulp.series('concatenate-doc-library-macros', 'compile-docs'));
});

gulp.task('watch:docs', function(){
    return gulp.watch(['src/doc/**/*.njk', 'src/doc_templates/**/*.njk'], gulp.series('compile-docs'));
});

gulp.task('watch:svgs', function(){
    return gulp.watch('src/library/icons/**/*.svg', gulp.series('svg:optimize', 'svg:sprite'));
});

gulp.task('watch:library-scripts', function(){
    return gulp.watch(['src/library/components/**/*.js', 'src/library/scripts/**/*.js'], gulp.series('scripts:lint', 'scripts:concat-library-scripts'));
});

gulp.task('watch:doc-library-scripts', function(){
    return gulp.watch('src/doc_library/components/**/*.js', gulp.series('scripts:lint', 'scripts:concat-doc-library-scripts'));
});

//Watch image directories

//Generate tokens.scss and tokens.json from tokens.yaml

gulp.task('watch', gulp.parallel(
                            'watch:docs',
                            'watch:doc-library-macros',
                            'watch:doc-library-scripts',
                            'watch:doc-library-styles', 
                            'watch:doc-styles',
                            'watch:library-macros',
                            'watch:library-scripts',
                            'watch:library-styles', 
                            'watch:svgs'));

// Build dist
gulp.task('build-dist', gulp.parallel(  gulp.series('sass-lint', 'compile-library-styles', 'compile-doc-library-styles', 'compile-doc-styles'),
                                        gulp.series(gulp.parallel('concatenate-library-macros', 'concatenate-doc-library-macros'), 'compile-docs'),
                                        gulp.series('svg:optimize', 'svg:sprite')
                                        ));

// Local dev environment
gulp.task('default', gulp.series('build-dist', gulp.parallel('watch', 'browser-sync')));

// Build releases
