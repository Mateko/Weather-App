export default (state = "Warszawa", action) => {
  switch (action.type) {
    case "SELECTED_CITY":
      return action.payload;
    default:
      return state;
  }
};
