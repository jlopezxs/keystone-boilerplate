import BlogController from '../controller/BlogController';
import ContactController from '../controller/ContactController';
import IndexController from '../controller/IndexController';
import PostController from '../controller/PostController';

export default function controllerProvider(container) {
	container.service('blogController', (c) => {
	  return new BlogController({
	    blogContentModel: c.get('blogContentModel')
	  });
	});

	container.service('contactController', (c) => {
	  return new ContactController({
	    enquiryModel: c.get('enquiryModel')
	  });
	});

	container.service('indexController', (c) => {
	  return new IndexController();
	});

	container.service('postController', (c) => {
	  return new PostController({
	    postModel: c.get('postModel')
	  });
	});
}
