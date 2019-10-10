import React, { useState, useEffect } from "react";
import MapGL from "react-map-gl";
import axios from "axios";

const token = process.env.REACT_APP_TOKEN;
const owToken = process.env.REACT_APP_OW_TOKEN;
//const cors = process.env.REACT_APP_CORS;

const Map = ({
  setweeklyWeather,
  setDailyWeather,
  setWikidata,
  wikidata,
  dailyWeather,
  weeklyWeather,
  error,
  setError
}) => {
  const [viewport, setViewport] = useState({
    width: "70vw",
    height: "70vh",
    latitude: 59.3293,
    longitude: 18.0686,
    zoom: 8
  });

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (location !== null) {
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
            setWikidata([
              {
                extract: name.data.extract,
                displayTitle: name.data.displaytitle,
                image: country.data.thumbnail.source
              }
            ]);
            setError();
          })
        )
        .catch(error => {
          setError(error);
          setWikidata([]);
        });
    }
  }, [location, setWikidata, setError, setLocation]);

  const handleClick = async e => {
    e.preventDefault();

    axios
      .all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${viewport.latitude}&lon=${viewport.longitude}&appid=${owToken}&units=metric`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${viewport.latitude}&lon=${viewport.longitude}&appid=${owToken}&units=metric`
        ),
        axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${viewport.longitude},${viewport.latitude}.json?access_token=${token}&types=country`
        )
      ])
      .then(
        axios.spread((weeklyForecast, dailyForecast, res) => {
          console.log(weeklyForecast, dailyForecast);
          setDailyWeather([dailyForecast.data.weather[0]]);
          setweeklyWeather(weeklyForecast.data.list);
          setLocation({
            name: dailyForecast.data.name,
            country: res.data.features[0].text
          });
        })
      )
      .catch(error => {
        console.log("HANDLE CLICK___ wikidata", wikidata, "location", location);
        setError(error);
        setWikidata([]);
      });
  };

  return (
    <div>
      <MapGL
        props
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle={"mapbox://styles/mapbox/navigation-guidance-day-v4"}
        onViewportChange={viewport => setViewport({ ...viewport })}
        onClick={e => {
          handleClick(e);
        }}></MapGL>
    </div>
  );
};

export default Map;
