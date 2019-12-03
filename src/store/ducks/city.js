export const SELECTED_CITY = "city/SELECTED_CITY";

export default (state = "Warszawa", action) => {
  switch (action.type) {
    case "SELECTED_CITY":
      return action.payload;
    default:
      return state;
  }
};

export const currentCity = city => {
  return {
    type: "SELECTED_CITY",
    payload: city
  };
};
