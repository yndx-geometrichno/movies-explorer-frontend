const contentType = {
  Accept: "application/json",
  "Content-type": "application/json",
};

let BASE_URL = "https://api.movies.project.nomoredomainsmonster.ru";

function getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

function request(endpoint, options) {
  return fetch(`${BASE_URL}${endpoint}`, options).then(getResponse);
}

export const register = (name, email, password) => {
  return request("/signup", {
    method: "POST",
    headers: contentType,
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    return res;
  });
};

export const authorize = (email, password) => {
  return request("/signin", {
    method: "POST",
    headers: contentType,
    credentials: "include",
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    if (data.user._id) {
      localStorage.setItem("userId", data.user._id);
      return data.user;
    }
  });
};

export const logout = () => {
  return request("/signout", {
    method: "POST",
    headers: contentType,
    credentials: "include",
  });
};
