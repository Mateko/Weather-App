import React from "react";
import { formatDate } from "../../helpers/formatDate";

const HoursForecastItem = ({ hour }) => {
  return (
    <div className="item hourly-weather-forecast-item" key={hour.windGustSpd}>
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
};

export default HoursForecastItem;
