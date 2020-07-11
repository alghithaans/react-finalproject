import React from 'react';
import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';

class App extends React.Component {
  render () {
    return (
      <>
      <Header/>
      <Body/>
      <Footer/>
      </>
    )
  }
}

export default App;
