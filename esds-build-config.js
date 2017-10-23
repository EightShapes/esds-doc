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
            sources: ['node_modules/prismjs/prism.js',
                        'node_modules/prismjs/components/prism-json.min.js',
                        'node_modules/prismjs/components/prism-scss.min.js',
                        'node_modules/prismjs/components/prism-twig.min.js',
                        'node_modules/svg4everybody/dist/svg4everybody.min.js',
                        'node_modules/smoothscroll-polyfill/dist/smoothscroll.min.js',
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

        env.addFilter('getContrastRatioForHex', function(foregroundColor, backgroundColor) {
            // MIT Licensed function courtesty of Lea Verou
            // https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/color.js
            Math.round = (function(){
                var round = Math.round;

                return function (number, decimals) {
                    decimals = +decimals || 0;

                    var multiplier = Math.pow(100, decimals);

                    return round(number * multiplier) / multiplier;
                };
            })();

            // MIT Licensed functions courtesty of Qambar Raza
            // https://github.com/Qambar/color-contrast-checker/blob/master/src/colorContrastChecker.js
            var rgbClass = {
                toString: function() {
                    return '<r: ' + this.r +
                        ' g: ' + this.g +
                        ' b: ' + this.b +
                        ' >';
                }
            };

            function getRGBFromHex(color) {
                var rgb = Object.create(rgbClass),
                    rVal,
                    gVal,
                    bVal;

                if (typeof color !== 'string') {
                    throw new Error('must use string');
                }

                rVal = parseInt(color.slice(1, 3), 16);
                gVal = parseInt(color.slice(3, 5), 16);
                bVal = parseInt(color.slice(5, 7), 16);

                rgb.r = rVal;
                rgb.g = gVal;
                rgb.b = bVal;

                return rgb;
            }

            function calculateSRGB(rgb) {
                var sRGB = Object.create(rgbClass),
                    key;

                for (key in rgb) {
                    if (rgb.hasOwnProperty(key)) {
                        sRGB[key] = parseFloat(rgb[key] / 255, 10);
                    }
                }

                return sRGB;
            }

            function calculateLRGB(rgb) {
                var sRGB = calculateSRGB(rgb);
                var lRGB = Object.create(rgbClass),
                    key,
                    val = 0;

                for (key in sRGB) {
                    if (sRGB.hasOwnProperty(key)) {
                        val = parseFloat(sRGB[key], 10);
                        if (val <= 0.03928) {
                            lRGB[key] = val / 12.92;
                        } else {
                            lRGB[key] = Math.pow(val + 0.055 / 1.055, 2.4);
                        }
                    }
                }

                return lRGB;
            }

            function calculateLuminance(lRGB) {
                return 0.2126 * lRGB.r + 0.7152 * lRGB.g + 0.0722 * lRGB.b;
            }

            function getContrastRatio(lumA, lumB) {
                var ratio,
                    lighter,
                    darker;

                if (lumA >= lumB) {
                    lighter = lumA;
                    darker = lumB;
                } else {
                    lighter = lumB;
                    darker = lumA;
                }

                ratio = (lighter + 0.05) / (darker + 0.05);

                return Math.round(ratio, 1);
            }

            var color1 = getRGBFromHex(foregroundColor),
                color2 = getRGBFromHex(backgroundColor),
                l1RGB = calculateLRGB(color1),
                l2RGB = calculateLRGB(color2),
                l1 = calculateLuminance(l1RGB),
                l2 = calculateLuminance(l2RGB);

            return getContrastRatio(l1, l2);
        });
    }
};
