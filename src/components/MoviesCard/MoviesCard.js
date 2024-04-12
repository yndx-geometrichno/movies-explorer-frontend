import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ movie, name, link, length, onMovieLike, onMovieDelete, action }) {
  // const currentUser = useContext(CurrentUserContext);
  const currentUser = {
    id: "owner",
  };
  const isOwn = movie.owner === currentUser._id;
  // const isLiked = movie.likes && movie.likes.some((i) => i === currentUser._id);
  const isLiked = true;

  const movieLikeButtonClassName = `movie__btn movie__btn-like ${
    isLiked && "movie__btn movie__btn-like_active"
  }`;

  function handleLikeClick() {
    onMovieLike(movie, isLiked);
  }

  function handleDeleteClick() {
    onMovieDelete(movie);
  }

  return (
    <article className="movie">
      <img className="movie__img" src={link} alt={name} />
      <div className="movie__info">
        <h2 className="movie__name">{name}</h2>
        {action === "save" ? (
          <button
            type="button"
            className={`${movieLikeButtonClassName} button`}
            aria-label="Нравится"
            onClick={handleLikeClick}
          />
        ) : (
          <button
            type="button"
            className={`movie__btn movie__btn-delete button`}
            aria-label="Удалить"
            onClick={handleDeleteClick}
          />
        )}
      </div>
      <p className="movie__length">{length}</p>
    </article>
  );
}

export default MoviesCard;
