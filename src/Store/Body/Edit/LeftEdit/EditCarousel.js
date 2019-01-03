import React, {Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

class EditCarousel extends Component {
  state = {
    activeIndex: this.props.serviceLast,
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className='edit-carousel'
        >
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
              onClick={ () => this.props.serviceChosenAt(item.id) }
            >Choose</a>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div id='left-edit' className='cart-body cart-body-left'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl cssModule={{height: '20px'}} direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default EditCarousel;
