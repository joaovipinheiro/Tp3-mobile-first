import React from 'react';
import './App.css';
import Menu from './Menu'

function App() {
  return (
    <div className="app-container">
      <Menu />
      <section id="home" className="app-section">
        <h1 className="app-header">Home</h1>
        <p className="app-content">Bem-vindo à página inicial.</p>
      </section>
      <section id="about" className="app-section">
        <h1 className="app-header">Sobre</h1>
        <p className="app-content">Esta é a seção sobre a nossa empresa.</p>
      </section>
      <section id="services" className="app-section">
        <h1 className="app-header">Serviços</h1>
        <p className="app-content">Aqui estão os nossos serviços.</p>
      </section>
      <section id="contact" className="app-section">
        <h1 className="app-header">Contato</h1>
        <p className="app-content">Entre em contato conosco.</p>
      </section>
    </div>
  );
}

export default App;