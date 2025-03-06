const alumno = { nombre: 'hetero', apellido: 'basico', epoca: 'edad de piedra'};

alumno.print = function(){
    console.log(this.nombre + " " + this.apellido);
}

alumno.print()