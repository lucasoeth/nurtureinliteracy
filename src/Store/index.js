import React, { Component } from 'react';

// CSS
import './store.css';

// COMPONENTS
import Header from './Header';
import LeftBody from './Body/LeftBody';
import RightBody from './Body/RightBody';
import RightFooter from './Footer/RightFooter';
import LeftFooter from './Footer/LeftFooter';

class Store extends Component {

  state =  {
    activePage: 1,
    serviceIndex: -1,
    serviceLast: 0,
    RightEdit: {
      details: '',
      express: false,
    },
    PersonalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      address: '',
      apt: '',
      zip: '',
      city: '',
    },
    CCInfo: {
      CCNumber: '',
      CCDate: '',
      CCCvv: '',
      termsConditions: false,
    },
  };

  changeActivePageTo = page => {
    this.setState({
      activePage: page,
    })
  };

  changeInputFor = (object, category, e) => {
    console.log(e.target.value);
    const value = e.target.value;
    this.setState(prevState => {
      return {
        [object]: {
          ...prevState[object],
          [category]: value,
        }
      }
    });
  };

  changeToExpress = bool => {
    this.setState(prevState => {
      return {RightEdit: {...prevState.RightEdit,express: bool}}
    })
  }

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
          PersonalInfo={ this.state.PersonalInfo }
          changeInputFor={ this.changeInputFor }
          serviceChosenAt={ this.serviceChosenAt }
          serviceIndex={ this.state.serviceIndex }
          serviceLast={ this.state.serviceLast }
        />

        <RightBody
          activePage={ this.state.activePage }

          RightEdit={ this.state.RightEdit }
          changeToExpress={ this.changeToExpress }

          CCInfo={ this.state.CCInfo }
          changeInputFor={ this.changeInputFor }
        />

        <LeftFooter
          activePage={ this.state.activePage }
        />
        <RightFooter
          activePage={ this.state.activePage }
          changeActivePageTo={ this.changeActivePageTo }
        />

      </div>
    )
  }
}

export default Store;
