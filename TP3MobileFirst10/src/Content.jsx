import React from 'react';
import styles from './Content.module.css';

function Content() {
  return (
    <main className={styles.content}>
      <p>
        Este é o conteúdo principal da página. Aqui você pode colocar informações importantes.
      </p>
    </main>
  );
}

export default Content;