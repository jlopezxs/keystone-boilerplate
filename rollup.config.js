import sass from 'rollup-plugin-sass';
import markoify from 'markoify';
import envify from 'envify';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import commonjsPlugin from 'rollup-plugin-commonjs';
import browserifyPlugin from 'rollup-plugin-browserify-transform';

const plugins = [
	sass({
    options: {
      outputStyle: 'compressed'
    },
    output: 'public/styles/bundle.css'
  }),
	browserifyPlugin(markoify),
  browserifyPlugin(envify),
  nodeResolvePlugin({
      jsnext: true,  // Default: false
      main: true,  // Default: true
      browser: true,  // Default: false
      preferBuiltins: false,
      extensions: [ '.js', '.marko' ]
  }),
  commonjsPlugin({
      include: [ 'node_modules/**', 'client/**/*.marko', 'client/**/*.js'],
      extensions: [ '.js', '.marko' ]
  })
];

export default {
  entry: 'client/js/index.js',
  format: 'iife',
	moduleName: 'app',
  plugins,
  dest: 'public/js/bundle.js'
};
