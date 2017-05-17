import _ from 'lodash'

export default class UrlBuilder {
	constructor() {
	}

	get(pageId, options = {}) {
    const page = req.query.page || 1;
    const camelizedPageId = _.camelcase(pageId);

    const fnName = `_${camelizedPageId}Url`;
    if (typeof this[fnName] !== 'function') {
      throw new Error(`No function found for pageId: ${pageId}`);
    }

    return this[fnName](options);
	}

	_homeUrl() {
		return '/';
	}

	_blogUrl({ categorySlug }) {
		const categoryPart = categorySlug ? `/${categorySlug}` : '';
		return `/blog${categoryPart}`;
	}

	_postUrl({ postSlug }){
		const postPart = postSlug ? `/${postSlug}` : '';
		return `/blog/post/${postPart}`;
	}

	_contactUrl() {
		return '/contact';
	}
}
