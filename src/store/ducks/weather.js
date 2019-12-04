import {
  currentWeather,
  hoursForecast,
  daysForecast
} from "../../api/weatherbit";

const CURRENT_WEATHER = "CURRENT_WEATHER";
const HOURS_FORECAST_WEATHER = "HOURS_FORECAST_WEATHER";
const DAYS_FORECAST_WEATHER = "DAYS_FORECAST_WEATHER";
const FETCHING_WEATHER = "FETCHING_WEATHER";
const FETCHING_ERROR = "FETCHING_ERROR";

const initialState = {
  currentWeather: [],
  hoursForecast: [],
  daysForecast: [],
  fetchingCurrentWeather: true,
  fetchingHoursForecast: true,
  fetchingDaysForecast: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_WEATHER":
      return {
        ...state,
        currentWeather: action.payload,
        fetchingCurrentWeather: false
      };
    case "HOURS_FORECAST_WEATHER":
      return {
        ...state,
        hoursForecast: action.payload,
        fetchingHoursForecast: false
      };
    case "DAYS_FORECAST_WEATHER":
      return {
        ...state,
        daysForecast: action.payload,
        fetchingDaysForecast: false
      };
    case "FETCHING_WEATHER":
      return {
        ...state,
        fetchingCurrentWeather: true,
        fetchingHoursForecast: true,
        fetchingDaysForecast: true
      };
    case "FETCHING_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export const fetchAllForecasts = city => async dispatch => {
  await dispatch(fetchingWeather());
  await dispatch(fetchCurrentWeather(city));
  await dispatch(fetchHoursForecast(city));
  await dispatch(fetchDaysForecast(city));
};

export const fetchCurrentWeather = city => async dispatch => {
  try {
    const response = await currentWeather(city);

    dispatch({ type: CURRENT_WEATHER, payload: response });
  } catch (error) {
    dispatch(fetchingError(error));
  }
};

export const fetchHoursForecast = city => async dispatch => {
  try {
    const response = await hoursForecast(city);

    dispatch({ type: HOURS_FORECAST_WEATHER, payload: response });
  } catch (error) {
    dispatch(fetchingError(error));
  }
};

export const fetchDaysForecast = city => async dispatch => {
  try {
    const response = await daysForecast(city);

    dispatch({ type: DAYS_FORECAST_WEATHER, payload: response });
  } catch (error) {
    dispatch(fetchingError(error));
  }
};

const fetchingWeather = () => {
  return {
    type: FETCHING_WEATHER
  };
};

const fetchingError = error => {
  return {
    type: FETCHING_ERROR,
    payload: error
  };
};
