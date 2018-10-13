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
    activePage: 2,
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
  }

  changeActivePageTo = page => {
    this.setState({
      activePage: page,
    })
  };

  changeInputFor = (object, category, e) => {
    console.log(this.state[object][category]);
    this.setState({
      [object]: {
        ...this.state[object],
        [category]: e.target.value,
      }
    });
  }

  render() {
    return(
<<<<<<< HEAD
=======
      <form>
>>>>>>> 0cda4b9777d99b51c3e3169e983bc1c121293b50
        <div id="cart">

          <Header
            activePage={ this.state.activePage }
            changeActivePageTo={ this.changeActivePageTo }
          />

          <LeftBody
            activePage={ this.state.activePage }
            PersonalInfo={ this.state.PersonalInfo }
            changeInputFor={ this.changeInputFor }
          />

          <RightBody
            activePage={ this.state.activePage }
            CCInfo={ this.state.CCInfo }
            changeInputFor={ this.changeInputFor }
          />

          <LeftFooter activePage={ this.state.activePage } />
          <RightFooter activePage={ this.state.activePage } />

        </div>
<<<<<<< HEAD
=======
      </form>
>>>>>>> 0cda4b9777d99b51c3e3169e983bc1c121293b50
    )
  }
}

export default Store;
