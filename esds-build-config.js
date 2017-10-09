const jsBeautify = require('js-beautify'),
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
    stripIndent = require('strip-indent');

module.exports = {
    codeNamespace: 'esds-doc',
    copyTasks: [
        {
            name: 'script-dependencies',
            sources: ['node_modules/clipboard/dist/clipboard.min.js',
                        'node_modules/prismjs/prism.js',
                        'node_modules/prismjs/components/prism-json.min.js',
                        'node_modules/prismjs/components/prism-scss.min.js',
                        'node_modules/prismjs/components/prism-twig.min.js',
                        'node_modules/svg4everybody/dist/svg4everybody.min.js',
                        'node_modules/scrollmonitor/scrollMonitor.js',
                        'node_modules/scrollmonitor/scrollMonitor.js.map'],
            destination: `_site/latest/scripts/dependencies`
        },
        {
            name: 'style-dependencies',
            sources: ['node_modules/prismjs/themes/prism.css'],
            destination: `_site/latest/styles/dependencies`
        },
        {
            name: 'individual-icons',
            sources: ['icons/*'],
            destination: `_site/latest/icons`,
            watch: true
        }
    ],
    manageNunjucksEnv: function(env) {
        env.addFilter('htmlbeautify', function(string) {
            return htmlBeautify(string, htmlBeautifyOptions);
        });

        env.addFilter('cssbeautify', function(string) {
            return cssBeautify(string, cssBeautifyOptions);
        });

        env.addFilter('jsbeautify', function(string) {
            return jsBeautify(string);
        });

        env.addFilter('stripindent', function(string){
            return stripIndent(string);
        });
    }
};
