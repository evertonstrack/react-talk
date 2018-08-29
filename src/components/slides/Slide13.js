import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slide13 extends Component {

  render() {
    return (
      <section className="section section-react-lifecycle-metodos">
        <header className="section__header">
          <h1>Principais métodos do ciclo de vida do react</h1>
        </header>

        <article className="section__content">
          <div className="section-react-lifecycle-metodos__text">
            <dl>
              <dt>componentWillMount()</dt>
              <dd>Executado quando o componente estiver prestes a ser montado no DOM da página.</dd>

              <dt>componentDidMount()</dt>
              <dd>Executado depois que o componente foi montado no DOM. <strong>Chamadas da API devem ser feitas sempre neste método</strong>.</dd>

              <dt>shouldComponentUpdate()</dt>
              <dd>Deve retornar <em>true</em> ou <em>false</em>, e então o componente seria re-renderizado ou ignorado. Default: <strong>true.</strong></dd>

              <dt>componentWillUpdate()</dt>
              <dd>Executado somente quando <strong>shouldComponentUpdate</strong> retornar <em>true</em>.</dd>

            </dl>

            <dl>
              
              <dt>componentDidUpdate()</dt>
              <dd>Executado quando o novo componente (já atualizado) foi atualizado no DOM. Usado para reativar as bibliotecas de terceiros.</dd>

              <dt>componentWillReceiveProps()</dt>
              <dd>Executado quando as props mudaram e não são processados ​​pela primeira vez.</dd>

              <dt>componentWillUnmount()</dt>
              <dd>Último método no ciclo de vida. Isso é executado imediatamente antes de o componente ser removido do DOM.</dd>
            </dl>
          </div>
        </article>

        <Link className="section-prev" to={`/slide-12`}></Link>
        <Link className="section-next" to={`/slide-14`}></Link>
      </section>
    );
  }
}

export default Slide13;