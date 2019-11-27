import React from "react";
import { connect } from "react-redux";
import { currentCity } from "../../actions";
import "./HoursForecast.css";

const HoursForecast = ({ hoursForecastResponse }) => {
  const hoursForecast = hoursForecastResponse.data.data;
  const city = hoursForecastResponse.data.city_name;
  const countryCode = hoursForecastResponse.data.country_code;

  const displayHoursForecast = () => {
    const formatDate = date => {
      return date.split("T")[1].slice(0, 5);
    };

    return hoursForecast.map(hour => {
      console.log(hour);
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
  return (
    <div>
      <div className="ui one column centered grid">
        <div className="column hourly-weather-forecast-list-container">
          <h1 className="hourly-weather-forecast-header">
            {city}, {countryCode}
          </h1>
          <div className="ui middle aligned divided list">
            {displayHoursForecast()}
          </div>
        </div>
      </div>
    </div>
  );
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
