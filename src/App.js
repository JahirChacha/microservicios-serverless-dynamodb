// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import RegistroFormulario from './RegistroFormulario';
import PublicacionFormulario from './PublicacionFormulario';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<RegistroFormulario />} />
          <Route path="/publicaciones" element={<PublicacionFormulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
