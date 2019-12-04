import React from "react";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";

import "./ErrorPage.css";
const ErrorPage = ({ error }) => {
  return (
    <div>
      <div className="ui one grid">
        <div className="sixteen wide column error-container">
          <div className="error-icon-container">
            <i className="close icon error-icon"></i>
          </div>
          <h1 className="error-header">{error.message}</h1>
        </div>
      </div>
      <LinkButton
        message="Wróc do głównego ekranu"
        path="/"
        additionalOption={"fluid"}
      />
    </div>
  );
};

const mapStateToProps = ({ weather }) => {
  return {
    error: weather.error
  };
};

export default connect(mapStateToProps)(ErrorPage);
