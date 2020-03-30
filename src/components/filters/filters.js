import "./filters.scss";
import React from "react";
import { connect } from "react-redux";
import editFilter from "../../redux/actions/filters/editFilter";
import editLoading from "../../redux/actions/loading/editLoading";

const Filters = ({ editFilter, editLoading }) => {
  const clearRadio = () => {
    var ele = document.getElementsByName("genre");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    actions("");
  };

  const actions = genre => {
    editFilter(genre);
    editLoading(true);
  };

  return (
    <div className="container">
      <div className="radio">
        <p>horror</p>
        <input
          type="radio"
          name="genre"
          value="horror"
          onChange={() => actions("horror")}
        />
      </div>
      <div className="radio">
        <p>romance</p>
        <input
          type="radio"
          name="genre"
          value="romance"
          onChange={() => actions("romance")}
        />
      </div>
      <div className="radio">
        <p>comedy</p>
        <input
          type="radio"
          name="genre"
          value="comedy"
          onChange={() => actions("comedy")}
        />
      </div>
      <button className="btn-clear" onClick={clearRadio}>
        clear
      </button>
    </div>
  );
};

export default connect(null, { editFilter, editLoading })(Filters);
