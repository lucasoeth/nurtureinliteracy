import React from 'react';

const Navbar = props => {
  var home = (props.location.pathname === '/');

  const NavLinks = ["about", "services", "publications", "submissions", "contact"];

  return(
    <nav className="navbar navbar-custom fixed-top navbar-expand-md">
      <div className="container">
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-main-collapse">Menu <i className="fa fa-bars"></i>
        </button>
        <a className="navbar-brand page-scroll" href={ home ? '#page-top' : '/#page-top'}>
          <i className="fa fa-graduation-cap"></i>
          <span className="light"></span>
          Nurture In Literacy
        </a>

        <div className="collapse navbar-collapse ml-auto navbar-main-collapse">
          <ul className="nav navbar-nav">
            {NavLinks.map((NavLink, index) => {
              return(
                <li key={ index }className="nav-item">
                  <a  className="page-scroll nav-link"
                      href={ home ? "#" + NavLink : "/#" + NavLink }
                  >{ NavLink }</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
