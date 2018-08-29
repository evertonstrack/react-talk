import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from  '../../assets/images/props.jpg';

class Slide10 extends Component {

  render() {
    return (
      <section className="section section-react-state">
        <header className="section__header">
          <h1>Propriedades (Props)</h1>
        </header>

        <article className="section__content">
          <div className="section-react-state__text">
            <p>Em todos os tipos de paradigmas no desenvolvimento, passar parâmetros é extremamente comum. Com os componentes do React isso não poderia ser diferente: a diferença é que no React, usamos os props (abreviação para properties).</p>
            <p>Por exemplo: Um <strong>state</strong> passado de um componente pai para um componente filho, é uma <strong>prop.</strong></p>
          </div>

          <div className="section-react-state__image">
            <img src={Image} alt="State exemplo" />
          </div>
        </article>

        <Link className="section-prev" to={`/state`}></Link>
        <Link className="section-next" to={`/render`}></Link>
      </section>
    );
  }
}

export default Slide10;