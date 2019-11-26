import React from "react";
import "./CurrentTemperature.css";

const CurrentTemperature = ({ currentWeatherResponse }) => {
  const {
    app_temp,
    city_name,
    temp,
    wind_spd,
    wind_cdir,
    country_code
  } = currentWeatherResponse.data.data[0];

  const { icon } = currentWeatherResponse.data.data[0].weather;

  return (
    <div className="ui center aligned grid">
      <div className="column current-temperature-container ">
        <div className="sixteen wide column current-temperature-city-name">
          <h1>
            {city_name}, {country_code}
          </h1>
          <hr width="35%" />
        </div>
        <div className="sixteen wide column ">
          <img
            className="current-temperature-icon"
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
          <p>{app_temp} &#186; C </p>
        </div>
        <div className="sixteen wide column">
          <h3>Prędkość wiatru</h3>
        </div>
        <div className="sixteen wide column current-temeperature-values">
          <p>{wind_spd} m/s </p>
        </div>
        <div className="sixteen wide column">
          <h3>Kierunek wiatru</h3>
        </div>
        <div className="sixteen wide column current-temeperature-values">
          <p>{wind_cdir} </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentTemperature;
