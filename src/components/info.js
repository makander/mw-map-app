import React from "react";

const InfoPage = ({ setError, setWikidata, wikidata, error, dailyWeather }) => {
  {
    console.log(dailyWeather);
  }
  return (
    <div className='ui items'>
      {!wikidata[0]
        ? null
        : wikidata.map(item => {
            return (
              <div className='item'>
                <div className='image'>
                  <img src={item.image} alt='flag of the country' />
                </div>
                <div className='content'>
                  <div className='header huge'>{item.displayTitle}</div>
                  <div className='description'>{item.extract}</div>
                  <br />
                  {dailyWeather.map(item => {
                    return (
                      <div className='header'>
                        Current weather: {item.description}{" "}
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
      {error ? (
        <div className='item'>
          <div className='content'>
            <div className='header huge'>
              An error occurred, please try another location.{" "}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InfoPage;
