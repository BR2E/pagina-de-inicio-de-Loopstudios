const menuLista = document.getElementById('menuLista');
const iconMenu = document.getElementById('iconMenu');
const iconCerrar = document.getElementById('iconCerrar');

iconMenu.addEventListener('click', () => {
    menuLista.classList.remove('inactive');
}, false);

iconCerrar.addEventListener('click', () => {
    menuLista.classList.add('inactive');
}, false);
