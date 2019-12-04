import { Link } from "react-router-dom";
import React from "react";

const LinkButton = ({ message, path, additionalOption }) => {
  return (
    <div className="ui one column centered grid">
      <div className="sixteen wide column error-back-button">
        <div>
          <Link className={`ui blue button ${additionalOption}`} to={path}>
            {message}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkButton;
