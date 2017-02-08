/*global require*/
/*global module*/
// This file is used when leveraging the system as a node module
// It generates various filepaths that you can use in your build tool (Grunt, Gulp, etc)
var packageData = require('./package.json'),
    cssBeautify = require('js-beautify').css,
    cssBeautifyOptions = {
        "newline_between_rules": true,
        "selector_separator_newline": true,
        "preserve_newlines": true,
        "max_preserve_newlines": 1
    },
    htmlBeautify = require('js-beautify').html,
    htmlBeautifyOptions = {
        "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
        "brace_style": "collapse",
        "end_with_newline": false,
        "indent_char": " ",
        "indent_handlebars": false,
        "indent_inner_html": true,
        "indent_size": 4,
        "max_preserve_newlines": 0,
        "preserve_newlines": false,
        "unformatted": ["img", "code", "pre", "sub", "sup", "em", "strong", "b", "i", "u", "strike", "big", "small", "pre"],
        "wrap_line_length": 0
    },
    marked = require('marked'),
    stripIndent = require('strip-indent');


marked.setOptions({
    "renderer": new marked.Renderer(),
    "gfm": false,
    "highlight": false,
    "pedantic": false,
    "sanitize": false,
    "smartLists": true,
    "smartypants": false
});

module.exports = {
    "addDocLibraryNunjucksFilters": function(env) {
        'use strict';
        env.addFilter('updateobj', function(obj, key, value){
          if (typeof obj === 'undefined') {
            obj = {};
          }
          obj[key] = value;
          return obj;
        });

        env.addFilter('isstring', function(obj) {
          return typeof obj === 'string';
        });

        env.addFilter('isarray', function(obj) {
          return Array.isArray(obj);
        });

        env.addFilter('isobject', function(obj) {
            return typeof obj === 'object';
        });

        env.addFilter('split', function(text, delimiter) {
            if (typeof delimiter === 'undefined') {
                delimiter = ',';
            }
            if (typeof text !== 'string') {
                return "ERROR: Must pass a string to the split filter, you didn't pass a string";
            } else {
                return text.split(delimiter);
            }
        });

        env.addFilter('indexof', function(array, value) {
            return array.indexOf(value);
        });

        env.addFilter('htmlbeautify', function(string) {
            return htmlBeautify(string, htmlBeautifyOptions);
        });

        env.addFilter('cssbeautify', function(string) {
            return cssBeautify(string, cssBeautifyOptions);
        });

        env.addFilter('stripindent', function(string){
            return stripIndent(string);
        });

        env.addFilter('markdown', function(string, wrap, wrapper_class) {
            var rendered_markup = marked(stripIndent(string));
            wrap = typeof wrap === 'undefined' ? true : wrap;
            wrapper_class = typeof wrapper_class === 'undefined' ? 'comet-long-form-text' : wrapper_class;

            if (wrap) {
                rendered_markup = '<div class="' + wrapper_class + '">' + rendered_markup + "</div>";
            }

            return env.filters.safe(rendered_markup);
        });

        env.addFilter('nunjucksrenderstring', function(string, context){
            return env.renderString(string, context);
        });

        env.addFilter('getcontext', function(){
          return this.ctx;
        });
    }
};
