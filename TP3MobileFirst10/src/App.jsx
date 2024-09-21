import React from 'react';
import Header from './Header';   // Importando o componente Header
import Content from './Content'; // Importando o componente Content
import Footer from './Footer';   // Importando o componente Footer
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;