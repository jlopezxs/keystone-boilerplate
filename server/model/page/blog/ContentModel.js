export default class BlogContentModel {
	constructor({ postCategoryModel, postModel }) {
		this._postCategoryModel = postCategoryModel;
		this._postModel = postModel;
	}

	async get({ page, categorySlug }) {
    const postCategoriesP = this._postCategoryModel.model.find().sort('name').lean().exec()
      .then(categories => this._addPostCountToCategories({ categories }));
    const postCategoryP = this._postCategoryModel.model.findOne({ key: categorySlug }).lean().exec();

    const [ postCategories, postCategory ] = await Promise.all([postCategoriesP, postCategoryP]);
		const posts = this._getPosts({ page, postCategory });

		return {
      postCategories,
      postCategory,
      posts
    };
	}

	_getPostCategories() {
		const postCategoriesP = this._postCategoryModel.model.find().sort('name').lean().exec();
		return postCategoriesP.then(categories => this._addPostCountToCategories({ categories }));
	}

  _addPostCountToCategories({ categories }) {
    const postCategoriesCountP = categories.map(category => {
      return this._postModel.model.count().where('categories').in([category.id]).lean().exec().then(postCount => {
        return Object.assign(category, { postCount });
      });
    });
    return Promise.all(postCategoriesCountP);
  }

  _getPosts({ page, postCategory }){
    const query = this._postModel.paginate({
        page: page || 1,
        perPage: 10,
        maxPages: 10,
        filters: {
          'state': 'published'
        }
      })
      .sort('-publishedDate')
      .populate('author categories');

    if (postCategory) {
      query.where('categories').in([postCategory]);
    }

    return new Promise((resolve, reject) => {
      query.exec((err, results) => {
        return err ? reject(err) : resolve(results);
      });
    });
  }
}
