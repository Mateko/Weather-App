export default (state = [], action) => {
  switch (action.type) {
    case "HOURS_FORECAST_WEATHER":
      return action.payload;
    default:
      return state;
  }
};
