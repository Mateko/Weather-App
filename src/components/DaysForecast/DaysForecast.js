import React from "react";
import { connect } from "react-redux";
import Loader from "../Loader";
import LinkButton from "../LinkButton";
import nameOfTheDay from "./nameOfTheDay";
import "./DaysForecast.css";

const DaysForecast = ({ daysForecastResponse }) => {
  const displayDaysForecast = () => {
    const daysForecast = daysForecastResponse.data.data;

    return daysForecast.map(day => {
      return (
        <div
          className="seven wide column days-forecast-day-container"
          key={day.ts}
        >
          <h3>{nameOfTheDay(day.datetime)}</h3>
          <h4>{day.datetime}</h4>
          <img
            className="ui avatar image days-forecast-weather-icon"
            src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
            alt="Weather Icon"
          />
          <p>Średnia temperatura:</p>
          <p>{day.max_temp} &#186; C</p>
          <p>Maksymalna temperatura:</p>
          <p>{day.max_temp} &#186; C</p>
          <p>Minimalna temperatura: </p>
          <p>{day.min_temp} &#186; C</p>
        </div>
      );
    });
  };

  if (daysForecastResponse.length !== 0) {
    return (
      <div>
        <div className="ui one grid">
          <div className="sixteen wide column">
            <h1 className="days-forecast-header">
              {daysForecastResponse.data.city_name},{" "}
              {daysForecastResponse.data.country_code}
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
            <div className="ui sixteen grid">{displayDaysForecast()}</div>
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
  } else {
    return <Loader />;
  }
};

const mapStateToProps = ({ weather }) => {
  return {
    daysForecastResponse: weather.daysForecast
  };
};

export default connect(mapStateToProps)(DaysForecast);
