const mainMenu = document.querySelector('.main_Menu');
const closeMenu = document.querySelector('.close_Menu');
const openMenu = document.querySelector('.open_Menu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
