// This rollup config is used to bundle the component for modern browsers
// The resolve() plugin is used to bundle the threaded dependencies that lit-element includes
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/esds-rendered-example-entry.js',
  output: {
    file: 'dist/esds-rendered-example.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
  ]
};
