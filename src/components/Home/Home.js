import React from "react";
import getCurrentWeather from "../../api/weatherbit";
import CurrentTemperature from "../CurrentTemperature/CurrentTemperature";
import "./Home.css";

class Home extends React.Component {
  state = { weather: null, city: "Warszawa", fetchingError: false };

  async fetchCurrentWeather() {
    const cityName = this.state.city;
    try {
      const response = await getCurrentWeather(cityName);

      this.setState({
        weather: response.data.data[0],
        fetchingError: false
      });
    } catch (e) {
      this.setState({
        fetchingError: true
      });
    }
  }

  componentDidMount() {
    this.fetchCurrentWeather();
  }

  handleInputChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  formSubmit(e) {
    e.preventDefault();
    this.fetchCurrentWeather();
  }

  render() {
    return (
      <div>
        <div className="ui two column centered grid">
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
          {this.state.fetchingError ? (
            <div className="ui red message">
              Niestety wystąpił błąd, wpisz raz jeszcze szukane miasto.
            </div>
          ) : null}
        </div>
        {this.state.weather ? (
          <CurrentTemperature weather={this.state.weather} />
        ) : null}
      </div>
    );
  }
}

export default Home;
