let container = document.getElementById("container");
let carrouselr = document.getElementById('carrouselr');
let carrousels = document.getElementsByClassName('carrousel').length;
let buttons = document.getElementsByClassName("btn");

let currentPosition = 0;
let currentMargin = 0;
let carrouselsPerPage = 0;
let carrouselsCount = carrousels - carrouselsPerPage;
let containerWidth = container.offsetWidth;
let prevKeyActive = false;
let nextKeyActive = true;


window.addEventListener("resize", checkwidth);

function checkwidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        carrouselsPerPage = 1;
    } else {
        if (w < 901) {
            carrouselsPerPage = 2;
        } else {
            if (w < 1101) {
                carrouselsPerPage = 3;
            } else {
                carrouselsPerPage = 4;
            }
        }
    }

    carrouselsCount = carrousels - carrouselsPerPage;
    if (currentPosition > carrouselsCount) {
        currentPosition -= carrouselsPerPage;
    };

    currentMargin = - currentPosition * (100 / carrouselsPerPage);
    carrouselr.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }

    if (currentPosition < carrouselsCount) {
        buttons[1].classList.remove('inactive');
    }

    if (currentPosition >= carrouselsCount) {
        buttons[1].classList.add('inactive');
    }
}

function carrouselLeft() {
    if (currentPosition != carrouselsCount) {
        carrouselr.style.marginLeft = currentMargin - (100 / carrouselsPerPage) + '%';
        currentMargin -= (100 / carrouselsPerPage);
        currentPosition++;
    };
    if (currentPosition == carrouselsCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
}

setParams(container.offsetWidth);

function carrouselRight() {
    if (currentPosition != 0) {
        carrouselr.style.marginLeft = currentMargin + (100 / carrouselsPerPage) + '%';
        currentMargin += (100 / carrouselsPerPage);
        currentPosition--;
    };

    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < carrouselsCount) {
        buttons[1].classList.remove('inactive');
    }
};