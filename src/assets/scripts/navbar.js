const navbarMenu = document.querySelector('.navbar__menu');
const asideMenu = document.querySelector('.navbar__aside');


export function navbarChange() {
    asideMenu.classList.toggle('change');
    navbarMenu.classList.toggle('change');
}


// Event listeners

navbarMenu.addEventListener('click', navbarChange);