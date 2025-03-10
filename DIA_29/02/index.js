//Una forma de hacerlo
/*function cuadrado() {
    for (let i = 0; i < 5; i++) {
        console.log("**********")
    }

}

cuadrado()*/

//Una forma mejorada de hacerlo
function cuadrado() {
for (let i = 0; i < 5; i++) {
    let srt = ""
    for (let j = 0; j < 5; j++) {
        srt += "*"

    }

    console.log(srt)
    }

}

cuadrado()