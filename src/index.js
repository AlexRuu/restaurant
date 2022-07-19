import './style.css';
import { loadMain } from "./main";
import { loadMenu } from "./menu"
import { initialLoad } from './top';
import { loadContact } from './contact';

// Initial page load
initialLoad();
loadMain();

const main = document.querySelector('#mainSection')

function clearMain() {
    main.innerHTML = '';
}

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