import React from 'react';

const Navbar = props => {
  var home = props.location.pathname === '/' ? true : false;

  return(
    <nav className="navbar navbar-custom navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href={ home ? '#page-top' : '/#page-top'}>
                    <i className="fa fa-graduation-cap"></i> <span className="light"></span>Nurture In Literacy
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <a className="page-scroll" href={ home ? '#about' : '/#about'}>About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href={ home ? '#services' : '/#services'}>Services</a>
                    </li>
                    <li>
                        <a className="page-scroll" href={ home ? '#publications' : '/#publications'}>Publications</a>
                    </li>
		    <li>
                        <a className="page-scroll" href={ home ? '#contact' : '/#contact'}>Submissions</a>
                    </li>
                    <li>
                        <a className="page-scroll" href={ home ? '#download' : '/#download'}>Contact</a>
                    </li>


                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
