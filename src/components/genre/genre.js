import React from "react";
import PropTypes from "prop-types";
import "./genre.scss";

const Genre = ({ name }) => (
  <div className="tag">
    <p>{name}</p>
  </div>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired
};

export default Genre;
