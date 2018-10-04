import React from 'react';
import TheTree from './../../sources/img/thetree.png';

const Film = () => {
  return(
    <div className="col-lg-2">
      <div className="cuadro_intro_hover">
        <p>
          <img src={ TheTree } className="img-responsive" alt="" />
        </p>
        <div className="caption">
          <div className="blur"></div>
          <div className="caption-text">
            <h3 style={{marginBottom: '26px'}}>Film Scripts</h3>
            <p style={{fontSize: '.9em',}}>Submit your film scripts and your aspirations for assistance, and your script will be annotated with feedback.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Film;
