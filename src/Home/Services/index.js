import React from 'react';

// COMPONENTS
import Resumes from './Resumes';
import Cover from './Cover';
import Academic from './Academic';
import Film from './Film';
import Dissertations from './Dissertations';
import Poetry from './Poetry';

const Services = () => {
  return (
    <section id="services" className="content-section text-center">
      <div className="services-section">
        <div className="container">
          <div className="row text-center">
            <h2>What Sets Us Apart </h2>
          </div>
          <div className="row" id='services-hover'>

            <Resumes />
            <Cover />
            <Academic />
            <Film />
            <Dissertations />
            <Poetry />

          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;
