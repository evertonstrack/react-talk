import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/images/thing.jpg';

class Slide12 extends Component {

  render() {
    return (
      <section className="section section-thing">
        <header className="section__header">
          <h1>Avalie a necessidade</h1>
        </header>

        <article className="section__content">
          <div className="section-thing__text">
            <p>Toda biblioteca introduz um nível de complexidade adicional ao projeto, você deve avaliar se você realmente precisa dela e se já não há soluções dentro das bibliotecas que você já utiliza.</p>
            <p>Antes de usar qualquer lib ou framework, tire algum tempo para pensar se realmente ele é necessário para a sua aplicação.</p>
            <p>Pode parecer só mais uma dependência pra você, mas é o plano de dados do usuário que paga o pato por fazer o download de 1 Kg de javascript.</p>
          </div>

          <div className="section-react-how-to__image">
            <img src={Image} alt="State exemplo" />
          </div>
        </article>

        <Link className="section-prev" to={`/one-more-thing`}></Link>
        <Link className="section-next" to={`/obrigado`}></Link>
      </section>
    );
  }
}

export default Slide12;