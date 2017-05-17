const PAGE_NAME = 'contact';

export default class ContactController {
	constructor({ enquiryModel }) {
		this._enquiryModel = enquiryModel;
	}

	async get(req, res) {
    res.render(PAGE_NAME, {
      section: PAGE_NAME,
      enquiryTypes: this._enquiryModel.fields.enquiryType.ops,
      formData: req.body || {},
      validationErrors: {},
      enquirySubmitted: false
    });
	}

  async post(req, res) {
    const newEnquiry = new this._enquiryModel.model();
    const updater = newEnquiry.getUpdateHandler(req);

    let validationErrors = {};
    let enquirySubmitted = false;

    updater.process(req.body, {
      flashErrors: true,
      fields: 'name, email, phone, enquiryType, message',
      errorMessage: 'There was a problem submitting your enquiry:'
    }, err => {
      if (err) {
        validationErrors = err.errors;
      } else {
        enquirySubmitted = true;
      }

      res.render(PAGE_NAME, {
        section: PAGE_NAME,
        enquiryTypes: this._enquiryModel.fields.enquiryType.ops,
        formData: req.body || {},
        validationErrors: validationErrors,
        enquirySubmitted: enquirySubmitted
      });
    });
  }
}
