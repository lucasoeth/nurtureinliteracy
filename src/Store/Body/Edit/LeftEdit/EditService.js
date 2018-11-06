import React from 'react';
import PropTypes from 'prop-types';

const EditService = props => {
  const item = props.item;

  return (
    <div id='cart-body-left' className='cart-body'>
      <div className='edit-carousel'>
        <div className={item.id === 5 ? 'carousel-img last' : 'carousel-img'}>
          <img
            alt={item.caption}
            src={item.src}
            className='img-fluid'
          />
        </div>
          <h2 className={item.id === 2 ? 'edit-carousel-caption small' : 'edit-carousel-caption'}>{item.caption}</h2>
        <div className='carousel-description'>
          <p>{item.description}</p>
        </div>
        <div>
          <a
            className='btn btn-default btn-md'
            onClick={ () => props.serviceChosenAt(-1) }
          >Back</a>
        </div>
      </div>
    </div>
  )
}

EditService.propTypes = {
  item: PropTypes.shape({
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  serviceChosenAt: PropTypes.func.isRequired,
}

export default EditService;
