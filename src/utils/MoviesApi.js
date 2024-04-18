// Api для запросов к собственной апихе

const apiConfig = {
  url: "https://api.movies.project.nomoredomainsmonster.ru",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  credentials: "include",
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
    return Promise.reject(res);
  }

  _request(endpoint, options) {
    return fetch(`${this._url}${endpoint}`, options).then(this._getResponse);
  }

  getSavedMovies() {
    return this._request(`/movies`, {
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  getUserInfo() {
    return this._request(`/users/me`, {
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  updateUserInfo( email, name ) {
    return this._request(`/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    });
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  }) {
    const imageUrl = `https://api.nomoreparties.co/${image.url}`;
    const thumbnailUrl = `https://api.nomoreparties.co/${image.formats.thumbnail.url}`;
    return this._request(`/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: imageUrl,
        trailerLink: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnailUrl,
        movieId: id,
      }),
    });
  }

  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, {
      method: "DELETE",
      headers: { Accept: "application-json" },
      credentials: this._credentials,
    });
  }
}

export const moviesApi = new Api(apiConfig);
