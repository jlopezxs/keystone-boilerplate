const PAGE_NAME = 'post';

export default class PostController {
  constructor({ postModel }) {
  	this._postModel = postModel;
  }

  async get(req, res) {
  	const { postSlug } = req.params;

  	const postP = this._postModel.model.findOne({
  		state: 'published',
  		slug: postSlug
  	}).populate('author categories').lean().exec();

    const otherPostsP = this._postModel.model.find()
      .where('state', 'published')
      .sort('-publishedDate')
      .populate('author')
      .limit('4')
      .exec();

    const [ post, otherPosts ] = await Promise.all([postP, otherPostsP]);

    res.render(PAGE_NAME, {
      section: 'blog',
      filters: {
        post: postSlug
      },
      data : {
        posts: otherPosts,
        post: post
      }
    });
  }
}
