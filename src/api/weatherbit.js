import axios from "axios";
import { API_KEY } from "./apiKey";

const weatherbit = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});

const currentWeather = city => {
  const response = weatherbit.get(`/current?city=${city}&key=${API_KEY}`);

  return response;
};

export default currentWeather;
