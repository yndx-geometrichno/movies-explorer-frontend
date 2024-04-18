export default function filterMovies(movies, searchValue, isShort) {
  return movies.filter((movie) => {
    const movieRuName = movie.nameRU.toLowerCase();
    const movieEngName = movie.nameEN.toLowerCase();
    const search = searchValue.toLowerCase();
    if (isShort) {
      return (
        movie.duration <= 40 &&
        (movieRuName.includes(search) || movieEngName.includes(search))
      );
    } else {
      return movieRuName.includes(search) || movieEngName.includes(search);
    }
  });
}
