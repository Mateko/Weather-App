import React from "react";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";
import DaysForecastCard from "../DaysForecastCard/DaysForecastCard";
import "./DaysForecast.css";

const DaysForecast = ({ daysForecastResponse }) => {
  const daysForecast = daysForecastResponse.data.data;
  const dayCard = daysForecast.map(day => {
    return <DaysForecastCard day={day} />;
  });

  return (
    <div>
      <div className="ui one grid">
        <div className="sixteen wide column">
          <h1 className="days-forecast-header">
            {daysForecastResponse.data.cityName},{" "}
            {daysForecastResponse.data.countryCode}
          </h1>
        </div>
      </div>
      <div className="ui one column centered grid">
        <div className="column days-forecast-days-container">
          <div className="days-forecast-back-button">
            <LinkButton
              message="Wróć na główną stronę"
              path="/"
              additionalOption="fluid"
            />
          </div>
          <div className="ui sixteen grid">{dayCard}</div>
          <div className="days-forecast-second-back-button">
            <LinkButton
              message="Wróć na główną stronę"
              path="/"
              additionalOption="fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ weather }) => {
  return {
    daysForecastResponse: weather.daysForecast
  };
};

export default connect(mapStateToProps)(DaysForecast);
