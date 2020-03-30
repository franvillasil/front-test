import "./form.scss";
import React, { useRef } from "react";
import { connect } from "react-redux";
import addMovie from "../../redux/actions/movie/addMovie";
import editLoading from "../../redux/actions/loading/editLoading";

const Form = ({ addMovie, editLoading }) => {
  const nameRef = useRef(null);
  const genreRef = useRef(null);

  const actions = () => {
    addMovie(nameRef.current.value, genreRef.current.value);
    editLoading(true);
  };

  return (
    <div className="form">
      <input className="input" type="text" ref={nameRef} placeholder="name" />
      <input className="input" type="text" ref={genreRef} placeholder="genre" />
      <button
        className="btn-add"
        onClick={() => {
          actions();
        }}
      >
        add movie
      </button>
    </div>
  );
};

export default connect(null, { addMovie, editLoading })(Form);
