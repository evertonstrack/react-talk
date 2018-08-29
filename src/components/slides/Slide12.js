import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slide12 extends Component {

  render() {
    return (
      <section className="section section-react-lifecycle">
        <header className="section__header">
          <h1>Lifecycle</h1>
        </header>

        <article className="section__content">
          <div className="section-react-lifecycle__text">
            <p>Tudo passa por um ciclo de vida <em>(até a uva)</em>: uma árvore, um software, você mesmo, um componente UI em um navegador da Web, todos eles tem seu <strong>nascimento</strong>, <strong>crescimento</strong>, <strong>atualizações</strong> e <strong>morte</strong>.</p>
            <p>Um componente React também possui quatro fases:</p>
            <ul>
              <li>Inicialização</li>
              <li>Montagem</li>
              <li>Atualização</li>
              <li>Desmontagem</li>
            </ul>
          </div>
        </article>

        <Link className="section-prev" to={`/lifecycle`}></Link>
        <Link className="section-next" to={`/slide-13`}></Link>
      </section>
    );
  }
}

export default Slide12;