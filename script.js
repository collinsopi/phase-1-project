const homeSection = document.querySelector('.home');

const images = [
    '../images/home.jpg',
    '../images/home2.jpg',
    '../images/home9.jpg'
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

//Fetch API
fetch('http://localhost:3000/cars')
    .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
    })
    .then(data => {
        cars = data;
        renderCarList();
        loadCar(cars[0]);
    })
    .catch(err => {
        alert('Failed to load cars. Please check if json-server is running.');
        console.error(err);
    });

//Render Car List
function renderCarList() {
    carListEl.innerHTML = '';
    cars.forEach((car, index) => {
        const li = document.createElement('li');
        li.textContent = `${car.Brand} ${car.Model}`;
        if(index === 0) li.classList.add('active');

        li.addEventListener('click', () => {
            document.querySelectorAll('.sidebar li').forEach(item => item.classList.remove('active'));
            li.classList.add('active');
            loadCar(car);
        });

        carListEl.appendChild(li);
    });
}

//Load car details
function loadCar(car) {
    carImageEl.src = car.image || './images/no-image.jpg';
    priceEl.innerHTML = ` <span>Vehicle Specs</span>`;

    const specs = [
        ['Brand', car.Brand],
        ['Model', car.Model],
        ['Year', car.Year],
        ['Transmission', car.Transmission],
        ['Fuel', car.fuel],
        ['Price', `Ksh ${car.price}`],

    ];

    specsTableEl.innerHTML = specs.map(row =>`
        <tr>
        <td>${row[0]}</td><td>${row[1]}</td>
        </tr>
        `).join('');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        clearCarSelection();
    }
});

function clearCarSelection() {
    carImageEl.src = './images/no-image.jpg';
    specsTableEl.innerHTML = '';
    priceEl.innerHTML = '';
    document.querySelectorAll('.sidebar li').forEach(item => item.classList.remove('active'));
    alert('Car selection cleared.');
}


reserveBtn.addEventListener('click', () => {
    const activeCar = document.querySelector('.sidebar li.active').textContent;
    alert(`Reservation made for ${activeCar}`);
});

reserveBtn.addEventListener('mouseover', () => {
    reserveBtn.style.backgroundColor = '#da7d14';
});
reserveBtn.addEventListener('mouseout', () => {
  reserveBtn.style.backgroundColor = '#49453f';
});