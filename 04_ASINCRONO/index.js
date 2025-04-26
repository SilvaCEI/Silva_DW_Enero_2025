const background = document.getElementById("background");
const products = document.querySelectorAll(".box");

products.forEach(product => {
    product.addEventListener('mouseenter', () => {

        setTimeout(function(){
            background.style.backgroundImage = 'url(' + product.getAttribute('data-product-bg') + ')';
            background.style.opacity = "1";

            document.querySelectorAll('.box').forEach(item => {
                item.classList.add("opacity-item");
            });
            product.classList.add("selected-item");
        }, 250);
    });

    product.addEventListener('mouseleave', () => {
        background.style.opacity = "0";
        document.querySelectorAll('.box').forEach(item => {
                item.classList.remove("opacity-item");
                item.classList.remove("selected-item");
            });
    });
});
