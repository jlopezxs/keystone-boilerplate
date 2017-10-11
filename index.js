require('dotenv').load();

const packageJSON = require('./package.json');

require('babel-register')(packageJSON['babel-server']);
require('babel-polyfill');

var keystone = require('keystone');
var marko = require('marko');
var decircularize = require('decircularize');

var renderMarko = function(filePath, locals, callback) {
    var template = marko.load(filePath);
		callback(null, template.renderToString(locals));
};

keystone.init({
	'name': 'Keystone Boilerplate',
	'brand': 'Keystone Boilerplate',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'client/templates',
	'view engine': 'marko',
	'custom engine': renderMarko,
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
