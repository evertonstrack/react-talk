import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from  '../../assets/images/render.jpg';

class Slide11 extends Component {

  render() {
    return (
      <section className="section section-react-state">
        <header className="section__header">
          <h1>Render</h1>
        </header>

        <article className="section__content">
          <div className="section-react-state__text">
            <p>O método <strong>render</strong> é onde a mágica acontece. Como o nome já diz, ele é o responsável por renderizar nosso componente no navegador.</p>
            <p>É um método puro, o que significa que ele dá a mesma saída sempre que a mesma entrada é fornecida.</p>
            <p>Toda vez que o state muda, ele é chamado automaticamente e a view é atualizada.</p>
            <p>Um ponto importande, é que o React atualiza <strong>apenas a parte do DOM que sofreu alteração.</strong></p>
          </div>

          <div className="section-react-state__image">
            <img src={Image} alt="State exemplo" />
          </div>
        </article>

        <Link className="section-prev" to={`/render`}></Link>
        <Link className="section-next" to={`/lifecycle`}></Link>
      </section>
    );
  }
}

export default Slide11;