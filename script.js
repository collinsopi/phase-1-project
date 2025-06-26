const homeSection = document.querySelector('.home');

const images = [
    '../images/home.jpg',
    '../images/home2.jpg',
    '../images/home4.jpeg'
];

let current = 0;

const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');

bg1.style.backgroundImage = `url(${images[0]})`;
bg1.classList.add('active');

function changeBackground() {
    const next = (current + 1) % images.length;

    // Determine which div is active
    const active = bg1.classList.contains('active') ? bg1 : bg2;
    const inactive = active === bg1 ? bg2 : bg1;

    // Set next image on inactive
    inactive.style.backgroundImage = `url(${images[next]})`;

    // Crossfade
    inactive.classList.add('active');
    active.classList.remove('active');

    current = next;
}

setInterval(changeBackground, 5000); // Change every 5 seconds


const carListEl = document.getElementById('car-list');
const carImageEl = document.getElementById('car-image');
const specsTableEl = document.getElementById('specs-table');
const priceEl = document.getElementById('price');
const reserveBtn = document.getElementById('reserve-btn');

let cars = [];



