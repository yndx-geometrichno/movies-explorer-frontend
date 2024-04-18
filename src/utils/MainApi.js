// Api для запросов к апихе со всеми фильмами

const apiConfig = {
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-type": "application/json",
  },
};

class Api {
  constructor({ url, headers, credentials }) {
    this._url = url;
    this._headers = headers;
    this._credentials = credentials;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(endpoint, options) {
    return fetch(`${this._url}${endpoint}`, options).then(this._getResponse);
  }

  getBeatMovies() {
    return this._request(`/`, {
      headers: this._headers,
      credentials: this._credentials,
    });
  }

}

export const mainApi = new Api(apiConfig);
