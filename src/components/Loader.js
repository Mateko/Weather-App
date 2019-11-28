import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="ui grid aligned center">
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Wczytywanie</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Loader;
