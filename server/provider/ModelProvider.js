import keystone from 'keystone';
import BlogContentModel from '../model/page/blog/ContentModel';
import _ from 'lodash';

export default function modelProvider(container) {
	/**
	 * Register all keystone models
	 */
	Object.keys(keystone.lists).forEach(dbModelName => {
	  container.service(`${_.camelCase(dbModelName)}Model`, () => keystone.list(dbModelName));
	});

	container.service('blogContentModel', (c) => {
	  return new BlogContentModel({
	    postCategoryModel: c.get('postCategoryModel'),
	    postModel: c.get('postModel')
	  });
	});
}
