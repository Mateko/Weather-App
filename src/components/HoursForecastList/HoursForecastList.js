import React from "react";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";
import HoursForecastItem from "../HoursForecastItem/HoursForecastItem";
import Loader from "../Loader";
import "./HoursForecastList.css";

const HoursForecastList = ({ hoursForecastResponse, fetching }) => {
  if (!fetching) {
    const hoursForecast = hoursForecastResponse.data.data;
    const hourItem = hoursForecast.map(hour => {
      return <HoursForecastItem hour={hour} key={hour.ts} />;
    });

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
            <div className="ui middle aligned divided list">{hourItem}</div>
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
    hoursForecastResponse: weather.hoursForecast,
    fetching: weather.fetchingHoursForecast
  };
};

export default connect(mapStateToProps)(HoursForecastList);
