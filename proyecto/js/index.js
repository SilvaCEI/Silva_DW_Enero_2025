
//----------SOBRE NOSOTROS - TOGGLE PANEL -------

const bloques = document.querySelectorAll('.bloque')
const titulos = document.querySelectorAll('.h2')


titulos.forEach((titulo, i) => {
  titulo.addEventListener('click', () => {

    document.querySelector('.activo')?.classList.remove('activo');
    bloques[i].classList.add('activo');

  })
})


//--------- MODAL DEL FORMULARIO PARA RESERVAR

const form = document.querySelector('.main__formulario--box form');
const modal = document.getElementById('modal-reserva');
if(modal){

  const closeBtn = modal.querySelector('.close-btn');
  
  form.addEventListener('submit', e => {
    e.preventDefault();           
    modal.style.display = 'flex'; 
  });
  
  // cerrar con la X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // cerrar haciendo clic fuera del contenido
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}


//------------- CARTA RESTAURANTE -----------

function menu(e) {
  const id = e.target.dataset.id;
  console.log(22)

  // Quitar clase active del menú actual y sección actual
  document.querySelector(".carta__menu-item.active")?.classList.remove("active");
  document.querySelector(".carta__seccion.active")?.classList.remove("active");

  // Añadir clase active al nuevo menú y nueva sección
  document.querySelector("#menu-" + id)?.classList.add("active");
  document.querySelector("#div-" + id)?.classList.add("active");
}

document.querySelectorAll(".carta__menu-item").forEach(btn =>
  btn.addEventListener("click", menu)
);
