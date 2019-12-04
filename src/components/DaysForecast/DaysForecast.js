import React from "react";
import { connect } from "react-redux";
import LinkButton from "../LinkButton";
import DaysForecastCard from "../DaysForecastCard/DaysForecastCard";
import Loader from "../Loader";
import "./DaysForecast.css";

const DaysForecast = ({ daysForecastResponse, fetching }) => {
  if (!fetching) {
    const daysForecast = daysForecastResponse.data.data;
    const dayCard = daysForecast.map(day => {
      return <DaysForecastCard day={day} key={day.ts} />;
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
        <LinkButton
          message="Wróć na główną stronę"
          path="/"
          additionalOption="fluid"
        />
        <div className="ui one column centered grid">
          <div className="column days-forecast-days-container">
            <div className="ui sixteen grid">{dayCard}</div>
          </div>
        </div>
        <LinkButton
          message="Wróć na główną stronę"
          path="/"
          additionalOption="fluid"
        />
      </div>
    );
  } else {
    return <Loader />;
  }
};

const mapStateToProps = ({ weather }) => {
  return {
    daysForecastResponse: weather.daysForecast,
    fetching: weather.fetchingDaysForecast
  };
};

export default connect(mapStateToProps)(DaysForecast);
