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
    'Freddy2'
];



const createElement = (tag, className)=> {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const revealCard = ({ target }) => {
  target.parentNode.classList.add('reveal-card');
}

function createCard(character) {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../Imagens/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    return card;

}

const loadGame = () => {

    const duplicateCharacter = [...characters,...characters ];

    const shuffledArray = duplicateCharacter.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });

}

loadGame();