import React from "react";
import { connect } from "react-redux";
import { currentCity } from "../../actions";
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
        <div className="item hourly-weather-forecast-item">
          <img
            className="ui avatar image hourly-weather-forecast-icon"
            src={`https://www.weatherbit.io/static/img/icons/${hour.weather.icon}.png`}
            alt="Weather Icon"
          />
          <div className="content">
            <p>
              <span className="hourly-weather-forecast-hour">
                {formatDate(hour.timestamp_local)}
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
              {hoursForecastResponse.data.city_name},{" "}
              {hoursForecastResponse.data.country_code}
            </h1>
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

const mapStateToProps = state => {
  return {
    hoursForecastResponse: state.hoursForecastResponse
  };
};

export default connect(mapStateToProps, currentCity)(HoursForecast);
/* */
/*<div class="ui middle aligned divided list">
            <div class="item">
              <img class="ui avatar image" />
              <div class="content"></div>
            </div>
          </div> */
