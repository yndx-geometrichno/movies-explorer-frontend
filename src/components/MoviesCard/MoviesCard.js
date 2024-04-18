import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";
import { normalizeDuration } from "../../utils/normalizeDuration";
import { Link } from "react-router-dom";

function MoviesCard({
  movie,
  name,
  link,
  duration,
  movieId,
  trailerLink,
  onMovieLike,
  onMovieDelete,
  action,
  isMovieLiked
}) {
  const stringDuration = normalizeDuration(duration);

  const currentUser = useContext(CurrentUserContext);
  // const isOwn = movie.owner === currentUser._id;
  const [ isLiked, setIsLiked ] = useState(isMovieLiked);
  if (movie.owner && movie.owner.includes(currentUser._id)) {
    setIsLiked(true);
  }

  const movieLikeButtonClassName = `movie__btn movie__btn-like ${
    isLiked && "movie__btn movie__btn-like_active"
  }`;

  function handleLikeClick() {
    onMovieLike(movie);
    setIsLiked(true)
  }

  function handleDeleteClick() {
    onMovieDelete(movie);
    setIsLiked(false);
  }

  return (
    <article className="movie">
      <Link to={trailerLink} target="_blank" >
        <img className="movie__img" src={link} alt={name} />
      </Link>
      <div className="movie__info">
        <h2 className="movie__name">{name}</h2>
        {action === "save" ? (
          <button
            type="button"
            className={`${movieLikeButtonClassName} button`}
            aria-label="Нравится"
            onClick={isLiked ? handleDeleteClick : handleLikeClick}
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
      <p className="movie__length">{stringDuration}</p>
    </article>
  );
}

export default MoviesCard;
