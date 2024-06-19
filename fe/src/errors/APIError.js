export default class APIError extends Error {
  constructor(res, body) {
    super();

    this.name = 'APIError';
    this.response = res;
    this.message = body?.error || `${res.status} - ${res.statusText}`;
  }
}
