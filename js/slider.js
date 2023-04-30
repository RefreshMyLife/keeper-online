const slideArray = [];
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
for (let i = 0; i < document.querySelectorAll('.slider .slide').length; i++) {
    slideArray.push(document.querySelectorAll('.slider .slide')[i].dataset.background);
}

let currentSlideIndex = -1;
function moveRightSlider() {
    currentSlideIndex++;
    console.log('click');
    console.log('next');
    if (currentSlideIndex >= slideArray.length) {
        currentSlideIndex = 0;
    }

    document.querySelector('.slider').style.cssText =
        'background: url("' +
        slideArray[currentSlideIndex] +
        '") no-repeat center center; background-size: cover;';

    const elems = document.getElementsByClassName('caption');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.cssText = 'opacity: 0;';
    }

    const currentCaption = document.querySelector('.caption-' + currentSlideIndex);
    currentCaption.style.cssText = 'opacity: 1;';
}
function moveLeftSlider() {
    currentSlideIndex--;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slideArray.length - 1;
    }
    console.log(currentSlideIndex, 'left SLIDER');
    document.querySelector('.slider').style.cssText =
        'background: url("' +
        slideArray[currentSlideIndex] +
        '") no-repeat center center; background-size: cover;';

    const elems = document.getElementsByClassName('caption');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.cssText = 'opacity: 0;';
    }

    const currentCaption = document.querySelector('.caption-' + currentSlideIndex);
    currentCaption.style.cssText = 'opacity: 1;';
}

moveRightSlider();
nextButton.addEventListener('click', () => {
    moveRightSlider();
});

prevButton.addEventListener('click', () => {
    moveLeftSlider();
});
