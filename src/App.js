import React, { useState } from "react";
import Map from "./components/map";
import Info from "./components/info";
import "./App.css";

function App() {
  const [weather, setWeather] = useState([]);
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
        setWeather={setWeather}
        error={error}
        setError={setError}
      />{" "}
      <Info
        wikidata={wikidata}
        weather={weather}
        error={error}
        setError={setError}
        setWikidata={setWikidata}
      />
    </div>
  );
}

export default App;
