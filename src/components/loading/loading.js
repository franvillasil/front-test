import "./loading.scss";
import React from "react";
import { connect } from "react-redux";
import editLoading from "../../redux/actions/loading/editLoading";

const Loading = ({ editLoading }) => {
  const delay = () => {
    setTimeout(function() {
      editLoading(false);
    }, 3000);
  };
  delay();
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="text">loading...</p>
    </div>
  );
};

export default connect(null, { editLoading })(Loading);
