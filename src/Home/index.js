import React, { Component } from 'react';

// COMPONENTS
import Header from './Header';
import About from './About';
import Services from './Services';
import Publications from './Publications';
import Submissions from './Submissions';
import Contact from './Contact';

class Home extends Component {

  render() {
    return (
      <div id='page-top'>
        <Header />
        <About />
        <Services />
        <Publications />
        <Submissions />
        <Contact />
      </div>
    )
  }
}

export default Home;
