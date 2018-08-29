import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/images/create-react-app.jpg';

class Slide16 extends Component {

  render() {
    return (
      <section className="section section-react-how-to">
        <header className="section__header">
          <h1>Por onde começar?</h1>
        </header>

        <article className="section__content">
          <div className="section-react-how-to__text">
            <p>Primeiramente, tenha em mente que todas as libs ou frameworks são puramente javascript. A base de tudo é essa linguagem multiparadiga chamada Javascript.</p>
            <p>Um dos maiores problemas é você pegar React, sem conhecer javascript.</p>

            <p><strong>Começe pelo basico</strong></p>

            <ul>
              <li>Comece aprendendo javascript, ou melhorando o seu conhecimento.</li>
              <li>Se familiarize com o Javascript Moderno</li>
            </ul>
          </div>

          <div className="section-react-how-to__image">
            <img src={Image} alt="State exemplo" />
          </div>

        </article>

        <Link className="section-prev" to={`/slide-15`}></Link>
        <Link className="section-next" to={`/one-more-thing`}></Link>
      </section>
    );
  }
}

export default Slide16;