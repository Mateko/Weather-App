import axios from "axios";

const weatherbit = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});

const getCurrentWeather = city => {
  const response = weatherbit.get(
    `/current?city=${city}&key=13fae72d089a44d8915a41f808d1c862`
  );

  return response;
};

export default getCurrentWeather;
