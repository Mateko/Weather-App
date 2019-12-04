import React from "react";
import { nameOfTheDay } from "../../helpers/nameOfTheDay";

const DaysForecastCard = ({ day }) => {
  return (
    <div className="seven wide column days-forecast-day-container" key={day.ts}>
      <h3>{nameOfTheDay(day.datetime)}</h3>
      <h4>{day.datetime}</h4>
      <img
        className="ui avatar image days-forecast-weather-icon"
        src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
        alt="Weather Icon"
      />
      <p>Średnia temperatura:</p>
      <p>{day.temp} &#186; C</p>
      <p>Maksymalna temperatura:</p>
      <p>{day.maxTemp} &#186; C</p>
      <p>Minimalna temperatura: </p>
      <p>{day.minTemp} &#186; C</p>
    </div>
  );
};

export default DaysForecastCard;
