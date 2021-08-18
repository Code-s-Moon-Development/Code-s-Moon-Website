const hamburguerMenuOpenerEL = document.querySelector(
  '.hamburguer-menu-opener'
);
const hamburguerMenuCloserEL = document.querySelector(
  '.hamburguer-menu-closer'
);
const hamburguerMenuEL = document.querySelector('.hamburguer-menu');
const hamburguerMenuCloserShortcutEL = document.querySelector(
  '.hamburguer-menu-closer-shortcut'
);

function toggleShowHamburguerMenu() {
  hamburguerMenuEL.classList.toggle('active-hamburguer-menu');
  hamburguerMenuCloserShortcutEL.classList.toggle(
    'active-hamburguer-menu-closer-shortcut'
  );
}

hamburguerMenuOpenerEL.addEventListener('click', toggleShowHamburguerMenu);

hamburguerMenuCloserEL.addEventListener('click', toggleShowHamburguerMenu);

hamburguerMenuCloserShortcutEL.addEventListener(
  'click',
  toggleShowHamburguerMenu
);
