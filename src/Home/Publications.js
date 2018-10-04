import React, { Component } from 'react';

// CSS
import './Publications.css'

// IMAGES
import PenQuill from './../sources/img/pen-quill.png';
import ChineseBook from './../sources/img/chinese-book.png';

class Publications extends Component {
  expandedContent = [
    {
      name: 'Intellectual Power Masks Mastery--Distortion in the Mind of the Colonized',
      index: 1,
    },
    {
      name: 'Rhetoric & Composition - Freshman Composition Instruction',
      index: 2,
    },
    {
      name: 'Superior Sisters',
      index: 3,
    },
  ]

  state = {
    contentIndex: 0,
  }

  toggleContent = Index => {
    this.setState({
      contentIndex: Index,
    });
  }

  displayExpandedContent = () => {
    let index = this.state.contentIndex;

    if (index > 0) {
      return (
        <div className='pub-exp-container'>
          { this.expandedContent.filter(row => row.index === index).map(row => {

              return (
                <div>
                  <div className='pub-exp-content'>
                    <p>{ row.name }</p>
                  </div>
                  <div className='pub-exp-content'>
                    <a className='btn btn-default btn-md pub-exp-content-btn' href={ require('./../sources/pdf/' + this.firstWordOf(row.name) + '.pdf') }>READ</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }

    return null;
  }

  firstWordOf = String => {
    let i = 0;

    while (String.length > i && String[i] !== ' ') {
      i++;
    };

    return String.slice(0, i);
  }

  render() {
    return (
      <section id="publications" className="container content-section text-center">
        <div className="pub-head">
          <h2>Publications</h2>
        </div>
        <div className="publications-header">
          <div className="pub-img">
            <img src={ ChineseBook } width="306px" height="210px" alt='Chinese Book' />
          </div>
          <div className="pub-intro">
            <p>Something you want to say about your works</p>
          </div>
          <div className="pub-img">
            <img src={ PenQuill } width="250px" height="300px" alt='Pen and Quill' />
          </div>
        </div>
        <div className="publications-body">
          <div className="pub-lit">
            <a className="btn btn-default btn-lg" id="expand-btn" onClick={ () => this.toggleContent(1) }>Literary</a>
          </div>
          <div className="pub-ped">
            <a className="btn btn-default btn-lg" id="expand-btn" onClick={ () => this.toggleContent(2) }>Pedagogical</a>
          </div>
          <div className="pub-cre">
            <a className="btn btn-default btn-lg" id="expand-btn" onClick={ () => this.toggleContent(3) }>Creative</a>
          </div>
        </div>
        {this.displayExpandedContent()}
      </section>
    )
  }
};

export default Publications;
