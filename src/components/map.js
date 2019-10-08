import React, { useState, useEffect } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const token = process.env.REACT_APP_TOKEN;
const owToken = process.env.REACT_APP_OW_TOKEN;
//const cors = process.env.REACT_APP_CORS;

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 59.3293,
    longitude: 18.0686,
    zoom: 8
  });

  const [location, setLocation] = useState({
    country: null,
    name: null
  });

  const [wikidata, setWikidata] = useState({
    extract: {},
    displayTitle: {},
    image: null
  });

  const [dailyWeather, setDailyWeather] = useState({});
  useEffect(() => {
    if (location.country !== null) {
      axios
        .all([
          axios.get(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${location.name}`
          ),
          axios.get(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${location.country}`
          )
        ])
        .then(
          axios.spread((name, country) => {
            setWikidata({
              extract: name.data.extract,
              displayTitle: name.data.displaytitle,
              image: country.data.thumbnail.source
            });
          })
        );
    }
  }, [location]);

  const handleClick = async e => {
    e.preventDefault();
    console.log(e);

    axios
      .all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${viewport.latitude}&lon=${viewport.longitude}&appid=${owToken}`
        ),
        axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${viewport.longitude},${viewport.latitude}.json?access_token=${token}&types=country,place`
        )
      ])
      .then(
        axios.spread((weather, res) => {
          console.log("weather", weather);
          setDailyWeather({ weather });
          setLocation({
            name: res.data.features[0].text,
            country: res.data.features[1].text
          });
        })
      );
  };

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={token}
      onViewportChange={viewport => setViewport({ ...viewport })}
      onClick={e => {
        handleClick(e);
      }}></MapGL>
  );
};

export default Map;
