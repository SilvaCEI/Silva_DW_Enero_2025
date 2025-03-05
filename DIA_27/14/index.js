let listaCompra = [
    { nombre : 'Leche' , apellido : 'Entera' , super : 'Mercadona'},

    { nombre : 'Chocolate' , apellido : 'Negro' , super : 'Mercadona'},

    { nombre : 'Platanos' , apellido : 'Canarias' , super : 'Carrefour'},

    { nombre : 'Pipas' , apellido : 'Saladas' , super : 'Mercadona'}
];

let mercadona = listaCompra.filter(producto => producto.super === 'Mercadona');

console.log(mercadona)