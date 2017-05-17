import UrlBuilder from '../lib/UrlBuilder';


export default function modelProvider(container) {
	container.service('urlBuilder', (c) => {
	  return new UrlBuilder();
	});
}
