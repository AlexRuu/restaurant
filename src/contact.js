import Ollie from './ollie.jpeg';
import Josh from './josh.jpeg';

function loadContact() {
    const main = document.querySelector('#mainSection');
    let contactPerson = document.createElement('div');
    contactPerson.classList.add('contact')
    let contactTitle = document.createElement('h1');
    contactTitle.classList.add('contactTitle');
    contactTitle.innerHTML = "Founders"

    const contact = (image, name, instagram, instagramName, youtubeLink, youtube) => {
        let person = document.createElement('div');
        person.classList.add('person');
        
        let picture = new Image();
        picture.classList.add('picture');
        picture.src = image;

        let nameSpace = document.createElement('div');
        nameSpace.classList.add('contactName');
        nameSpace.textContent = name;

        let link = document.createElement('a');
        link.classList.add('instagram');
        link.setAttribute('href', instagram)
        link.innerHTML = `<i class="fa-brands fa-instagram"></i> ${instagramName}`;

        let youtubeHandle = document.createElement('a');
        youtubeHandle.classList.add('youtube');
        youtubeHandle.setAttribute('href', youtubeLink)
        youtubeHandle.innerHTML = `<i class="fa-brands fa-youtube"></i> ${youtube}`;

        person.append(picture, nameSpace, link, youtubeHandle);
        contactPerson.appendChild(person)
    }

    contact(`${Josh}`, 'Josh Carrott', 'https://www.instagram.com/koreanenglishman/?hl=en', 'Josh Carrott', 'https://www.youtube.com/user/koreanenglishman', 'Korean Englishman');
    contact(`${Ollie}`, 'Ollie Kendal', 'https://www.instagram.com/olliekendal/?hl=en', 'Ollie Kendal', 'https://www.youtube.com/c/jolly', 'Jolly');
    main.append(contactTitle, contactPerson)
}

export {
    loadContact
}