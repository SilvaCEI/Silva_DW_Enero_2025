let form = document.querySelector("form");
let search = document.querySelector("#search");
let div = document.querySelector("#results")

function clickButton(e) {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=es-ES&query=${search.value}`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTUwMzA0NDUzNzg1MGNlNWY3OGY5ZjUwOThjNzVjNCIsIm5iZiI6MTczNDQ1ODExMC42MTksInN1YiI6IjY3NjFiYWZlZWQyNmE5ZDJkOGRmZTExMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ok29UicAMLyCxOTRSK5GZw4rG3-7Xk6DW1pLZXGtMMU"
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
