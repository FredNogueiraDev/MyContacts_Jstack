import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    let body = null;
    const res = await fetch(`${this.baseURL}${path}`);

    const contentType = res.headers.get('content-type');

    if (contentType.includes('application/json')) {
      body = await res.json();
    }

    if (res.ok) {
      return body;
    }

    throw new APIError(res, body);
  }
}

export default HttpClient;
