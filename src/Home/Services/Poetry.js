import React from 'react';
import GoldLion from './../../sources/img/gold-lion.png';

const Poetry = () => {
  return(
    <div className="col-lg-2">
      <div className="cuadro_intro_hover ">
        <p>
          <img src={ GoldLion } className="img-responsive" alt="" />
        </p>
        <div className="caption">
          <div className="blur"></div>
          <div className="caption-text">
            <h3 style={{marginBottom: '26px'}}>Poetry</h3>
            <p style={{fontSize: '.9em',}}>Submit your creative writing manuscripts (Poetry, Fiction, & Non-Fiction) and explain what you need assistance with.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poetry;
