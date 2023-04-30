let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

const carouselArray = [];
const prev = document.getElementById('carousel-arrow-prev');
const next = document.getElementById('carousel-arrow-next');
let currentCarouselIndex = 2;

let width = 163; // ширина картинки
let count = 1; // шаг

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки
for (let i = 0; i < document.querySelectorAll('.carousel__container img').length; i++) {
    carouselArray.push(document.querySelectorAll('.carousel__container img')[i]);
}

function moveRightCarousel() {
    currentCarouselIndex++;
    if (currentSlideIndex >= slideArray.length) {
        currentSlideIndex = 0;
    }
    position -= width * count;

    if (carouselArray.length < currentCarouselIndex) {
        console.log(currentCarouselIndex);
        carouselArray[carouselArray.length - 1].style.cssText = 'opacity:0.5';
        currentCarouselIndex = 2;
        position = 0;
        moveRightCarousel();
    } else {
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    }
    for (let i = 0; i < carouselArray.length; i++) {
        if (currentCarouselIndex === +carouselArray[i].dataset.id) {
            carouselArray[i].style.cssText = 'opacity:1;width: 170px; height: 120px';
            carouselArray[i - 1].style.cssText = 'opacity:0.5';
        }
    }
}

function moveLeftCarousel() {
    currentCarouselIndex--;
    position += width * count;
    console.log(currentCarouselIndex);
    if (0 >= currentCarouselIndex) {
        carouselArray[0].style.cssText = 'opacity:0.5';
        currentCarouselIndex = carouselArray.length - 1;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';

        for (let i = 0; i < carouselArray.length; i++) {
            moveRightCarousel();
        }
    } else {
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    }

    for (let i = 0; i < carouselArray.length; i++) {
        if (currentCarouselIndex === +carouselArray[i].dataset.id) {
            carouselArray[i].classList.add('active');
            carouselArray[i].style.cssText = 'opacity:1; width: 170px; height: 120px';
            carouselArray[i + 1].style.cssText = 'opacity:0.5, wigth:100% ';
            carouselArray[i - 1].style.cssText = 'opacity:0.5, wigth:100%';
        }
    }
}

moveRightCarousel();
document.querySelector('.carousel-arrow-prev').onclick = function () {
    console.log('carousel');
    moveLeftCarousel();
};

document.querySelector('.carousel-arrow-next').onclick = function () {
    console.log('carousel');

    moveRightCarousel();
};
