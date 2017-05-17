const PAGE_NAME = 'blog';

export default class BlogController {
	constructor({ blogContentModel }) {
		this._blogContentModel = blogContentModel;
	}

	async get(req, res) {
		const { page } = req.query;
		const { categorySlug } = req.params;
		const { postCategory, postCategories, posts } = await this._blogContentModel.get({ page, categorySlug });

		res.render(PAGE_NAME, {
			section: PAGE_NAME,
			filters: {
				category: categorySlug
			},
			data: {
				posts: posts,
				categories: postCategories,
				category: postCategory
			}
		});
	}
}
