import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sass from 'rollup-plugin-sass';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
  sass({
    options: {
      outputStyle: 'compressed'
    },
    output: 'public/styles/bundle.css'
  }),
  resolve({ jsnext: true, main: true }),
  babel({
    runtimeHelpers: true
  }),
  uglify()
];

export default {
  entry: 'client/js/index.js',
  format: 'iife',
  plugins,
  dest: 'public/js/bundle.js'
};
