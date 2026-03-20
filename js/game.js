const grid = document.querySelector('.grid');
const spanPlayer= document.querySelector('.player')
const timer = document.querySelector('.timer');
const musica = new Audio('../Audio/five-nights-at-freddys.mp3');

const characters = [
    'bonnie11',
    'chica11',
    'foxy11',
    'freddy11',
    'golden11',
    'bonnie22',
    'chica22',
    'foxy22',
    'freddy22',
    'golden22',
    
];



const createElement = (tag, className)=> {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos.`);
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
        
    } else {

        setTimeout(() => {

        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';

        }, 500);

    }
    
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')){
        return;
    }
   
    if (firstCard === ''){

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === ''){

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
}

function createCard(character) {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../Imagens/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

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

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTimes = +timer.innerHTML;
        timer.innerHTML = currentTimes + 1;

    }, 1000);
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
    musica.play();
}
