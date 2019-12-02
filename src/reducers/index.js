import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import currentWeatherReducer from "./currentWeatherReducer";
import hoursForecastReducer from "./hoursForecastReducer";
import daysForecastReducer from "./daysForecastReducer";

export default combineReducers({
  city: cityReducer,
  currentWeatherResponse: currentWeatherReducer,
  hoursForecastResponse: hoursForecastReducer,
  daysForecastResponse: daysForecastReducer
});
