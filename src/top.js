const content = document.querySelector('#content');

function loadNav() {
    let navBar = document.createElement('div');
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');

    navBar.classList.add('navBar');
    home.classList.add('navButton');
    menu.classList.add('navButton');
    contact.classList.add('navButton');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    navBar.append(home, menu, contact);
    content.appendChild(navBar);
}

function loadTitle() {
    let titleSpace = document.createElement('div');
    let title = document.createElement('h1');
    let titleBottom = document.createElement('h3');

    titleSpace.classList.add('titleSpace');
    title.classList.add('name');
    titleBottom.classList.add('nameEng')

    title.innerHTML = "토스티"
    titleBottom.innerHTML = "The Toasty"
    titleSpace.append(title, titleBottom);
    content.appendChild(titleSpace);
}

export {
    loadNav,
    loadTitle
}