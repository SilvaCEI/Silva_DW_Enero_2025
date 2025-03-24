// let sliderIndex = 1; showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("my-slides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1; }
//     if (n < 1) { slideIndex = slides.length; }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].classList.remove("active");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].classList.add("active");
// }

let slideIndex = 1; 
showSlides(slideIndex);  // Corrección del nombre de la función

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");  // Mejor manejo de clases
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");  // Agregar correctamente la clase
}
