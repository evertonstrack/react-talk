import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/images/lifecycle.png';

class Slide13 extends Component {

  render() {
    return (
      <section className="section section-react-lifecycle-image">
        <div className="section-react-lifecycle-image__content">
          <img src={Image} alt="Ciclo de vida do React" />
        </div>

        <Link className="section-prev" to={`/slide-13`}></Link>
        <Link className="section-next" to={`/slide-15`}></Link>
      </section>
    );
  }
}

export default Slide13;