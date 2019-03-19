import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


class Body extends Component {
  render() {

    return (
    <Router>
      <Header />

      <Footer />
    </Router>
    )
  }
}

export default Body;
