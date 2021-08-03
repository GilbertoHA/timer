const bgs = [
  './img/bg-00.jpg',
  './img/bg-01.jpg',
  './img/bg-02.jpg',
  './img/bg-03.jpg',
  './img/bg-04.jpg',
  './img/bg-05.jpg',
  './img/bg-06.jpg',
  './img/bg-07.jpg',
  './img/bg-08.jpg',
];

const changeBackground = () => {
  const rand = Math.floor(Math.random() * bgs.length);
  console.log(rand);
  container.style.background = `url(${bgs[rand]}) no-repeat center center/cover`;
};

const container = document.querySelector('.container');
const bgBtn = document.querySelector('#bg-btn');
bgBtn.addEventListener('click', changeBackground);

changeBackground();
