const buttonMenu = document.querySelector('.header__button-menu');
const openMenu1 = document.querySelector('#openMenu1');
const openMenu2 = document.querySelector('#openMenu2');
const menu = document.querySelector('.header__menu');


// Event: Click on the menu button

let isOpen = false;

buttonMenu.addEventListener('click', () => {
    if (!isOpen) {
        menu.style.display = 'flex';
        openMenu1.classList.add('open-menu1');
        openMenu2.classList.add('open-menu2');
        isOpen = true;
    } else {
        menu.style.display = 'none';
        openMenu1.classList.remove('open-menu1');
        openMenu2.classList.remove('open-menu2');
        isOpen = false;
    }
});
//

const aboutMe = document.querySelector('.about-me');
const projects = document.querySelector('.projects');
const skills = document.querySelector('.skills');
const contact = document.querySelector('.contact');

// Event: Click on the option menu

function closeMenu(option) {
    option.addEventListener('click', () => {
        menu.style.display = 'none';
        openMenu1.classList.remove('open-menu1');
        openMenu2.classList.remove('open-menu2');
        isOpen = false;
    })
}

closeMenu(aboutMe);
closeMenu(projects);
closeMenu(skills);
closeMenu(contact);
//
