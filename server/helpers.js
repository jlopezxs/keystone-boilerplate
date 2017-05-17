export default function helpers(container) {
	const urlBuilder = container.get('urlBuilder');
	function getUrl(pageId, options = {}) {
		return urlBuilder(pageId, options = {});
	}

	return {
		getUrl
	}
}
