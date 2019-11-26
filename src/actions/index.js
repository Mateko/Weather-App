import currentWeather from "../api/weatherbit";

export const fetchCurrentWeather = city => async dispatch => {
  const response = await currentWeather(city);

  dispatch({ type: "CURRENT_WEATHER", payload: response });
};

export const currentCity = city => {
  return {
    type: "SELECTED_CITY",
    payload: city
  };
};
