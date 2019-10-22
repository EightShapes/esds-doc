// This rollup config is used to bundle the component for modern browsers
// The resolve() plugin is used to bundle the threaded dependencies that lit-element includes
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/esds-tint-swatch-entry.js',
  output: {
    file: 'dist/esds-tint-swatch.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
  ]
};
