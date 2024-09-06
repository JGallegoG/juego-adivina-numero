// Seleccionar un núemro al azar del 1 al 100
const numAzar = Math.floor(Math.random() * 100) + 1
//console.log(numAzar)

// seleccionar el imput y el botón
const numInput = document.querySelector('.input')
const btn = document.querySelector('.btn')
const msg = document.querySelector('.msg')
const btnReset = document.querySelector('.btn-reset')
const intento = document.querySelector('.txt')

let intentos = 0
// ejecución del evento comprobar
btn.addEventListener('click', ()=> {

    // convertir a número el valor introducido
    const numManual = parseInt(numInput.value)

    //comprobar el rango de actuación del número
    if(numManual < 0 || numManual > 100 || isNaN(numManual)){
        msg.textContent = 'Por favor, introduce un número valido entre el 1 y el 100'
        msg.style.color = 'red'
        return
    }

    //lógica de accción, si es mayor, menor y se gana
    if(numManual === numAzar){
        intentos ++
        msg.textContent = `¡ENHORABUENA!, Has acertado el número. El numero era ${numAzar}`
        msg.style.color = 'green'
        intento.textContent = `Intentos: ${intentos}, para adivinar el número`
        numInput.disabled = true
    }else if(numManual < numAzar){
        intentos ++
        msg.textContent = `El número es MAYOR de ${numManual}.`
        msg.style.color = 'orange'
        intento.textContent = `Intentos: ${intentos}.`
    }else{
        intentos ++
        msg.textContent = `El número es MENOR de ${numManual}.`
        msg.style.color = 'orange'
        intento.textContent = `Intentos: ${intentos}.`
    }
})

//resetear la página
btnReset.addEventListener('click', () =>{
    location.reload()
})



