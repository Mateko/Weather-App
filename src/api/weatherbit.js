import axios from "axios";
import { API_KEY } from "./apiKey";

const weatherbit = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});

export const currentWeather = city => {
  const response = weatherbit.get(`/current?city=${city}&key=${API_KEY}`);

  return response;
};

export const hoursForecast = city => {
  const response = weatherbit.get(
    `/forecast/hourly?city=${city}&key=${API_KEY}&hours=24`
  );

  return response;
};
