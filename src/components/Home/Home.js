import React from "react";
import { connect } from "react-redux";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import {
  currentCity,
  fetchCurrentWeather,
  fetchHoursForecast
} from "../../actions";
import "./Home.css";
import LinkButton from "../LinkButton";

class Home extends React.Component {
  componentDidMount() {
    const currentCity = this.props.city;

    this.props.fetchCurrentWeather(currentCity);
    this.props.fetchHoursForecast(currentCity);
  }

  handleInputChange(e) {
    this.props.currentCity(e.target.value);
  }

  formSubmit(e) {
    e.preventDefault();
    const currentCity = this.props.city;

    this.props.fetchCurrentWeather(currentCity);
    this.props.fetchHoursForecast(currentCity);
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
          <div className="ui one column centered grid home-fetching-error">
            <div className="column home-fetching-error">
              <div className="ui red message">
                Niestety wystąpił błąd, wpisz raz jeszcze szukane miasto.
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
                path="/twenty_four_hours_forecast"
                additionalOption="fluid"
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
  fetchHoursForecast
})(Home);
