import "./styles.css";
import "./utils.css";
import React from "react";
import ReactDOM from "react-dom";
import FlipCard from "./components/flip-card/FlipCard";
import WeatherLocation from "./components/weather-components/weather-location/WeatherLocation";

function App() {
  return (
    <div className="App">
      <FlipCard
        frontComponent={<WeatherLocation />}
        backComponent={<span>RETRO</span>}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
