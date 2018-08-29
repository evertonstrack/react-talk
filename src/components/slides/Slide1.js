import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../assets/images/logo.svg';

class Slide1 extends Component {

  render() {
    return (
      <section className="section section-home">
        <img src={logo} className="react-logo" alt="React" />
        <h1>React</h1>
        <Link className="section-next" to={`/slide-2`}></Link>
      </section>
    );
  }
}

export default Slide1;