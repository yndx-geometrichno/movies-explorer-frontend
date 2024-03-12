import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const movies = [
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
  {
    movie: {
      name: "movie",
      length: "1ч 47м",
      link: "https://img.gazeta.ru/files3/134/17178134/upload-2axdt9c-1677170425-pic4_zoom-1500x1500-14245.jpg",
    },
    owner: "owner",
    likes: ["owner", "owner2"],
  },
];
function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__container">
        {movies.map((movie) => {
          return (
            <MoviesCard
              movie={movie.movie}
              owner={movie.owner}
              name={movie.movie.name}
              link={movie.movie.link}
              length={movie.movie.length}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MoviesCardList;
