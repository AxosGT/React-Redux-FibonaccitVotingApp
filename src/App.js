import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ContainerRePage from './containers/containerRePage'
import ContainerHome from './containers/containerHome'


class App extends Component {

  render() {
    if(this.props.activeVote === 'home'){
      return (
        <ContainerHome />
      );
    }else{
      return(
        <ContainerRePage />
      );
    }
  }
}

export default App;
