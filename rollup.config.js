import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import sass from 'rollup-plugin-sass';

export default {
  entry: 'client/js/index.js',
	format: 'iife',
	plugins: [
		sass({
			options: {
				outputStyle: 'compressed'
			},
			output: 'public/styles/bundle.css'
		}),
		resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
		uglify(),
		commonjs(),
	  babel({
	   exclude: 'node_modules/**',
		 runtimeHelpers: true
   	}),
	],
  dest: 'public/js/bundle.js'
};
