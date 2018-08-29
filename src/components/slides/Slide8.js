import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Slide8 extends Component {

  render() {
    return (
      <section className="section section-react-pilares">
        <header className="section__header">
          <h1>Pilares</h1>
        </header>

        <article className="section__content">
          <div className="section-react-pilares__item">States</div>
          <div className="section-react-pilares__item">Props</div>
          <div className="section-react-pilares__item">Render</div>
          <div className="section-react-pilares__item">Lifecycle</div>
        </article>

        <Link className="section-prev" to={`/slide-7`}></Link>
        <Link className="section-next" to={`/state`}></Link>
      </section>
    );
  }
}

export default Slide8;