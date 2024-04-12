import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const initialMovies = [
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 1,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 2,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 3,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 4,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 5,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 6,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 7,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 9,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 10,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 11,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 12,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 13,
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
    id: 14,
  },
];
function MoviesCardList(props) {
  const [movies, setMovies] = useState([]);
  const [isButtonVisible, setButtonVisible] = useState(true)

  let moviesPerPage = 24;
  if (window.innerWidth < 1280) {
    console.log(window.innerWidth);
    moviesPerPage = 8;
  } else if (window.innerWidth < 768) {
    console.log(window.innerWidth);
    moviesPerPage = 5;
  }

  useEffect(() => {
    const number = initialMovies.length / 5;
    const movieStack = initialMovies.slice(0, 5)
    setMovies(movieStack);
  }, []);

  return (
    <section className="movies">
      <div className="movies__container">
        {movies.map((item) => {
          const { movie, owner, id } = item;
          return (
            <MoviesCard
              key={id}
              movie={movie}
              owner={owner}
              name={movie.name}
              link={movie.link}
              length={movie.length}
              {...props}
            />
          );
        })}
      </div>
        <button type="button" className={`movies__load-more-btn ${isButtonVisible ? "movies__load-more-btn_visible" : ""}`}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
