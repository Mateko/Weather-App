import axios from "axios";
import { API_KEY } from "./apiKey";
import humps from "humps";

const weatherbit = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/",
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data)
  ]
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

export const daysForecast = city => {
  const response = weatherbit.get(
    `/forecast/daily?city=${city}&key=${API_KEY}`
  );

  return response;
};
