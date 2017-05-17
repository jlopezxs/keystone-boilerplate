import _ from 'lodash';

export default function middlewares(container) {
	function initLocals(req, res, next) {
		const locals = res.locals;
		locals.navLinks = [{
			label: 'Home',
			key: 'home',
			href: '/'
		}, {
			label: 'Blog',
			key: 'blog',
			href: '/blog'
		}, {
			label: 'Contact',
			key: 'contact',
			href: '/contact'
		}];
		locals.user = req.user;
		next();
	}

	function flashMessages(req, res, next) {
		const flashMessages = {
			info: req.flash('info'),
			success: req.flash('success'),
			warning: req.flash('warning'),
			error: req.flash('error')
		};
		res.locals.messages = _.some(flashMessages, msgs => msgs.length) ? flashMessages : false;
		next();
	}

	function requireUser(req, res, next) {
		if (!req.user) {
			req.flash('error', 'Please sign in to access this page.');
			res.redirect('/keystone/signin');
		} else {
			next();
		}
	}

	return {
		requireUser,
		flashMessages,
		initLocals
	};
}
