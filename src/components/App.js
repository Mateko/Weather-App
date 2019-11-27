import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";
import HoursForecast from "./HoursForecast/HoursForecast";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route
        path="/twenty_four_hours_forecast"
        exact
        component={HoursForecast}
      />
    </BrowserRouter>
  );
};

export default App;
