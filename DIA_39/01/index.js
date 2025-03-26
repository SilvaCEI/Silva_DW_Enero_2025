function HandlerLoadContent(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}