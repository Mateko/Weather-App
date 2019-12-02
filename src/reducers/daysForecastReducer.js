export default (state = [], action) => {
  switch (action.type) {
    case "DAYS_FORECAST_WEATHER":
      return action.payload;
    default:
      return state;
  }
};
