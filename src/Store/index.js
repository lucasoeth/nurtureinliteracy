import React, { Component } from 'react';

// CSS
import './store.css';

// COMPONENTS
import Header from './Header';
import LeftBody from './Body/LeftBody';
import RightBody from './Body/RightBody';
import RightFooter from './Footer/RightFooter';
import LeftFooter from './Footer/LeftFooter';

import Validate from './Validate';

class Store extends Component {

  state =  {
    activePage: 1,
    serviceIndex: -1,
    serviceLast: 0,
    uploaded: null,

    input: {
      RightEdit: {
        details: '',
        express: false,
      },
      LeftPayment: {
        first: '',
        last: '',
        email: '',
        number: '',
        address: '',
        apt: '',
        zip: '',
        city: '',
      },
      RightPayment: {
        cNumber: '',
        cDate: '',
        cCvv: '',
        termsAccepted: false,
      }
    },

    valid: {
      first: 0,
      last: 0,
      email: 0,
      number: 0,
      address: 0,
      apt: 0,
      zip: 0,
      city: 0,
      CCNumber: 0,
      CCDate: 0,
      CCCvv: 0,
    }
  };

  changeActivePageTo = page => {
    this.setState({
      activePage: page,
    })
  };

  changeInputFor = (object, category, e) => {
    console.log('Object: ' + object + '\nCategory: ' + category + '\nEvent: ' + e.target.value + '\nOriginal: ' + this.state.input.RightEdit.details);

    const value = e.target.value;

    this.setState(prevState => {
      return {
        input: {
          ...prevState.input,
          [object]: {
            ...prevState.input[object],
            [category]: value,
          }
        }
      }
    });
  };

  changeExpressTo = bool => {
    this.setState(prevState => {
      return {RightEdit: {...prevState.RightEdit,express: bool}}
    })
  };

  changeUploadedTo = bool => {
    this.setState(prevState => {
      return {uploaded: bool}
    });
  };

  serviceChosenAt = index => {
    this.setState(prevState => {
      var last;
      if (index === -1) {
        last = prevState.serviceLast;
      } else {
        last = index;
      }
      return {
        serviceIndex: index,
        serviceLast: last,
      }
    })
  };

  validate = () => {
    const result = Validate(this.state);
    this.setState({
      valid: result
    });
  }

  render() {
    return(
      <div id="cart">

        <Header
          activePage={ this.state.activePage }
          changeActivePageTo={ this.changeActivePageTo }
        />

        <LeftBody
          activePage={ this.state.activePage }

          serviceChosenAt={ this.serviceChosenAt }
          serviceIndex={ this.state.serviceIndex }
          serviceLast={ this.state.serviceLast }

          LeftPayment={ this.state.input.LeftPayment }
          changeInputFor={ this.changeInputFor }

          valid={ this.state.valid }
        />

        <RightBody
          activePage={ this.state.activePage }

          RightEdit={ this.state.input.RightEdit }
          changeExpressTo={ this.changeExpressTo }
          uploaded={ this.state.uploaded }
          changeUploadedTo={ this.changeUploadedTo }

          RightPayment={ this.state.input.RightPayment }
          changeInputFor={ this.changeInputFor }
        />

        <LeftFooter
          activePage={ this.state.activePage }
        />

        <RightFooter
          activePage={ this.state.activePage }
          changeActivePageTo={ this.changeActivePageTo }
          validate={ this.validate }
        />

      </div>
    )
  }
}

export default Store;
