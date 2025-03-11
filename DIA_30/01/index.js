let newWin;


function handleOpen() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;

    newWin = open("/", "test", params);

    newWin.document.write("Hola mundo")
}
function handleClose() {
    newWin.close()
}
function handleMove() {
    newWin.moveTo(500, 500)
}
function handleResize() {
    newWin.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
function handleLocation() {
    newWin.location = "https://cei.es";
}