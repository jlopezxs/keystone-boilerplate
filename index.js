const packageJSON = require('./package.json');

require('babel-register')(packageJSON['babel-server']);
require('babel-polyfill');

var keystone = require('keystone');
var swig = require('swig');
swig.setDefaults({ cache: false });

keystone.init({
	'name': 'My Site',
	'brand': 'My Site',
	'sass': 'client/public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'client/templates/views',
	'view engine': 'swig',
	'custom engine': swig.renderFile,
	'logger': ':method :url :status :response-time ms - :res[content-length]',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'compress': true,
	'headless': false //true to disable admin
});

keystone.import('server/model');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./server'));

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'enquiries': 'enquiries',
	'users': 'users'
});

keystone.start();
