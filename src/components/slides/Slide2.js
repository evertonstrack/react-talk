import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from './../../assets/images/evertonstrack.jpg';

class Slide2 extends Component {
  render() {
    return (
      <section className="section section-intro">
        <header className="section__header">
          <h1>Introdução</h1>
        </header>

        <article className="section__content">

          <div className="intro-text">
            <h3>Olá, tudo bem?</h3>
            <p>Eu sou Everton Strack, Front-end developer com grande foco em Design, performance e SEO. Sólido conhecimento em: HTML5, CSS3, JS, AngularJS, Grunt, Gulp, design responsivo, web mobile; Trabalhei em Agências Digitais e Fábricas de Software.</p>
            <p>Sou entusiasta da tecnologia. Gosta de ler entre as linhas da indústria de tecnologia e tentar entender as motivações por trás de decisões que podem parecer incríveis, irracionais ou puramente idiotas. Também gosta de beleza, café medíocre e dias chuvosos.</p>
          </div>

          <figure className="intro-image">
            <img src={Image} alt="Everton Strack" />
          </figure>

        </article>

        <Link className="section-prev" to={`/`}></Link>
        <Link className="section-next" to={`/contexto`}></Link>
      </section>
    );
  }
}

export default Slide2;