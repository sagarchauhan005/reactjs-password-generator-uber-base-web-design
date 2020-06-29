import React from 'react';
import './styles/App.css';
import IndexHeader from "./components/header";
import KeyVisualBody from "./components/key-visual-body"

function App() {
  return (
    <div className="App">
        <IndexHeader/>
        <KeyVisualBody/>
    </div>
  );
}

export default App;
