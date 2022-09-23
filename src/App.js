import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {  Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Work from './Components/Work';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
