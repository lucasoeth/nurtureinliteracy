import React from 'react';
import Books from './../../sources/img/books.png';

const Dissertations = () => {
  return(
    <div className="col-lg-2">
      <div className="cuadro_intro_hover ">
        <p>
          <img src={ Books } className="img-responsive" alt="" />
        </p>
        <div className="caption">
          <div className="blur"></div>
          <div className="caption-text">
            <h3>Dissertations</h3>
            <p>Reserved for graduate students to submit their theses and dissertations with brief abstracts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dissertations;
