import Jolly from './jolly.jpeg';

const main = document.querySelector('#mainSection');

function loadMain() {
    let jollySpace = document.createElement('div');
    let jollyPic = new Image();
    
    jollyPic.src = Jolly;
    jollyPic.classList.add('jollyPic')
    
    
    jollySpace.classList.add('jolly');
    jollySpace.appendChild(jollyPic);

    main.appendChild(jollySpace);
}

export {
    loadMain
}