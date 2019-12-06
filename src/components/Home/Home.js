import React from "react";
import { connect } from "react-redux";
import { fetchAllForecasts } from "../../store/ducks/weather";
import { currentCity } from "../../store/ducks/city";
import { Redirect } from "react-router-dom";
import LinkButton from "../LinkButton";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CityNotFound from "../CityNotFound";
import "./Home.css";

class Home extends React.Component {
  fetchData() {
    const currentCity = this.props.city;

    this.props.fetchAllForecasts(currentCity);
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
    const { error, city, fetching } = this.props;

    if (error !== null) {
      return <Redirect to="/error" />;
    }

    return (
      <div>
        <div className="ui one column centered grid">
          <form>
            <div className="ui column input home-city-input-container">
              <input
                type="text"
                placeholder="Nazwa miejscowości"
                onChange={this.handleInputChange.bind(this)}
                value={city}
                className="home-city-input"
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
          <CityNotFound />
        ) : (
          <CurrentWeather
            currentWeatherResponse={this.props.currentWeatherResponse}
            fetching={fetching}
          />
        )}
        <div className="home-first-button">
          <LinkButton
            message="Pogoda na najbliższe 24h"
            path="/hours_forecast"
            additionalOption={
              responseStatus === 204 ? "fluid disabled" : "fluid"
            }
          />
        </div>
        <LinkButton
          message="Pogoda na najbliższe 16 dni"
          path="/days_forecast"
          additionalOption={responseStatus === 204 ? "fluid disabled" : "fluid"}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ city, weather }) => {
  return {
    city,
    currentWeatherResponse: weather.currentWeather,
    fetching: weather.fetchingCurrentWeather,
    error: weather.error
  };
};

export default connect(mapStateToProps, {
  currentCity,
  fetchAllForecasts
})(Home);
