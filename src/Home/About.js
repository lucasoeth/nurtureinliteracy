import React from 'react';

// IMAGES
import GoldenGlobe from './../sources/img/Golden_Globe.png';
import Help from './../sources/img/help.png';

const About = () => {
  return (
    <section id="about" className="container content-section text-center">
      <div className="row">
        <div className="col-lg-3 ">
          <img src={ GoldenGlobe } height="310px" width="300px" alt='Golden Globe' />
        </div>
        <div className="col-lg-6 ">
          <h2>About</h2>
          <p>The philosophical pedagogy of our site courteously invites learners to submit manuscripts, short and lengthy; however, not to just get grammatical errors rectified, rather to additionally learn the art of writing and achieve stronger rhetoric and prose. The intention is to alleviate your stress and sculpt you into a proficient and confident writer.</p>
          <p>We aim to have an academic discourse and collaboratively master innovation with valiant individuals globally.</p>
        </div>
        <div className="col-lg-3 ">
          <img src={ Help } height="300px" width="290px" alt=' Help ' />
        </div>
      </div>
    </section>
  )
};

export default About;
