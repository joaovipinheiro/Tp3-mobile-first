import React from 'react';
import './hero.css';

function Hero() {
    return (
      <section className="hero">
        <img 
          srcSet="
            /hero-mobile.jpg 576w, 
            /hero-tablet.jpg 992w, 
            /hero-desktop.jpg 1200w"
          sizes="(max-width: 576px) 100vw, 
                 (max-width: 992px) 100vw, 
                 1200px"
          src="/hero-desktop.jpg"
          alt="Imagem destaque"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Bem-vindo ao Nosso Site</h1>
          <p>Oferecemos as melhores soluções para o seu negócio.</p>
        </div>
      </section>
    );
  }
  
  export default Hero;