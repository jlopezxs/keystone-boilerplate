import axios from 'axios';
import axiosRetry from 'axios-retry';

export default function apiClientProvider(container) {
	container.service('httpAgent', () => new http.Agent({ keepAlive: true }));
  container.service('httpsAgent', () => new https.Agent({ keepAlive: true }));

  container.value('createApiClient', (options) => {
    const apiClient = axios.create(Object.assign({
      httpAgent: container.get('httpAgent'),
      httpsAgent: container.get('httpsAgent'),
      timeout: 5000,
    }, options));

    axiosRetry(apiClient);

    return apiClient;
  });
}
