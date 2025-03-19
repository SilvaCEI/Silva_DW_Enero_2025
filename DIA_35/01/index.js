function menu(e){
    id = e.target.dataset.id;
    document.querySelector("li.active").classList.remove("active");
    document.querySelector("main div.active").classList.remove("active");
    document.querySelector("#menu-" + id).classList.add("active");
    document.querySelector("#div-" + id).classList.add("active");
}

document.querySelectorAll("header>ul>li").forEach(btn => btn.addEventListener("click", menu))