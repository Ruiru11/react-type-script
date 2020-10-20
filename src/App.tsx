import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Example from "./Components/Categories/categories"
import NavComponent from "./Components/NavBar/navbar";

function App() {
  return (
    <div className="App">
<NavComponent/>
    <Example />
    </div>
  );
}

export default App;
