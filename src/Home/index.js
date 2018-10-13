import React, { Component } from 'react';

// COMPONENTS
import Header from './Header';
import About from './About';
import Services from './Services';
import Publications from './Publications';
import Contact from './Contact';
import Download from './Download';

class Home extends Component {

  render() {
    return (
      <div id='page-top'>
        <Header />
        <About />
        <Services />
        <Publications />
        <Contact />
        <Download />
      </div>
    )
  }
}

export default Home;
