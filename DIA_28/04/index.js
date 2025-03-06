const alumno = { nombre: 'hetero', apellido: 'basico', epoca: 'edad de piedra' };

const ul = document.getElementById('list');
const li = document.createElement('li');

li.innerHTML = `${alumno.nombre} ${alumno.apellido} (${alumno.epoca})`;

ul.appendChild(li);