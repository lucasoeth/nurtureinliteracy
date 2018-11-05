import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// CSS
import './App.css';
import './include/bootstrap';
import './sources/font-awesome/css/font-awesome.min.css';

// COMPONENTS
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Store from './Store';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={ Navbar } />

          <Route exact path='/' component={ Home } />
          <Route exact path='/Store' component={ Store } />

          <Route path='/' component={ Footer } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
