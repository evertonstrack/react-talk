import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Slide15 extends Component {

  render() {
    return (
      <section className="section section-react-pros-contras">
        <header className="section__header">
          <h1>Considerações</h1>
        </header>

        <article className="section__content">
          <div className="section-react-pros-contras__text">
              <h2>Prós</h2>
              <ul>
                <li>Facilidade de se criar componentes pequenos e reutilizáveis.</li>
                <li>Trabalhar com a abordagem do Virtual DOM, que é bem mais rápido que o DOM nativo.</li>
                <li>Curva de aprendizado relativamente baixa.</li>
                <li>Fácil de aplicar em um projeto.</li>
              </ul>
          </div>

          <div className="section-react-pros-contras__text">
            <h2>Contras</h2>
            <ul>
              <li>Não usa templates (HTML dentro do JS).</li>
              <li>Fácil de projetos maiores virarem um ninho de ratos.</li>
              <li>Diferente do AngularJS e do Vue, o React manipula o DOM pra você, mas toda a parte de lógica da aplicação, você vai ter que fazer</li>
            </ul>
          </div>
        </article>

        <Link className="section-prev" to={`/slide-14`}></Link>
        <Link className="section-next" to={`/slide-16`}></Link>
      </section>
    );
  }
}

export default Slide15;