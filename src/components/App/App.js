import "./App.css";
import { AppContext } from "../../contexts/AppContext";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { moviesApi } from "../../utils/MoviesApi";
import { register, authorize, logout } from "../../utils/AuthApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { errorMessages } from "../../constants/errorMessages";
import { successMessages } from "../../constants/successMessages";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMoviesLoading, setMoviesLoading] = useState(false);
  const [inputStatus, setInputStatus] = useState(false);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      moviesApi.getUserInfo(),
      moviesApi.getSavedMovies(),
      mainApi.getBeatMovies(),
    ])
      .then(([userInfoFromServer, savedMoviesFromServer, allMovies]) => {
        setLoggedIn(true);
        setCurrentUser(userInfoFromServer);
        setSavedMovies(savedMoviesFromServer);
        setAllMovies(allMovies);
      })
      .catch((err) => {
        console.log(err);
      });
    if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
      moviesApi.getUserInfo().then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      });
    }
  }, []);

  useEffect(() => {
    setSavedMoviesId(
      savedMovies.map((movie) => {
        return movie.movieId;
      })
    );
  }, [savedMovies]);

  function handleLogin({ email, password }) {
    authorize(email, password)
      .then((res) => {
        if (res._id) {
          navigate("/movies", { replace: true });
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          setCurrentUser(res);
          setLoggedIn(true);
          moviesApi.getSavedMovies().then((res) => {
            setSavedMovies(res);
          });
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setErrorMessage(errorMessages.wrongLoginDataError);
        } else if (err.status === 500) {
          setErrorMessage(errorMessages.serverError);
        } else setErrorMessage(errorMessages.wrongTokenError);
      });
  }

  function onRegister({ name, email, password }) {
    register(name, email, password)
      .then((res) => {
        if (!res.newUser) {
          throw new Error("");
        }
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrorMessage(errorMessages.emailAlreadyExistsError);
        } else if (err.status === 500) {
          setErrorMessage(errorMessages.serverError);
        } else {
          setErrorMessage(errorMessages.signupError);
        }
      });
  }

  function handleProfileSubmit({ email, name }) {
    moviesApi
      .updateUserInfo(email, name)
      .then((res) => {
        setCurrentUser(res);
        setSuccessMessage(successMessages.updateProfileSuccess);
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
          setInputStatus(false);
        }, 3000);
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrorMessage(errorMessages.emailAlreadyExistsError);
        } else if (err.status === 500) {
          setErrorMessage(errorMessages.serverError);
        } else {
          setErrorMessage(errorMessages.profileUpdateError);
        }
        setInputStatus(true);
      });
  }

  function onSignOut() {
    logout()
      .then(() => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("searchValue");
        localStorage.removeItem("userId");
        localStorage.removeItem("shortFilms");
        localStorage.removeItem("moviesResult");
        setLoggedIn(false);
        setCurrentUser({});
        navigate("/", { replace: true });
        setSavedMovies([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieDelete(movie) {
    let movieId = null;
    if (movie.id) {
      const savedMovie = savedMovies.find((item) => item.movieId === movie.id);
      if (savedMovie) {
        movieId = savedMovie._id;
      }
    } else movieId = movie._id;
    setMoviesLoading(true);
    moviesApi.deleteMovie(movieId).then(() => {
      setSavedMovies((state) => state.filter((c) => c._id !== movieId && c));
    });
    setMoviesLoading(false);
  }

  function handleMovieLike(movie) {
    moviesApi
      .saveMovie(movie)
      .then((res) => {
        const { movie: newMovie } = res;
        setSavedMovies((state) =>
          state.map((c) => (c._id === movie.movieId ? newMovie : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
    moviesApi.getSavedMovies().then((res) => {
      setSavedMovies(res);
    });
  }

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        isMoviesLoading,
        setMoviesLoading,
        errorMessage,
        setErrorMessage,
        inputStatus,
        setInputStatus,
        savedMoviesId,
      }}
    >
      <CurrentUserContext.Provider value={{ currentUser }}>
        <div className="page">
          <div className="page__container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signin" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/signup"
                element={<Register onRegister={onRegister} />}
              />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    movies={allMovies}
                    onMovieLike={handleMovieLike}
                    onMovieDelete={handleMovieDelete}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    onSignOut={onSignOut}
                    onEditSubmit={handleProfileSubmit}
                    successMessage={successMessage}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    movies={savedMovies}
                    onMovieDelete={handleMovieDelete}
                  />
                }
              />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
