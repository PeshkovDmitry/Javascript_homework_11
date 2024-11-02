function createProductCard(cardData) {

    const liEl = document.createElement('div');

    const titleEl = document.createElement('h2');
    titleEl.textContent = cardData.title;
    liEl.appendChild(titleEl);

    const imageEl = document.createElement('img');
    imageEl.src = cardData.image;
    liEl.appendChild(imageEl);

    const textEl = document.createElement('p');
    textEl.textContent = cardData.about;
    liEl.appendChild(textEl);

    const priceEl = document.createElement('p');
    priceEl.textContent = cardData.price;
    liEl.appendChild(priceEl);

    const buttonEl = document.createElement('button');
    buttonEl.textContent = 'Add to card';
    liEl.appendChild(buttonEl);
    
    return liEl;
}

const ulEl = document.querySelector('ul');
dataJSON.forEach(cardData => {
    ulEl.appendChild(createProductCard(cardData));
});