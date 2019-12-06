import React from "react";
import "./CurrentWeather.css";
import Loader from "../Loader";

const CurrentWeather = ({ currentWeatherResponse, fetching }) => {
  if (!fetching) {
    const currentWeather = currentWeatherResponse.data.data[0];
    const {
      appTemp,
      cityName,
      temp,
      windSpd,
      windCdir,
      countryCode
    } = currentWeather;

    const { icon } = currentWeather.weather;
    return (
      <div className="ui center aligned grid">
        <div className="column current-weather-container ">
          <div className="sixteen wide column current-weather-city-name">
            <h1>
              {cityName}, {countryCode}
            </h1>
            <hr width="35%" />
          </div>
          <div className="sixteen wide column ">
            <img
              className="current-weather-icon"
              alt="Weather Icon"
              src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
            />
          </div>
          <div className="sixteen wide column ">
            <h3>Temperatura</h3>
          </div>
          <div className="sixteen wide column current-temeperature-values">
            <p>{temp} &#186; C </p>
          </div>
          <div className="sixteen wide column ">
            <h3>Temeperatura odczuwalna</h3>
          </div>
          <div className="sixteen wide column current-temeperature-values">
            <p>{appTemp} &#186; C </p>
          </div>
          <div className="sixteen wide column">
            <h3>Prędkość wiatru</h3>
          </div>
          <div className="sixteen wide column current-temeperature-values">
            <p>{windSpd} m/s </p>
          </div>
          <div className="sixteen wide column">
            <h3>Kierunek wiatru</h3>
          </div>
          <div className="sixteen wide column current-temeperature-values">
            <p>{windCdir} </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui center aligned grid">
        <div className="column current-weather-container ">
          <div className="sixteen wide column current-weather-city-name">
            <Loader />
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentWeather;
