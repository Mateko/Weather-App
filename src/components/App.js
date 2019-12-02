import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";
import HoursForecast from "./HoursForecast/HoursForecast";
import DaysForecast from "./DaysForecast/DaysForecast";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home} />
      <Route path="/hours_forecast" exact component={HoursForecast} />
      <Route path="/days_forecast" exact component={DaysForecast} />
    </BrowserRouter>
  );
};

export default App;
