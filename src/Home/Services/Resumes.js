import React from 'react';
import Globe from './../../sources/img/globe.png';

const Resumes = () => {
  return(
      <div className="col-lg-2" >
        <div className="cuadro_intro_hover ">
          <p>
            <img src={ Globe } className="img-responsive" alt="" />
          </p>
          <div className="caption">
            <div className="blur"></div>
            <div className="caption-text">
              <h3 style={{marginBottom: '26px'}}>Resumes</h3>
              <p style={{fontSize: '.9em',}}>Submit your accomplishments and qualifications to be organized into a first class curriculum vitae.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Resumes;
