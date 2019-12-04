import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";
import HoursForecast from "./HoursForecastList/HoursForecastList";
import DaysForecast from "./DaysForecast/DaysForecast";
import ErrorPage from "./ErrorPage/ErrorPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home} />
      <Route path="/hours_forecast" component={HoursForecast} />
      <Route path="/days_forecast" component={DaysForecast} />
      <Route path="/error" component={ErrorPage} />
    </BrowserRouter>
  );
};

export default App;
