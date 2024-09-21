import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import './global.css'

function Main() {
  return (
    <main className="main-content">
      <Hero /> {/* Componente Hero importado dentro de Main */}
      <section className="content-section">
        <h2>Sobre nós</h2>
        <p>Esta é a seção onde você pode descrever sua empresa ou seu produto.</p>
      </section>
      <section className="content-section">
        <h2>Nossos Serviços</h2>
        <p>Aqui você pode listar os principais serviços oferecidos pela sua empresa.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
