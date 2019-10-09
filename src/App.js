import React, { useState } from "react";
import Map from "./components/map";
import Info from "./components/info";
import "./App.css";

function App() {
  const [weather, setWeather] = useState([]);
  const [wikidata, setWikidata] = useState([
    {
      extract: null,
      displayTitle: null,
      image: null
    }
  ]);

  return (
    <div className='ui container grid centered'>
      <div className='row'>
        <h1 className='ui header'>Welcome to Map App</h1>
      </div>
      <Map
        setWikidata={setWikidata}
        wikidata={wikidata}
        setWeather={setWeather}
      />{" "}
      <Info wikidata={wikidata} weather={weather} />
    </div>
  );
}

export default App;
