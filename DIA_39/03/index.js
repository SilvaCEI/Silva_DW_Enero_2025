let form = document.querySelector("form");
let search = document.querySelector("#search");
let div = document.querySelector("#results")

function clickButton(e) {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=es-ES&query=${search.value}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTNUUwMzA0NDUzNz9MGNlN1VY3OGY5ZJUwOThj"
        }
    })
    .then(data => data.json())
    .then(json => {
        let html = "";

        json.results.forEach(item => {
            html += `<div class="item">`;
            html += `<h4>${item.original_title} (${item.release_date})</h4>`;
            html += `<img src="https://image.tmdb.org/t/p/w500/${item.backdrop_path}">`;
            html += `<p>${item.overview}</p>`;
            html += `</div>`;
        });

        div.innerHTML = html;
    });
}

form.addEventListener("submit", clickButton);
