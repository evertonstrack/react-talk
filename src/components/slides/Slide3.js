import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slide3 extends Component {

  render() {
    return (
      <section className="section section-react-intro">
        <header className="section__header">
          <h1>Definição</h1>
        </header>

        <article className="section__content">
          <div className="react-intro-text">
            <p>Uma <strong>biblioteca javascript</strong> para construir interfaces, que aparece em todos os lugares…</p>
            <p className="align-right">..as vezes até onde não deveria.</p>
          </div>
        </article>

        <Link className="section-prev" to={`/contexto`}></Link>
        <Link className="section-next" to={`/slide-4`}></Link>
      </section>
    );
  }
}

export default Slide3;