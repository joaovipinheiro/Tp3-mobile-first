import React from 'react';
import './App.css';
import Menu from './Menu'
import Main from './main';

function App() {
  return (
    <div className="app-container">
      <Menu />
      <Main /> {/* Componente Main com o Hero dentro */}
      <footer className="app-footer">
        <p>Rodapé da página - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;