import React from 'react';
import './App.scss';
import HomePage from './pages/home/home.page';

function App() {
  return (
    <div className="App">
      <div className="animation-area">
        <ul className="box-area">
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
          <li/>
        </ul>
      </div>
      <div className="page-container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
