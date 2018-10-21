import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="content-section text-center">
      <div className="download-section">
        <div className="container">
          <div className="col-xl-8 offset-xl-2">
            <h2>Contact Sethunya</h2>
            <p>Feel free to email us to provide some feedback or give us suggestions, or to just say hello!</p>
            <p><a href="mailto:sethunya@nurtureinliteracy.com">sethunya@nurtureinliteracy.com</a>
          </p>
          <ul className="list-inline banner-social-buttons">
            <li className="list-inline-item">
              <a href="" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
            </li>
            <li className="list-inline-item">
              <a href="" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a>
            </li>
            <li className="list-inline-item">
              <a href="" className="btn btn-default btn-lg"><i className="fa fa-google-plus fa-fw"></i> <span className="network-name">Google+</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Contact;
