import React from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Intro from '../src/Components/Intro';
import WhyMe from '../src/Components/WhyMe';
import Footer from '../src/Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <hr/>
      <WhyMe/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
