export default (state = [], action) => {
  switch (action.type) {
    case "CURRENT_WEATHER":
      return action.payload;
    default:
      return state;
  }
};
