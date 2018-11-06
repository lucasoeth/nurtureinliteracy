import React from 'react';
import PropTypes from 'prop-types';

import EditCarousel from './EditCarousel';
import EditService from './EditService';

const LeftEdit = props => {

  const items = [
    {
      src: require('./../../../../sources/img/writer.png'),
      caption: 'Academic',
      description: 'Submit your academic essay with a brief abstract of what you need assistance with.',
      id: 0,
    },
    {
      src: require('./../../../../sources/img/letter.png'),
      caption: 'Cover',
      description: 'Submit your cover letter and it will be revised with feedback.',
      id: 1,
    },
    {
      src: require('./../../../../sources/img/books.png'),
      caption: 'Dissertations',
      description: 'Reserved for graduate students to submit their theses and dissertations with brief abstracts.',
      id: 2,
    },
    {
      src: require('./../../../../sources/img/thetree.png'),
      caption: 'Film',
      description: 'Submit your film scripts and your aspirations for assistance, and your script will be annotated with feedback.',
      id: 3,
    },
    {
      src: require('./../../../../sources/img/gold-lion.png'),
      caption: 'Poetry',
      description: 'Submit your creative writing manuscripts (Poetry, Fiction, & Non-Fiction) and explain what you need assistance with.',
      id: 4,
    },
    {
      src: require('./../../../../sources/img/globe.png'),
      caption: 'Resumes',
      description: 'Submit your accomplishments and qualifications to be organized into a first class curriculum vitae.',
      id: 5,
    },
  ];

  if (props.serviceIndex > -1) {
    return (
      <EditService
        item={ items[props.serviceIndex] }
        serviceChosenAt={ props.serviceChosenAt }
      />
    )
  }
  else {
    return (
      <EditCarousel
        items={ items }
        serviceChosenAt={ props.serviceChosenAt }
        index={ props.serviceIndex }
        serviceLast={ props.serviceLast }
      />
    )
  }
}

LeftEdit.propTypes = {
  serviceIndex: PropTypes.number.isRequired,
  serviceChosenAt: PropTypes.func.isRequired,
  serviceLast: PropTypes.number.isRequired,
}

export default LeftEdit;
