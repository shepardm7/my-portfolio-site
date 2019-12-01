import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home/home.page';

function App() {
  const [shouldShowNav, setShouldShowNav] = useState(false);
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
      { shouldShowNav ?
      <nav className="nav bg-secondary">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/works" className="nav-link">My Works</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav> : null }
      <div className="page-container">
        <HomePage showNav={() => setShouldShowNav(true)} />
      </div>
    </div>
  );
}

export default App;
