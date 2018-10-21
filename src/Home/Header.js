import React from 'react';

// IMAGES
import Slog from './../sources/img/slog.png';

const Header = () => {
  return (
    <header className="intro">
      <div className="intro-body" style={{display: 'table', margin: '0 auto',}}>
        <div className="container" style={{height: '100vh', display: 'table-cell', verticalAlign: 'middle',}}>
          <div className="row">
            <div className="col-lg-12">
              <br />
              <br />
              <br />
              <br />
              <img src={ Slog } width="250" height="280" alt='Slog' />
              <p className="intro-text, ikarus" style={{fontSize: '24px'}}>Success Is Our Motive</p>
              <a href="#about" className="btn btn-circle page-scroll">
                <i className="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
