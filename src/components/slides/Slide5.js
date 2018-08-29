import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slide5 extends Component {

  render() {
    return (
      <section className="section section-faustao">
        <Link className="section-prev" to={`/esse-tal-react`}></Link>
        <Link className="section-next" to={`/slide-6`}></Link>
      </section>
    );
  }
}

export default Slide5;