import React from 'react';

// IMAGES
import Key from './../sources/img/key.png';
import Success from './../sources/img/success.png';

const Submit = () => {
  return (
    <section id="submit" className="container content-section text-center">
      <div className="row">
        <div className="col-lg-4 ">
          <img src={ Key } height="200px" width="320px" alt='Key' />
        </div>
        <div className="col-lg-4 ">
          <h2>Submit</h2>
          <p>You can submit your document in DOC format. All payments are processed via PayPal.</p>
          <a href="./store/" className="btn btn-default btn-lg">Upload File</a>
        </div>
          <div className="col-lg-4 ">
            <img src={ Success } height="240px" width="240px" alt='Success' />
          </div>
      </div>
    </section>
  )
};

export default Submit;
