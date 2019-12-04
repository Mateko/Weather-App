import React from "react";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";
import Loader from "../Loader";
import "./HoursForecast.css";

const HoursForecast = ({ hoursForecastResponse }) => {
  const displayHoursForecast = () => {
    const hoursForecast = hoursForecastResponse.data.data;

    const formatDate = date => {
      return date.split("T")[1].slice(0, 5);
    };

    return hoursForecast.map(hour => {
      return (
        <div
          className="item hourly-weather-forecast-item"
          key={hour.windGustSpd}
        >
          <img
            className="ui avatar image hourly-weather-forecast-icon"
            src={`https://www.weatherbit.io/static/img/icons/${hour.weather.icon}.png`}
            alt="Weather Icon"
          />
          <div className="content">
            <p>
              <span className="hourly-weather-forecast-hour">
                {formatDate(hour.timestampLocal)}
              </span>
              <span className="hourly-weather-forecast-temperature">
                {hour.temp} &#186; C
              </span>
            </p>
          </div>
        </div>
      );
    });
  };

  if (hoursForecastResponse.length !== 0) {
    return (
      <div>
        <div className="ui one column centered grid">
          <div className="column hourly-weather-forecast-list-container">
            <h1 className="hourly-weather-forecast-header">
              {hoursForecastResponse.data.cityName},{" "}
              {hoursForecastResponse.data.countryCode}
            </h1>
            <LinkButton
              message="Wróć na główną stronę"
              path="/"
              additionalOption="fluid"
            />
            <div className="ui middle aligned divided list">
              {hoursForecastResponse ? displayHoursForecast() : null}
            </div>
            <LinkButton
              message="Wróć na główną stronę"
              path="/"
              additionalOption="fluid"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

const mapStateToProps = ({ weather }) => {
  return {
    hoursForecastResponse: weather.hoursForecast
  };
};

export default connect(mapStateToProps)(HoursForecast);
