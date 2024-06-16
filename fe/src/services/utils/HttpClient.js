class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const res = await fetch(`${this.baseURL}${path}`);
    return res.json();
  }
}

export default HttpClient;
