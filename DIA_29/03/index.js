function cuadrado() {
    for (let i = 0; i < 5; i++) {
        let srt = ""
        for (let j = 0; j < 5; j++) {
            if (i == 0 || i == 4 || j==0 || j == 4){
                srt += "*"
            }else{
                srt += " "
            }
    
        }
    
        console.log(srt)
        }
    
    }
    
    cuadrado()

//Con este cambio haríamos un triangulo 
    /*function cuadrado() {
    for (let i = 0; i < 5; i++) {
        let srt = ""
        for (let j = 0; j < 5; j++) {
            if (i >= j){
                srt += "*"
            }else{
                srt += " "
            }
    
        }
    
        console.log(srt)
        }
    
    }
    
    cuadrado()*/