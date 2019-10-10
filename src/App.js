import React, { useState } from "react";
import Map from "./components/map";
import Info from "./components/info";
import WeeklyWeather from "./components/weeklyWeather";
import "./App.css";

function App() {
  const [weeklyWeather, setweeklyWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [wikidata, setWikidata] = useState([]);

  const [error, setError] = useState(null);

  return (
    <div className='ui container grid centered'>
      <div className='row'>
        <h1 className='ui header'>Welcome to Map App</h1>
      </div>
      <Map
        setWikidata={setWikidata}
        wikidata={wikidata}
        dailyWeather={dailyWeather}
        weeklyWeather={weeklyWeather}
        setweeklyWeather={setweeklyWeather}
        setDailyWeather={setDailyWeather}
        error={error}
        setError={setError}
      />{" "}
      <Info
        wikidata={wikidata}
        dailyWeather={dailyWeather}
        error={error}
        setError={setError}
        setWikidata={setWikidata}
      />
      <div className='row'>
        <WeeklyWeather weeklyWeather={weeklyWeather} />
      </div>
    </div>
  );
}

export default App;
