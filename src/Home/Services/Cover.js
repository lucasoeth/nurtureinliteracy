import React from 'react';
import Letter from './../../sources/img/letter.jpg';

const Cover = () => {
  return(
    <div className="col-xl-2">
      <div className="cuadro_intro_hover ">
        <p>
          <img src={ Letter } className="img-fluid" alt="" />
        </p>
        <div className="caption">
          <div className="blur"></div>
          <div className="caption-text">
            <h3>Cover Letters</h3>
            <p>Submit your cover letter and it will be revised with feedback.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover;
