import React from "react";

const InfoPage = props => {
  return (
    <div className='ui items'>
      {console.log(props.weather)}
      {props.wikidata[0].extract === null
        ? null
        : props.wikidata.map(item => {
            return (
              <div className='item'>
                <div className='image'>
                  <img src={item.image} alt='flag of the country' />
                </div>
                <div className='content'>
                  <div className='header huge'>{item.displayTitle}</div>
                  <div className='description'>{item.extract}</div>
                  <br />
                  {props.weather.map(item => {
                    return (
                      <div className='header'>
                        Current weather: {item.dailyForecast.description}{" "}
                      </div>
                    );
                  })}
                  <div className='extra content'>
                    <br />
                    More Info about {item.displayTitle} can be found here
                    <br />
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default InfoPage;
