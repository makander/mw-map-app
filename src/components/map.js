import React from 'react';
import MapGL from 'react-map-gl';

const token = process.env.REACT_TOKEN;

const Map = () => {
  return <MapGL mapboxApiAccessToken={token}></MapGL>;
};

export default Map;
