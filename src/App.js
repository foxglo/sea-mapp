import React from 'react';
import MapView from './components/MapView';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';function App() {
  return (
    <div className="App">
      <Header/>
      <MapView/>
      <Footer/>
    </div>
  );
}
export default App;
