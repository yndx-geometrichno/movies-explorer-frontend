import "./App.css";
import { AppContext } from "../../contexts/AppContext";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <AppContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
