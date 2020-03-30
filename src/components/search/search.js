import "./search.scss";
import React, { useRef } from "react";
import { connect } from "react-redux";
import searchMovies from "../../redux/actions/movie/searchMovies.js";

const Search = ({ searchMovies }) => {
  const searchRef = useRef(null);

  function handleChange() {
    searchMovies(searchRef.current.value);
  }

  return (
    <div className="form">
      <input
        className="input"
        type="text"
        ref={searchRef}
        placeholder="search by name"
        onChange={handleChange}
      />
    </div>
  );
};

export default connect(null, { searchMovies })(Search);
