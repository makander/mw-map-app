import React, { useState } from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const token = process.env.REACT_APP_TOKEN;

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: 122.4376,
    zoom: 8,
  });

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={token}
      onViewportChange={(viewport) => setViewport({ ...viewport })}
      onClick={(e) => {
        console.log(e, viewport);
      }}></MapGL>
  );
};

export default Map;
