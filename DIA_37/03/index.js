const carousel = document.getElementById('carousel');
const totalItems = 4; // Número de imágenes
let angle = 0;
const anglePerItem = 360 / totalItems; // 90° por imagen

document.querySelector('.next').addEventListener('click', () => {
    angle -= anglePerItem;
    carousel.style.transform = `rotateY(${angle}deg)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    angle += anglePerItem;
    carousel.style.transform = `rotateY(${angle}deg)`;
});
