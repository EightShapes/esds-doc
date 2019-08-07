// This rollup config is used to bundle and compile a version of the component for IE11
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/esds-code-snippet-entry-legacy.js',
  output: {
    file: 'dist/esds-code-snippet-legacy.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      presets: [
        ["@babel/env", {"modules": false}] // Putting this in a separate .babelrc file doesn't seem to work
      ],
    })
  ]
};
