import {
  currentWeather,
  hoursForecast,
  daysForecast
} from "../../api/weatherbit";

export const CURRENT_WEATHER = "weather/CURRENT_WEATHER";
export const HOURS_FORECAST_WEATHER = "weather/HOURS_FORECAST_WEATHER";
export const DAYS_FORECAST_WEATHER = "weather/DAYS_FORECAST_WEATHER";

const initialState = {
  currentWeather: [],
  hoursForecast: [],
  daysForecast: [],
  fetching: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_WEATHER":
      return { ...state, currentWeather: action.payload, fetching: false };
    case "HOURS_FORECAST_WEATHER":
      return { ...state, hoursForecast: action.payload, fetching: false };
    case "DAYS_FORECAST_WEATHER":
      return { ...state, daysForecast: action.payload, fetching: false };
    default:
      return state;
  }
};

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
