import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      <div className="app__body">
        <Sidebar/>
        {/* Chat room */}
      </div>
    </div>
  );
}

export default App;
