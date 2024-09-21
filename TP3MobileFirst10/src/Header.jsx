import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Bem-vindo ao Meu Site</h1>
    </header>
  );
}

export default Header;