const grid = document.querySelector('.grid');

const characters = [
    'Bonnie1',
    'Chica1',
    'Foxy1',
    'Freddy1',
    'Golden1',
    'Bonnie2',
    'Chica2',
    'Foxy2',
    'Freddy2',
    'Golden2',
];



const createElement = (tag, className)=> {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = () => {

    const card = createElement('div', 'card'); 
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);

   return card;

}

const loadGame = () => {

    characters.forEach((character) => {

        const card = createCard();
        grid.appendChild(card);

    });

}

loadGame();