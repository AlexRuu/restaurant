import Toast from './toast.png'

function loadMenu() {
    const main = document.querySelector('#mainSection');
    let menuSection = document.createElement('div');
    let menuTitle = document.createElement('h1');

    menuTitle.classList.add('menuTitle');
    menuTitle.innerHTML = 'Toasts';

    menuSection.classList.add('menu');
    const toast = document.createElement('div');
    toast.classList.add('toastItem');

    menuSection.append(menuTitle, toast);

    const menu = (name, price) => {
        let item = document.createElement('div');
        item.classList.add('item');
        
        let product = document.createElement('div');
        product.textContent = name;
        product.classList.add('product')

        let itemPrice = document.createElement('div');
        itemPrice.textContent = price;
        itemPrice.classList.add('itemPrice')

        item.append(product, itemPrice);
        toast.appendChild(item)
    }

    menu('Classic', '£5.99');
    menu('Jang Spicy', '£6.99');
    menu('Kimchi Cheese', '£5.99');

    main.appendChild(menuSection);
}

export {
    loadMenu
}