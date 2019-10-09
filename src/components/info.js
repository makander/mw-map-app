import React, { useState, useEffect } from "react";

const InfoPage = props => {
  return (
    <div className='ui divided items'>
      {props.wikidata[0].extract === null
        ? null
        : props.wikidata.map(item => {
            return (
              <div className='item'>
                <div className='image'>
                  <img src={item.image} />
                </div>
                <div className='content'>
                  <div className='header'>{item.displayTitle}</div>
                  <div className='description'>{item.extract}</div>
                  <br />
                  <div class='extra content'>More Info here</div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default InfoPage;
