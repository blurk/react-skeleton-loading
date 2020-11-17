import React from 'react';
import './styles.css';

import Articles from './components/Articles';
import User from './components/User';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>React skeleton</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}
