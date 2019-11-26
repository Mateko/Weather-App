import React from "react";
import { connect } from "react-redux";
import CurrentTemperature from "../CurrentTemperature/CurrentTemperature";
import { currentCity, fetchCurrentWeather } from "../../actions";
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentWeather(this.props.city);
  }

  handleInputChange(e) {
    this.props.currentCity(e.target.value);
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.fetchCurrentWeather(this.props.city);
  }

  render() {
    const responseStatus = this.props.currentWeatherResponse.status;

    return (
      <div>
        <div className="ui one column centered grid">
          <form>
            <div className="ui input home-city-input">
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
            <div className="home-fetching-error">
              <div className="ui red message">
                Niestety wystąpił błąd, wpisz raz jeszcze szukane miasto.
              </div>
            </div>
          </div>
        ) : null}
        {responseStatus === 200 ? (
          <CurrentTemperature
            currentWeatherResponse={this.props.currentWeatherResponse}
          />
        ) : null}
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

export default connect(mapStateToProps, { currentCity, fetchCurrentWeather })(
  Home
);
