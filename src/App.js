import React, { useState, useEffect } from "react";
import Map from "./components/map";
import Info from "./components/info";
import "./App.css";

function App() {
  const [dailyWeather, setDailyWeather] = useState({});
  const [wikidata, setWikidata] = useState([
    {
      extract: null,
      displayTitle: null,
      image: null
    }
  ]);
  const [location, setLocation] = useState({
    country: null,
    name: null
  });

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 59.3293,
    longitude: 18.0686,
    zoom: 8
  });

  return (
    <div className='ui container'>
      <Map
        setWikidata={setWikidata}
        location={location}
        setLocation={setLocation}
        setDailyWeather={setDailyWeather}
        viewport={viewport}
        setViewport={setViewport}
      />{" "}
      <Info wikidata={wikidata} dailyWeather={dailyWeather} />
    </div>
  );
}

export default App;
