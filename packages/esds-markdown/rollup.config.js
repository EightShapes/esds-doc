// This rollup config is used to bundle the component for modern browsers
// The resolve() plugin is used to bundle the threaded dependencies that lit-element includes
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/esds-markdown-entry.js',
  output: {
    file: 'dist/esds-markdown.js',
    format: 'esm',
  },
  plugins: [resolve(), commonjs()],
};
