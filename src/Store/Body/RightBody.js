import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Body.css';

// COMPONENTS
import { RightPayment } from './Payment';
import { RightEdit } from './Edit';

const RightBody = props => {
  let page = props.activePage;

  if (page === 1) {
    return(
      <RightEdit
        RightEdit={ props.RightEdit }
        changeExpressTo={ props.changeExpressTo }
        changeInputFor={ props.changeInputFor }
        changeUploadedTo={ props.changeUploadedTo }
        uploaded={ props.uploaded }
      />
    )
  } else if (page === 2) {
    return(
      <RightPayment
        RightPayment={ props.RightPayment }
        changeInputFor={ props.changeInputFor }
      />
    )
  } else {
    return(
      <div></div>
    );
  }
}

RightBody.propTypes = {
  activePage: PropTypes.number.isRequired,
  //Edit
  RightEdit: PropTypes.shape({
    details: PropTypes.string.isRequired,
    express: PropTypes.bool.isRequired,
  }),
  changeExpressTo: PropTypes.func.isRequired,
  changeUploadedTo: PropTypes.func.isRequired,
  uploaded: PropTypes.bool,
  //Payment
  RightPayment: PropTypes.shape({
    cNumber: PropTypes.string.isRequired,
    cDate: PropTypes.string.isRequired,
    cCvv:  PropTypes.string.isRequired,
    termsAccepted: PropTypes.bool.isRequired,
  }).isRequired,
  changeInputFor: PropTypes.func.isRequired,
}

export default RightBody;
