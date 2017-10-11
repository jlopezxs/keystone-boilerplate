import keystone from 'keystone';
import RestfulKeystone from 'restful-keystone';
import getMiddlewares from './middleware';
import container from './container';
import getHelpers from './helpers';

const restfulKeystone = RestfulKeystone(keystone);
const helper = getHelpers(container);
const middleware = getMiddlewares(container);

function getController({ name, method }) {
  return container.get(name)[method].bind(container.get(name));
}
console.log(process.env);
exports = module.exports = app => {
  /**
   * Insert helpers in views
   */
  keystone.app.use((req, res, next) => {
    res.locals = Object.assign({}, res.locals, { helper });
    next();
  });

  /**
   * All request middlewares
   */
  keystone.app.use(middleware.initLocals);
  keystone.app.use(middleware.flashMessages);

  /**
   * Rest API
   */
  restfulKeystone
    .expose({
      Post: {
        methods: ['list', 'retrieve'],
        filter: {
          state: 'published'
        },
        populate: [
          {
            path: 'author',
            select: 'name'
          },
          {
            path: 'categories',
            select: 'name'
          }
        ]
      },
      PostCategory: {
        methods: ['list', 'retrieve']
      }
    })
    .start();

  /**
   * Views
   */
  app.get('/', getController({ name: 'indexController', method: 'get' }));
  app.get(
    '/blog/:categorySlug?',
    getController({ name: 'blogController', method: 'get' })
  );
  app.get(
    '/blog/post/:postSlug',
    getController({ name: 'postController', method: 'get' })
  );
  app.get(
    '/contact',
    getController({ name: 'contactController', method: 'get' })
  );
  app.post(
    '/contact',
    getController({ name: 'contactController', method: 'post' })
  );
};
