var container = document.getElementById('container');
var carrousel = document.getElementById('carrousel');
var carrousels = document.getElementsByClassName('carrousel').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var carrouselPerPage = 0;
var carrouselCount = carrousels - carrouselPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        carrouselPerPage = 1;
    } else {
        if (w < 901) {
            carrouselPerPage = 2;
        } else {
            if (w < 1101) {
                carrouselPerPage = 3;
            } else {
                carrouselPerPage = 4;
            }
        }
    }

    carrouselCount = carrousels - carrouselPerPage;
    if (currentPosition > carrouselCount) {
        currentPosition -= carrouselPerPage;
    }

    currentMargin = - currentPosition * (100 / carrouselPerPage);
    carrousel.style.marginLeft = currentMargin + "%";

    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }

    if (currentPosition < carrouselCount) {
        buttons[1].classList.remove('inactive');
    }

    if (currentPosition >= carrouselCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams(container.offsetWidth);

function carrouselRight() {
    if (currentPosition != 0) {
        carrousel.style.marginLeft = currentMargin + (100 / carrouselPerPage) + "%";
        currentMargin += (100 / carrouselPerPage);
        currentPosition--;

        if (currentPosition == 0) {
            buttons[0].classList.add('inactive');
        }

        if (currentPosition < carrouselCount) {
            buttons[1].classList.remove('inactive');
        }
    }
}

function carrouselLeft() {
    if (currentPosition != carrouselCount) {
        carrousel.style.marginLeft = currentMargin - (100 / carrouselPerPage) + "%";
        currentMargin -= (100 / carrouselPerPage);
        currentPosition++;

        if (currentPosition == carrouselCount) {
            buttons[1].classList.add('inactive');
        }

        if (currentPosition > 0) {
            buttons[0].classList.remove('inactive');
        }
    }
}
