import React, { Component } from 'react';
import './assets/styles/css/layout.css';
import './assets/styles/css/slides.css';

const changePage = () => {

  document.onkeydown = function (event) {
    let button;

    if (event.keyCode === 39) {
      button = document.querySelector('.section-next');
    } else if (event.keyCode === 37) {
      button = document.querySelector('.section-prev');
    }

    if (button) {
      button.click();
    }
    
  };
}

changePage();

class App extends Component {
  render() {
    return (
      <main className="layout">
        {this.props.children}
      </main>
    );
  }
}

export default App;
