import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/images/php.png';

class Slide4 extends Component {

  render() {
    return (
      <section className="section section-story">
        <header className="section__header">
          <h1>Por que foi criado? Qual problema ele veio resolver?</h1>
        </header>

        <article className="section__content">
          <div className="story-text">
            <p>Foi criado pelo Facebook para resolver o problema na camada de apresentação, o <strong>V (view)</strong> do <strong>MVC</strong>.</p>
            <p>O ReactJS começou como um <strong>port JavaScript do XHP</strong>, uma versão do <strong>PHP</strong> que o Facebook lançou em 2010. </p>
          </div>

          <div className="story-text">
            <p>Mais tarde, um engenheiro do Facebook negociou com seu gerente para levar o XHP ao navegador usando JavaScript e recebeu seis meses para testá-lo. </p>
            <p><strong>O resultado é ReactJS.</strong></p>
          </div>

          <div className="story-image">
            <img src={Image} alt="PHP Logo" />
          </div>
        </article>

        <Link className="section-prev" to={`/slide-3`}></Link>
        <Link className="section-next" to={`/esse-tal-react`}></Link>
      </section>
    );
  }
}

export default Slide4;