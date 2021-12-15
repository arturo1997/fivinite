const header_menu = document.querySelector('.header-menu');
const botonmenu = document.getElementById('botonmenu');


botonmenu.addEventListener('click',mostrarmenu);


function mostrarmenu(){
    header_menu.classList.toggle('toggle')
}
