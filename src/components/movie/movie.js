import "./movie.scss";
import React from "react";
import PropTypes from "prop-types";
import Genre from "../genre/genre";
import Toggle from "../toogle/toggle";
import { connect } from "react-redux";
import deleteMovie from "../../redux/actions/movie/deleteMovie";
import editLoading from "../../redux/actions/loading/editLoading";
import { useState } from "react";

const Movie = ({ movie, deleteMovie, editLoading }) => {
  const [mov] = useState(movie);
  const actions = () => {
    deleteMovie(mov.id);
    editLoading(true);
  };

  return (
    <div className="card">
      <div className="flex-container">
        <h3>{mov.title}</h3>
        <Toggle value={mov.watched} />
      </div>
      <div className="flex-container">
        <div className="genreList">
          {mov.genres.map((item, genreIndex) => (
            <Genre key={genreIndex} name={item}></Genre>
          ))}
        </div>
        <button className="btn-delete" onClick={() => actions()}>
          delete
        </button>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default connect(null, { deleteMovie, editLoading })(Movie);
