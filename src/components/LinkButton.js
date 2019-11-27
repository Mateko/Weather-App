import { Link } from "react-router-dom";
import React from "react";

const LinkButton = ({ message, path, additionalOption }) => {
  return (
    <Link
      className={`ui blue button ${additionalOption}`}
      role="button"
      to={path}
    >
      {message}
    </Link>
  );
};

export default LinkButton;
