const cardsData = [
  {
    name: 'GIANT PANDAS',
    place: 'Native to Southwest China',
    pathToImg: '/assets/images/Panda.png',
    isPredator: false,
  },
  {
    name: 'EAGLES',
    place: 'Native to South America',
    pathToImg: '/assets/images/Eagle.png',
    isPredator: true,
  },
  {
    name: 'GORILLAS',
    place: 'Native to Congo',
    pathToImg: '/assets/images/Gorilla.png',
    isPredator: false,
  },
  {
    name: 'TWO-TOED SLOTH',
    place: 'Mesoamerica, South America',
    pathToImg: '/assets/images/Sloth.png',
    isPredator: false,
  },
  {
    name: 'CHEETAHS',
    place: 'Native to Africa',
    pathToImg: '/assets/images/Cheetah.png',
    isPredator: true,
  },
  {
    name: 'PENGUINS',
    place: 'Native to Antarctica',
    pathToImg: '/assets/images/Penguin.png',
    isPredator: false,
  },
  {
    name: 'ALLIGATORS',
    place: 'Native to Southeastern U. S.',
    pathToImg: '/assets/images/Alligator.png',
    isPredator: true,
  },
  {
    name: 'ELEPHATS',
    place: 'Native to Africa',
    pathToImg: '/assets/images/Elephant.jpg',
    isPredator: false,
  },
  {
    name: 'CONDORS',
    place: 'Native to Africa',
    pathToImg: '/assets/images/Condor.jpg',
    isPredator: true,
  },
  {
    name: 'ARAKAN FOREST TURTLE',
    place: 'Native to Arakan Hills',
    pathToImg: '/assets/images/Turtle.png',
    isPredator: false,
  },
  {
    name: 'QUOKKAS',
    place: 'Native to America',
    pathToImg: '/assets/images/Quokkas.png',
    isPredator: false,
  },
  {
    name: 'TARSIERS',
    place: 'Native to Oceania',
    pathToImg: '/assets/images/Tarsier.png',
    isPredator: false,
  },
  {
    name: 'KOALAS',
    place: 'Native to Australia',
    pathToImg: '/assets/images/Koala.jpg',
    isPredator: false,
  },
  {
    name: 'HYENA',
    place: 'Native to Africa',
    pathToImg: '/assets/images/Hyena.jpg',
    isPredator: true,
  },
  {
    name: 'TIGERS',
    place: 'Native to Africa',
    pathToImg: '/assets/images/Tiger.jpg',
    isPredator: true,
  },
  {
    name: 'POLAR BEARS',
    place: 'Native to Antarctica',
    pathToImg: '/assets/images/Polar-bear.jpg',
    isPredator: true,
  },
  {
    name: 'GIRAFFE',
    place: 'Native to Africa',
    pathToImg: '/assets/images/Giraffe.jpg',
    isPredator: false,
  },
  {
    name: 'HIPPO',
    place: 'Native to Africa',
    pathToImg: '/assets/images/Hippo.jpg',
    isPredator: false,
  },
];

const carousel = document.querySelector('.carousel');
carousel.append(createCarouselBlock());
carousel.firstElementChild.classList.add('show');

export function createCarouselBlock() {
  const carouselBlock = document.createElement('div');
  const randomArray = getRandomArray();
  carouselBlock.classList.add('cards', 'carousel-block');

  for (let i = 0; i < 6; i++) {
    let card = createCard(randomArray[i]);
    if (i === 4 || i === 5) {
      card.classList.add('card_hide');
    }
    carouselBlock.append(card);
  }

  return carouselBlock;
}

function createCard(index) {
  const cardData = cardsData[index];

  const card = document.createElement('div');
  const cardContent = document.createElement('div');
  const cardInfo = document.createElement('div');
  const cardIcon = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardTitle = document.createElement('p');
  const cardText = document.createElement('p');

  cardImg.classList.add('card__img');
  cardTitle.classList.add('card__title', 'reg-500');
  cardText.classList.add('card__text', 'small-300');
  cardInfo.classList.add('card__info');
  cardContent.classList.add('card__content');
  card.classList.add('card');

  if (cardData.isPredator) {
    cardIcon.classList.add('card__icon', 'card__icon_meat');
  } else {
    cardIcon.classList.add('card__icon', 'card__icon_veg');
  }

  cardImg.src = cardData.pathToImg;
  cardImg.alt = cardData.name;
  cardTitle.innerText = cardData.name;
  cardText.innerText = cardData.place;

  cardInfo.append(cardTitle, cardText);
  cardContent.append(cardInfo, cardIcon);
  card.append(cardImg, cardContent);

  return card;
}

function getRandomNum() {
  return Math.floor(Math.random() * 16);
}

function getRandomArray() {
  let randomArray = [];
  randomArray.push(getRandomNum());
  while (randomArray.length !== 6) {
    let randomNum = getRandomNum();
    if (!randomArray.includes(randomNum)) randomArray.push(randomNum);
  }
  return randomArray;
}
