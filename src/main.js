import Jolly from './jolly.jpeg' 

const content = document.querySelector('#content');

function loadMain() {
    let jollySpace = document.createElement('div');
    let jollyPic = new Image();
    
    jollyPic.src = Jolly;
    jollyPic.classList.add('jollyPic')
    
    
    jollySpace.classList.add('jolly');
    jollySpace.appendChild(jollyPic)

    content.appendChild(jollySpace)
}

export {
    loadMain
}