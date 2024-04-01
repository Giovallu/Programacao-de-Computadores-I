function exe1(){
    /* DOM - Document Object Model */
    /* nro1 vai conter o que o usuário digitou na caixa nro1 */
    let nro1 = Number(document.getElementById("nro1").value)
    /* nro2 vai conter o que o usuário digitou na caixa nro2 */
    let nro2 = Number(document.getElementById("nro2").value)
    /* calcula subtração */
    let result = nro1 - nro2
    /* mostra resultado */
    /* alert("A subtração é " + result) */
    /* template string */
    alert(`A subtração é ${result}`)
}

function exe2(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    let result = n1 * n2 * n3

    alert(`O resultado da multiplicação é ${result}`)
}

function exe3(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let result = n1/n2

    alert(`O resultado da divisão é ${result}`)
}

function exe4(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let result = (((2*n1) + (3*n2))/5)

    alert(`A média é ${result}`)
}

function exe5(){
    let preco = Number(document.getElementById("preco").value)

    let pt = preco*(1/10)
    let result = preco - pt

    alert(`O preço caiu para ${result}`)
}
function exe6(){
    let sf = Number(document.getElementById("sf").value)
    let vv = Number(document.getElementById("vv").value)

    let cms = 0.04*vv
    let result = sf + cms

    alert(`A comissão será R$${cms} e o salário final será R$${result}`)
}

function exe7(){
    let peso = Number(document.getElementById("peso").value)

    let ma15 = peso + (0.15 * peso)
    let me20 = peso - (0.2 * peso)

    alert(`Ganho de 15% ao peso corresponde a ${ma15} kg, e perca de 20% ao peso corresponde a ${me20} kg.`)
}

function exe8(){
    let peso = Number(document.getElementById("peso").value)

    let result = peso * 1000

    alert(`${result} gramas`)
}

function exe9(){
    let bma = Number(document.getElementById("bma").value)
    let bme = Number(document.getElementById("bme").value)
    let h = Number(document.getElementById("h").value)

    let result = ((bma + bme) * h)/2

    alert(`A área do trapézio é ${result}`)
}

function exe10(){
    let l = Number(document.getElementById("l").value)

    let result = l*l

    alert(`A área do quadrado é ${result}`)
}