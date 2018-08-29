import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Section from './components/shared/section/Section';

import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import Slide15 from './components/slides/Slide15';
import Slide16 from './components/slides/Slide16';
import Slide17 from './components/slides/Slide17';


ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Slide1} />
        <Route exact path="/slide-2" component={Slide2} />
        <Route exact path="/contexto" render={props => (
          <Section title="Contexto histórico" prev="slide-2" next="slide-3" /> 
        )} />
        <Route exact path="/slide-3" component={Slide3} />
        <Route exact path="/slide-4" component={Slide4} />
        <Route exact path="/esse-tal-react" render={props => (
          <Section title="Então esse tal de React.. é um tipo de Angular, certo?" prev="slide-4" next="slide-5" />
        )} />
        <Route exact path="/slide-5" component={Slide5} />
        <Route exact path="/slide-6" component={Slide6} />
        <Route exact path="/slide-7" component={Slide7} />
        <Route exact path="/slide-8" component={Slide8} />
        <Route exact path="/state" render={props => (
          <Section title="Estado (State)" prev="slide-8" next="slide-9" color="azul" />
        )} />
        <Route exact path="/slide-9" component={Slide9} />
        <Route exact path="/props" render={props => (
          <Section title="Propriedades (Props)" prev="slide-9" next="slide-10" color="amarelo" />
        )} />
        <Route exact path="/slide-10" component={Slide10} />
        <Route exact path="/render" render={props => (
          <Section title="render()" prev="slide-10" next="slide-11" />
        )} />
        <Route exact path="/slide-11" component={Slide11} />
        <Route exact path="/lifecycle" render={props => (
          <Section title="Lifecycle" prev="slide-11" next="slide-12" color="verde" />
        )} />
        <Route exact path="/slide-12" component={Slide12} />
        <Route exact path="/slide-13" component={Slide13} />
        <Route exact path="/slide-14" component={Slide14} />
        <Route exact path="/slide-15" component={Slide15} />
        <Route exact path="/slide-16" component={Slide16} />
        <Route exact path="/one-more-thing" render={props => (
          <Section title="One more thing..." prev="slide-16" next="slide-17" />
        )} />
        <Route exact path="/slide-17" component={Slide17} />
        <Route exact path="/obrigado" render={props => (
          <Section title="Até mais e obrigado pelos peixes." prev="slide-17" next="obrigado" color="azul" />
        )} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
