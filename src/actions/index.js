import { currentWeather, hoursForecast, daysForecast } from "../api/weatherbit";

export const fetchCurrentWeather = city => async dispatch => {
  const response = await currentWeather(city);

  dispatch({ type: "CURRENT_WEATHER", payload: response });
};

export const fetchHoursForecast = city => async dispatch => {
  const response = await hoursForecast(city);

  dispatch({ type: "HOURS_FORECAST_WEATHER", payload: response });
};

export const fetchDaysForecast = city => async dispatch => {
  const response = await daysForecast(city);

  dispatch({ type: "DAYS_FORECAST_WEATHER", payload: response });
};

export const currentCity = city => {
  return {
    type: "SELECTED_CITY",
    payload: city
  };
};
