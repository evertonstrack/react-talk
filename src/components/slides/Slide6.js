import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/images/lib-vs-framework.jpg';

class Slide6 extends Component {

  render() {
    return (
      <section className="section section-lib-framework">
        <header className="section__header">
          <h1>Então esse tal de React.. é um tipo de Angular, certo?</h1>
        </header>

        <article className="section__content">
          <div className="lib-framework-text">
            <p><strong>Não.</strong></p>
            <p>Angular é um framework, um conjunto de ferramentas que resolve vários problemas. Já o React é uma biblioteca, que serve para resolver um único problema, <strong>renderizar componentes.</strong></p>
          </div>

          <figure className="lib-framework-image">
            <img src={Image} alt="Everton Strack" />
          </figure>
        </article>

        <Link className="section-prev" to={`/slide-5`}></Link>
        <Link className="section-next" to={`/slide-7`}></Link>
      </section>
    );
  }
}

export default Slide6;