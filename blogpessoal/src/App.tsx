import React from 'react';
import Navbar from './components/static/navBar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '65vh' }}>
        <Routes> // Antigo Switch
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;