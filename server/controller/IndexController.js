const PAGE_NAME = 'index';

export default class HomeController {
  constructor() {}

  get(req, res) {
    res.render(PAGE_NAME, {
      section: PAGE_NAME
    });
  }
}