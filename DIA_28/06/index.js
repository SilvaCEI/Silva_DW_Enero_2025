const newsData = [
    {
        title: "Mariano Rajoy asegura no tener constancia de haber sido el presidente del Gobierno de España",

        text: "“VERÁ, ESA ES SU OPINIÓN, NO LA MÍA”, HA RESPONDIDO A UN PERIODISTA QUE ASEGURABA QUE HABÍA GOBERNADO ESPAÑA DURANTE SEIS AÑOS",

        img: "https://emtstatic.com/2025/03/Captura-de-pantalla-2025-03-05-a-las-16.44.47-533x261.png",
    },


    {
        title: "«Si no conoces la historia, estás condenado a repetirla», dice un hombre que no conocía la cita original y está condenado a repetirla",

        text: "«Esto es como todo, como digo yo», dice un señor que está convencido de que su frase «Si no conoces la historia, estás condenado a repetirla» se le ha ocurrido a él por vez primera y constituye una aguda reflexión sobre la tragedia a la que nos aboca la ignorancia. Orgulloso de su capacidad para sintetizar grandes verdades en sentencias pegadizas, este hombre asegura también que «los mismos errores históricos se van acumulando hasta que al final, como digo yo siempre, tanto va el cántaro a la fuente que al final se rompe».",


        img: "https://emtstatic.com/2025/03/iStock-2192193838-696x464.jpg",

    }

]

const news = document.getElementById('noticias');
newsData.forEach((noticia, index) => {
    const div = document.createElement('div');
    div.classList.add("noticia")
    div.innerHTML = `
        <h3>${noticia.title}</h3>
        <p> ${noticia.text}</p>
        <img src="${noticia.img}" >

    `;

    news.appendChild(div);

})
