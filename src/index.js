import './style.css';
import { loadMain } from "./main";
import { loadMenu } from "./menu"
import { initialLoad } from './top';
import { loadContact } from './contact';

// Load starting page
initialLoad();
loadMain();

// Clear section below nav
const main = document.querySelector('#mainSection')

function clearMain() {
    main.innerHTML = '';
}

// Load page when clicked
const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')


home.addEventListener('click', () => {
    clearMain();
    loadMain();
})

menu.addEventListener('click', () => {
    clearMain();
    loadMenu();
})

contact.addEventListener('click', () => {
    clearMain();
    loadContact();
})