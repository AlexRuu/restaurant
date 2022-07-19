const top = document.querySelector('#top');

function initialLoad() {
    let titleSpace = document.createElement('div');
    let title = document.createElement('h1');
    let titleBottom = document.createElement('h3');
    
    titleSpace.classList.add('titleSpace');
    title.classList.add('name');
    titleBottom.classList.add('nameEng')
    
    title.innerHTML = "토스트"
    titleBottom.innerHTML = "Toast"
    titleSpace.append(title, titleBottom);
    top.appendChild(titleSpace);
    
    let navBar = document.createElement('div');
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');

    navBar.classList.add('navBar');
    home.classList.add('navButton');
    home.setAttribute('id', 'home')
    menu.classList.add('navButton');
    menu.setAttribute('id', 'menu');
    contact.classList.add('navButton');
    contact.setAttribute('id', 'contact')

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    navBar.append(home, menu, contact);
    top.appendChild(navBar);
}

export {
    initialLoad
}