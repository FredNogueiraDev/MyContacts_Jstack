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

  async post(path, body) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const res = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    let responseBody = null;
    const contentType = res.headers.get('content-type');
    if (contentType.includes('application/json')) {
      responseBody = await res.json();
    }

    if (res.ok) {
      return responseBody;
    }

    throw new APIError(res, responseBody);
  }
}

export default HttpClient;
