import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ContainerRePage from './containers/containerRePage'
import ContainerHome from './containers/containerHome'


class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode();
  };

  render() {
    switch (this.props.activePage){
      case 'home':
        return <ContainerHome />
      case 'rePage':
        return <ContainerRePage />
      default:
        return(
          <h1>page failed to become active</h1>
        );
    }

  }
}

export default App;
