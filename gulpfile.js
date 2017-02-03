'use strict';

const   gulp = require('gulp'),
        browserSync = require('browser-sync').create(),
        concat = require('gulp-concat-util'),
        del = require('del'),
        eslint = require('gulp-eslint'),
        flatten = require('flat'), 
        fs = require('fs'),
        gutil = require('gulp-util'),
        jsBeautify = require('js-beautify'),
        nunjucksRender = require('gulp-nunjucks-render'),
        project = require('./package.json'),
        projectDataFilepath = 'src/doc/data/auto-generated/all_data.json',
        projectName = project.name,
        projectNodePackage = require('./index.js'),
        sass = require('gulp-sass'),
        sassLint = require('gulp-sass-lint'),
        semver = require('semver'),                         // Used to automatically generate "x" releases in the /dist folder, 1.1.x, 1.x, etc. 
        svgmin = require('gulp-svgmin'),
        svgSprite = require('gulp-svg-sprite'),
        yaml = require('yamljs');

// Lint scss files
gulp.task('styles:lint', function () {
  return gulp.src('src/**/*.scss', {since: gulp.lastRun('styles:lint')})
    .pipe(sassLint({
        configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
});

gulp.task('styles:lint-all', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sassLint({
        configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
});

// Compile scss files
gulp.task('styles:compile-library', function() {
    return gulp.src('src/library/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/styles/'));
});

gulp.task('styles:compile-doc-library', function() {
    return gulp.src('src/doc_library/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/styles/'));
});

gulp.task('styles:compile-doc', function() {
    return gulp.src('src/doc/assets/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/styles/'));
});

// Concatenate library nunjucks macros
gulp.task('markup:concatenate-library-macros', function(){
    return gulp.src(['src/library/components/**/*.njk', `!src/library/components/${projectName}_library_macros.njk`])
        .pipe(concat(`${projectName}_library_macros.njk`))
        .pipe(concat.header('{# DO NOT EDIT: This file is automatically generated by the project\'s build task #}\n'))
        .pipe(gulp.dest('src/library/components/'));
});

// Concatenate doc_library nunjucks component macros
gulp.task('markup:concatenate-doc-library-macros', function(){
    return gulp.src(['src/doc_library/components/**/*.njk', `!src/doc_library/components/${projectName}_doc_library_macros.njk`])
        .pipe(concat(`${projectName}_doc_library_macros.njk`))
        .pipe(concat.header('{# DO NOT EDIT: This file is automatically generated by the project\'s build task #}\n'))
        .pipe(gulp.dest('src/doc_library/components/'));
});

// Compile doc src to html
gulp.task('markup:compile-docs', function() {
    return gulp.src('src/doc/**/*.njk')
        .pipe(
            nunjucksRender({
                data: fs.existsSync(projectDataFilepath) ? JSON.parse(fs.readFileSync(projectDataFilepath, {encoding: 'UTF-8'})) : {},
                envOptions: {
                    watch: false
                },
                manageEnv: function(env) {
                    projectNodePackage.addDocLibraryNunjucksFilters(env);
                },
                path: ['src']
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
        configFile: './.eslintrc'
    }))
    .pipe(eslint.formatEach('compact', process.stderr))
    .pipe(eslint.failAfterError());
});

// Concatenate Library JS files
gulp.task('scripts:concat-library', function() {
    return gulp.src(['src/library/components/**/*.js', 'src/library/scripts/**/*.js'])
        .pipe(concat(`${projectName}_library.js`))
        .pipe(concat.header('// DO NOT EDIT: This file is automatically generated by the project\'s build task\n'))
        .pipe(gulp.dest('dist/assets/scripts/'));
});

// Concatenate Doc Library JS files
gulp.task('scripts:concat-doc-library', function() {
    return gulp.src(['src/doc_library/components/**/*.js'])
        .pipe(concat(`${projectName}_doc_library.js`))
        .pipe(concat.header('// DO NOT EDIT: This file is automatically generated by the project\'s build task\n'))
        .pipe(gulp.dest('dist/assets/scripts/'));
});

// Optimize SVGs
gulp.task('svgs:optimize', function () {
    return gulp.src('src/library/icons/**/*.svg', {since: gulp.lastRun('svgs:optimize')})
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
gulp.task('svgs:sprite', function() {
    return gulp.src('src/library/icons/**/*.svg')
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: '.',
                    sprite: `${projectName}_icons.svg`,
                    example: false
                }
            }
        }))
        .pipe(gulp.dest('dist/assets/icons'));
});

// Start local server and auto-reload browser when relevant files change
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

gulp.task('images:copy-doc', function() {
    return gulp.src('src/doc/assets/images/**/*', {since: gulp.lastRun('images:copy-doc')})
        .pipe(gulp.dest('dist/assets/images'));    
});

gulp.task('doc-dependencies:copy', function() {
    return gulp.src([
            'node_modules/clipboard/dist/clipboard.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/prismjs/prism.js',
            'node_modules/prismjs/themes/prism.css'
        ])
        .pipe(gulp.dest('dist/assets/doc-dependencies'));    
});


//Generate constants.scss and constants.json from constants.yaml
gulp.task('constants:convert-to-scss-and-json', function(done){
    // First the constants.yaml file is parsed into JSON
    var constants = yaml.load(`src/library/constants/constants.yaml`),
        jsonTokens = {},
        flattenedTokens = flatten(constants, {delimiter: '-'}),
        scss = '',
        prevVarNameParent = false;

    jsonTokens[`${projectName}Tokens`] = constants;
    jsonTokens = JSON.stringify(jsonTokens);
    // Write out JSON version of constants
    fs.writeFileSync(`src/library/data/${projectName}_constants.json`, jsBeautify(jsonTokens));
    if (!fs.existsSync('src/doc/data/auto-generated')) {
        fs.mkdirSync('src/doc/data/auto-generated');
    }
    fs.writeFileSync(`src/doc/data/auto-generated/${projectName}_constants.json`, jsBeautify(jsonTokens));
    //nunjucksData = JSON.parse(jsonTokens);


    // JSON constants are iterated over and scss variable names are manually constructed
    for (var varName in flattenedTokens) {
        var value = flattenedTokens[varName];
        var varNameParent = varName.substr(0, varName.indexOf('-'));
        if (prevVarNameParent && prevVarNameParent !== varNameParent) {
            scss += '\n';
        }
        prevVarNameParent = varNameParent;

        scss += `$${projectName}-` + varName + ': ' + value + ';\n';
    }

    // Write out the concatenated variable string to _${projectName}_constants.scss
    fs.writeFileSync(`src/library/styles/_${projectName}_constants.scss`, scss);
    done();
});

gulp.task('data:build:project', function(done){
    var packageJson = JSON.parse(fs.readFileSync('./package.json', {encoding: 'UTF-8'})),
        projectData = {
            project: {
                name: packageJson.name,
                version: packageJson.version,
                description: packageJson.description
            }
        };
    
    fs.writeFileSync(`src/doc/data/auto-generated/project.json`, jsBeautify(JSON.stringify(projectData)));
    done();
});

gulp.task('data:build:icons', function(done){
    var icon_data = {};

    function get_icon_hierarchy() {
        var icon_filenames = fs.readdirSync('src/library/icons'),
            icon_names = [];

        for (var j=0; j < icon_filenames.length; j++) {
            var filename = icon_filenames[j];
            if (filename.indexOf('.') !== 0) {
                icon_names.push(filename.substring(0, filename.length - 4));
            }
        }
        return icon_names;
    }

    // Icon Names
    icon_data['icons'] = get_icon_hierarchy();

    // Write out the icon Javascript object to icons.json
    fs.writeFileSync('src/doc/data/auto-generated/icons.json', jsBeautify(JSON.stringify(icon_data)));
    fs.writeFileSync('src/library/data/icons.json', jsBeautify(JSON.stringify(icon_data)));
    done();
});

gulp.task('data:build:allData', function(done){
    var generatedDataFiles = fs.readdirSync('src/doc/data/auto-generated'),
        allData = {},
        autoGeneratedDisclaimer = "DO NOT EDIT FILES IN THIS DIRECTORY\nThe files in this directory are automatically generated by the project's build process. They are not in source control and are considered read-only.\nThe files are:\n",
        contentDataFilepath = 'src/doc/data/content.json',
        contentData = JSON.parse(fs.readFileSync(contentDataFilepath, {encoding: 'UTF-8'})),
        allDataFilename = 'all_data.json',
        disclaimerFilename = 'DO_NOT_EDIT_THESE_FILES.txt',
        allDataFilepath = 'src/doc/data/auto-generated/';
    generatedDataFiles.forEach(file => {
        if (file !== allDataFilename && file !== disclaimerFilename) {
            Object.assign(allData, JSON.parse(fs.readFileSync(`src/doc/data/auto-generated/${file}`, {encoding: 'UTF-8'})));
            autoGeneratedDisclaimer += `src/doc/data/auto-generated/${file}\n`;
        }
    }); 

    allData['content'] = contentData;

    autoGeneratedDisclaimer += `${allDataFilepath}${allDataFilename}\n`
    fs.writeFileSync(`${allDataFilepath}${allDataFilename}`, jsBeautify(JSON.stringify(allData)));
    fs.writeFileSync(`${allDataFilepath}${disclaimerFilename}`, autoGeneratedDisclaimer);;

    done();    
});



// Watch for file changes and rebuild/reload as needed
gulp.task('watch:styles:lint-config', function(){
    return gulp.watch('.sass-lint.yml', gulp.series('styles:lint-all', 'build:styles:all'));
});

gulp.task('watch:styles:library', function(){
    return gulp.watch('src/library/**/*.scss', gulp.series('build:styles:all'));
});

gulp.task('watch:styles:doc-library', function(){
    return gulp.watch('src/doc_library/**/*.scss', gulp.series('styles:lint', 'styles:compile-library', 'styles:compile-doc-library'));
});

gulp.task('watch:styles:doc', function(){
    return gulp.watch('src/doc/**/*.scss', gulp.series('styles:lint', 'styles:compile-library', 'styles:compile-doc'));
});

gulp.task('watch:markup:library-macros', function(){
    return gulp.watch(['src/library/components/**/*.njk', `!src/library/components/${projectName}_library_macros.njk`], gulp.series('markup:concatenate-library-macros', 'markup:compile-docs'));
});

gulp.task('watch:markup:doc-library-macros', function(){
    return gulp.watch(['src/doc_library/components/**/*.njk', `!src/doc_library/components/${projectName}_doc_library_macros.njk`], gulp.series('markup:concatenate-doc-library-macros', 'markup:compile-docs'));
});

gulp.task('watch:markup:docs', function(){
    return gulp.watch(['src/doc/**/*.njk', 'src/doc_templates/**/*.njk'], gulp.series('markup:compile-docs'));
});

gulp.task('watch:svgs', function(){
    return gulp.watch('src/library/icons/**/*.svg', gulp.series(gulp.parallel('build:svgs:all', 'data:build:icons'), 'data:build:allData', 'build:markup:all'));
});

gulp.task('watch:scripts:library', function(){
    return gulp.watch(['src/library/components/**/*.js', 'src/library/scripts/**/*.js'], gulp.series('scripts:lint', 'scripts:concat-library'));
});

gulp.task('watch:scripts:doc-library', function(){
    return gulp.watch('src/doc_library/components/**/*.js', gulp.series('scripts:lint', 'scripts:concat-doc-library'));
});

gulp.task('watch:images:doc', function(){
    return gulp.watch('src/doc/assets/images/**/*', gulp.series('images:copy-doc'));
});

gulp.task('watch:constants:library', function(){
    return gulp.watch(`src/library/constants/constants.yaml`, gulp.series('constants:convert-to-scss-and-json', 'data:build:allData', 'build:styles:all', 'build:markup:all'));
});

gulp.task('watch:data:content', function(){
    return gulp.watch('src/doc/data/content.json', gulp.series('data:build:allData', 'build:markup:all'));    
});

gulp.task('watch:data:project', function(){
    return gulp.watch('./package.json', gulp.series('data:build:project', 'data:build:allData', 'build:markup:all'));    
});

gulp.task('watch', gulp.parallel(
                            'watch:data:content',
                            'watch:data:project',
                            'watch:images:doc',
                            'watch:markup:docs',
                            'watch:markup:doc-library-macros',
                            'watch:markup:library-macros',
                            'watch:scripts:doc-library',
                            'watch:scripts:library',
                            'watch:styles:doc',
                            'watch:styles:doc-library', 
                            'watch:styles:library',
                            'watch:styles:lint-config', 
                            'watch:svgs',
                            'watch:constants:library'));

gulp.task('build:markup:all', gulp.series(gulp.parallel('markup:concatenate-library-macros', 'markup:concatenate-doc-library-macros'), 'markup:compile-docs'));
gulp.task('build:scripts:all', gulp.series('scripts:lint', gulp.parallel('scripts:concat-library', 'scripts:concat-doc-library')));
gulp.task('build:styles:all', gulp.series('styles:lint', 'styles:compile-library', 'styles:compile-doc-library', 'styles:compile-doc'));
gulp.task('build:svgs:all', gulp.series('svgs:optimize', 'svgs:sprite'));
gulp.task('build:data:all', gulp.series(gulp.parallel('constants:convert-to-scss-and-json', 'data:build:icons', 'data:build:project'), 'data:build:allData'));
gulp.task('build:project', gulp.parallel('build:data:all', 'build:styles:all', 'build:scripts:all', 'build:markup:all', 'build:svgs:all', 'images:copy-doc', 'doc-dependencies:copy'));


gulp.task('clean:markup:concatenated-macros', function(){
    return(del([`src/library/components/${projectName}_library_macros.njk`, `src/doc_library/components/${projectName}_doc_library_macros.njk`]));
});
gulp.task('clean:data', function(){
    return(del('src/doc/data/auto-generated/**/*'));
});
gulp.task('clean:library-token-files', function(){
    return(del([`src/library/styles/_${projectName}_constants.scss`, `src/library/data/${projectName}_constants.json`]));
});
gulp.task('clean:dist', function(){
    return(del('dist/**/*'));
});
gulp.task('clean:project', gulp.parallel('clean:markup:concatenated-macros', 'clean:data', 'clean:library-token-files', 'clean:dist'));



// Build dist
gulp.task('build:dist', gulp.series('clean:project', 'build:project'));

// Local dev environment
gulp.task('default', gulp.series('build:dist', gulp.parallel('watch', 'browser-sync')));

// Build releases
