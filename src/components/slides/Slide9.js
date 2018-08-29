import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from  '../../assets/images/state.jpg';

class Slide8 extends Component {

  render() {
    return (
      <section className="section section-react-state">
        <header className="section__header">
          <h1>Estado (State)</h1>
        </header>

        <article className="section__content">
          <div className="section-react-state__text">
            <p>O state pode ser qualquer conjunto de informações que serão utilizadas em algum momento pela interface. </p>
            <p>Como por exemplo: As informações do usuário, uma lista de itens, o resultado de um request ou até informações específicas de UI. </p>
            <p><strong>A regra é: se o componente precisa ser atualizado quando a informação mudar, essa informação deve ficar no state, pois ela representa o “estado” da aplicação.</strong></p>
          </div>

          <div className="section-react-state__image">
            <img src={Image} alt="State exemplo" />
          </div>
        </article>

        <Link className="section-prev" to={`/state`}></Link>
        <Link className="section-next" to={`/props`}></Link>
      </section>
    );
  }
}

export default Slide8;