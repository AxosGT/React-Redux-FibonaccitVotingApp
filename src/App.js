import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ContainerRePage from './containers/containerRePage'
import ContainerHome from './containers/containerHome'

class App extends Component {

  render() {
    console.log(this.props.active);
    if(this.props.active === 'home'){
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
