const alumnos = [
    {nombre: "José Manuel", apellido: "Silva", curso: "Web" },
    {nombre: "Lidia", apellido: "Rubio", curso: "Web" },
    {nombre: "Gustavo", apellido: "Mesa", curso: "Web" },
    {nombre: "Hajar", apellido: "Edd", curso: "Web" }

]

const ul = document.getElementById('list');
alumnos.forEach((alumno, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${index + 1} - ${alumno.nombre} ${alumno.apellido} (${alumno.curso})`;
    ul.appendChild(li);

})
