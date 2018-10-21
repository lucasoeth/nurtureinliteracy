import React from 'react';
import Writer from './../../sources/img/writer.png';

const Academic = () => {
  return(
    <div className="col-xl-2">
      <div className="cuadro_intro_hover ">
        <p>
          <img src={ Writer } className="img-fluid" alt="" />
        </p>
        <div className="caption">
          <div className="blur"></div>
          <div className="caption-text">
            <h3>Academic Essays</h3>
            <p>Submit your academic essay with a brief abstract of what you need assistance with.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academic;
