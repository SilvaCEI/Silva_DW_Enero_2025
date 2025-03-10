/*----- aqui no estaria bien el ejercicio, pero conseguimos ese resultado de coger los pares

function pares() {
    for (let i = 2; i < 100; i = i + 2) {

        console.log(i)
    }

}

pares()*/

//Otra forma de resolver el ejercicio, donde sí sería más correcta
function pares() {
    for (let i = 1; i < 100; i++) {
        if(i % 2 == 0)

        console.log(i)
    }

}

pares()