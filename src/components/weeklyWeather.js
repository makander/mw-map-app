import React from "react";

const WeeklyWeather = ({ weeklyWeather }) => {
  console.log(weeklyWeather.filter(item => item.dt_txt.includes("12:00")));

  return (
    <div className='ui cards'>
      {weeklyWeather
        .filter(item => item.dt_txt.includes("12:00"))
        .map(item => {
          return (
            <div class='card'>
              <div class='image'>
                {item.weather.map(item => {
                  return item.icon;
                })}
              </div>
              <div class='content'>
                <div class='header'></div>
                <div class='meta'></div>
                <div class='description'>
                  {item.dt_txt}
                  <br />
                  {item.weather.map(item => {
                    return item.description;
                  })}
                </div>
              </div>
              <div class='extra content'></div>
            </div>
          );
        })}
    </div>
  );
};

export default WeeklyWeather;
