import "./toggle.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Toggle = ({ value }) => {
  const [check, setCheck] = useState(value);

  function getClass() {
    return `${check ? "toggle-button active" : "toggle-button"}`;
  }

  function onClickEvent() {
    setCheck(!check);
    value = check;
  }

  return (
    <div>
      <div className="toggle-container">
        <div className="toggle-element">
          <div className={getClass()} onClick={onClickEvent}>
            <div className="inner-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  value: PropTypes.bool
};

export default Toggle;
