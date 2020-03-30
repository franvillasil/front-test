import "./list.scss";
import React from "react";
import PropTypes from "prop-types";
import Movie from "../movie/movie";

const List = ({ movieList, filter }) => {
  movieList = movieList.sort((a, b) => a.watched - b.watched);

  const moviesByFilter = () => {
    if (filter !== "" && movieList) {
      movieList = movieList.filter(movie => movie.genres.includes(filter));
      movieList = movieList.sort((a, b) => a.watched - b.watched);
    }
  };

  moviesByFilter();

  return (
    <div className="list">
      {movieList.map(item => (
        <Movie key={item.id} movie={item}></Movie>
      ))}
    </div>
  );
};

List.propTypes = {
  movieList: PropTypes.array.isRequired
};

export default List;
