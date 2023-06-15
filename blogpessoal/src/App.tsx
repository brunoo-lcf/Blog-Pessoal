import React from 'react';
import './App.css';
import Navbar from './components/static/navBar/Navbar.tsx';
import Footer from './components/static/footer/Footer.tsx'
import Home from './pages/home/Home.tsx';

function App() {
  return(
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
