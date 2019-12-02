import React from "react";
import { connect } from "react-redux";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import {
  currentCity,
  fetchCurrentWeather,
  fetchHoursForecast,
  fetchDaysForecast
} from "../../actions";
import "./Home.css";
import LinkButton from "../LinkButton";

class Home extends React.Component {
  fetchData() {
    const currentCity = this.props.city;

    this.props.fetchCurrentWeather(currentCity);
    this.props.fetchHoursForecast(currentCity);
    this.props.fetchDaysForecast(currentCity);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleInputChange(e) {
    this.props.currentCity(e.target.value);
  }

  formSubmit(e) {
    e.preventDefault();
    this.fetchData();
  }

  render() {
    const responseStatus = this.props.currentWeatherResponse.status;

    return (
      <div>
        <div className="ui one column centered grid">
          <form>
            <div className="ui column input home-city-input">
              <input
                type="text"
                placeholder="Nazwa miejscowości"
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
            <button
              className="ui blue button home-city-button"
              onClick={this.formSubmit.bind(this)}
            >
              Szukaj
            </button>
          </form>
        </div>
        {responseStatus === 204 ? (
          <div className="ui one column centered grid">
            <div className="column home-fetching-error">
              <div className="ui red message">
                Niestety wystąpił błąd, wpisz jeszcze raz szukane miasto.
              </div>
            </div>
          </div>
        ) : null}
        {responseStatus === 200 ? (
          <CurrentWeather
            currentWeatherResponse={this.props.currentWeatherResponse}
          />
        ) : null}
        <div className="ui one column centered grid">
          <div className="column home-button-container-hours-forecast">
            <div className="home-button-hours-forecast">
              <LinkButton
                message="Pogoda na najbliższe 24h"
                path="/hours_forecast"
                additionalOption={
                  responseStatus === 204 ? "fluid disabled" : "fluid"
                }
              />
            </div>
          </div>
        </div>
        <div className="ui one column centered grid">
          <div className="column home-second-button-container-hours-forecast">
            <div className="home-button-hours-forecast">
              <LinkButton
                message="Pogoda na najbliższe 16 dni"
                path="/days_forecast"
                additionalOption={
                  responseStatus === 204 ? "fluid disabled" : "fluid"
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.city,
    currentWeatherResponse: state.currentWeatherResponse
  };
};

export default connect(mapStateToProps, {
  currentCity,
  fetchCurrentWeather,
  fetchHoursForecast,
  fetchDaysForecast
})(Home);
