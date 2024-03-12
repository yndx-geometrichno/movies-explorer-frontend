import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ movie, name, link, length, onMovieLike }) {
  // const currentUser = useContext(CurrentUserContext);
  const currentUser = {
    id: "owner",
  };
  const isOwn = movie.owner === currentUser._id;
  // const isLiked = movie.likes && movie.likes.some((i) => i === currentUser._id);
  const isLiked = true;

  const movieLikeButtonClassName = `movie__like-btn ${
    isLiked && "movie__like-btn_active"
  }`;

  function handleLikeClick() {
    onMovieLike(movie, isLiked);
  }

  return (
    <article className="movie">
      <img className="movie__img" src={link} alt={name} />
      <div className="movie__info">
        <h2 className="movie__name">{name}</h2>
        <button
          type="button"
          className={`${movieLikeButtonClassName} button`}
          aria-label="Нравится"
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className="movie__length">{length}</p>
    </article>
  );
}

export default MoviesCard;
