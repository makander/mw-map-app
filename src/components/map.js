import React, { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;
const owToken = process.env.REACT_APP_OW_TOKEN;
const cors = process.env.REACT_APP_CORS;

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 59.3293,
    longitude: 18.0686,
    zoom: 8,
  });

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${viewport.latitude}&lon=${viewport.longitude}&appid=${owToken}`
      )
      .then((data) => console.log(data));
    axios
      .get(
        `${cors}/https://en.wikipedia.org/w/api.php?action=query&list=geosearch&format=json&gscoord=${viewport.latitude}|${viewport.longitude}&gsradius=10000&gslimit=10`
      )
      //
      .then((res) => console.log('wiki', res));

    axios
      .get(
        `${cors}/https://en.wikipedia.org/w/api.php?action=query&prop=images&imlimit=max&generator=geosearch&ggsradius=10000&ggscoord=${viewport.latitude}|${viewport.longitude}&format=json`
      )
      .then((res) => console.log('wiki images', res));
  };

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={token}
      onViewportChange={(viewport) => setViewport({ ...viewport })}
      onClick={(e) => {
        handleClick(e);
      }}></MapGL>
  );
};

export default Map;
