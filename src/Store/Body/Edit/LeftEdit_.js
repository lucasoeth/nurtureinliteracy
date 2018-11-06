import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

// CSS
import './Edit.css';

const items = [
  {
    src: require('./../../../sources/img/writer.png'),
    caption: 'Academic',
    description: 'Submit your academic essay with a brief abstract of what you need assistance with.',
    id: 0,
  },
  {
    src: require('./../../../sources/img/letter.png'),
    caption: 'Cover',
    description: 'Submit your cover letter and it will be revised with feedback.',
    id: 1,
  },
  {
    src: require('./../../../sources/img/books.png'),
    caption: 'Dissertations',
    description: 'Reserved for graduate students to submit their theses and dissertations with brief abstracts.',
    id: 2,
  },
  {
    src: require('./../../../sources/img/thetree.png'),
    caption: 'Film',
    description: 'Submit your film scripts and your aspirations for assistance, and your script will be annotated with feedback.',
    id: 3,
  },
  {
    src: require('./../../../sources/img/gold-lion.png'),
    caption: 'Poetry',
    description: 'Submit your creative writing manuscripts (Poetry, Fiction, & Non-Fiction) and explain what you need assistance with.',
    id: 4,
  },
  {
    src: require('./../../../sources/img/globe.png'),
    caption: 'Resumes',
    description: 'Submit your accomplishments and qualifications to be organized into a first class curriculum vitae.',
    id: 5,
  },
];

class LeftEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
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
            <a className='btn btn-default btn-md'>Choose</a>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div id='cart-body-left' className='cart-body'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl cssModule={{height: '20px'}} direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default LeftEdit;
