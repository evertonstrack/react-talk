import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Image from '../../assets/images/componentes.jpg';

class Slide7 extends Component {

  render() {
    return (
      <section className="section section-react">
        <header className="section__header">
          <h1>Entendendo melhor o React</h1>
        </header>

        <article className="section__content">
          <ul className="section-react__list">
            <li>Introduz o conceito de  componentes;</li>
            <li>Faz a manipulação estruturada do DOM;</li>
            <li>O fluxo é sempre de cima para baixo. Um componente passa o estado dele para os componentes abaixo dele;</li>

            <li><strong>Virtual DOM</strong>, que é uma cópia exata do DOM;</li>
            <li><strong>Statefull</strong> e <strong>Stateless</strong> components. (Manter o estado sempre no componente pai, e os componenetes filhos recebem o estado este estado)</li>
          </ul>
          <ul className="section-react__list">
              <img src={Image} alt="Componentes" />
          </ul>
        </article>

        <Link className="section-prev" to={`/slide-6`}></Link>
        <Link className="section-next" to={`/slide-8`}></Link>
      </section>
    );
  }
}

export default Slide7;