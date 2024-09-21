document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const menuToggle = document.createElement('button');
    
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    menu.parentNode.insertBefore(menuToggle, menu);
    
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('menu-open');
    });
  });
  