import React from 'react';
import Header from './Header';
import Navbar from './Navbar'; //ini untuk export default
// import { Navbar } from './Navbar';
//ini untuk export biasa

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Helloo</h2>
    </div>
  );
}

export default App;
