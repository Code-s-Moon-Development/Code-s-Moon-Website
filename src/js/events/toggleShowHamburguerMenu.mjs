const hamburguerMenuTogglerEL = document.querySelector(
  '.hamburguer-menu-toggler'
);
const hamburguerMenuEL = document.querySelector('.hamburguer-menu');
const hamburguerMenuCloserShortcutEL = document.querySelector(
  '.hamburguer-menu-closer-shortcut'
);

function toggleShowHamburguerMenu() {
  hamburguerMenuTogglerEL.classList.toggle('rotate-hamburguer-rows')
  hamburguerMenuEL.classList.toggle('active-hamburguer-menu');
  hamburguerMenuCloserShortcutEL.classList.toggle(
    'active-hamburguer-menu-closer-shortcut'
  );
}

hamburguerMenuTogglerEL.addEventListener('click', toggleShowHamburguerMenu);

hamburguerMenuCloserShortcutEL.addEventListener(
  'click',
  toggleShowHamburguerMenu
);
