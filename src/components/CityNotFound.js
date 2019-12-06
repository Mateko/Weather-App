import React from "react";

const CityNotFound = () => {
  return (
    <div className="ui one column centered grid">
      <div className="column home-fetching-error">
        <div className="ui red message">
          Niestety, nie znaleźliśmy podanego miasta
        </div>
      </div>
    </div>
  );
};

export default CityNotFound;
