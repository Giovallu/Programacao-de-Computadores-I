function exe1(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)
    let media, result

    media = (n1+n2+n3+n4)/4

    if(media >= 7){
        result = "Aprovado ☻"
    }
    else if(media < 7){
        result = "Reprovado :("
    }

    alert(`Média: ${media}\n`)
}

function exe2(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let media, result

    media = (n1+n2)/2

    if(media > 0 && media < 3){
        result = "Reprovado"
    }
    else if(media >= 3 && media < 7){
        result = "Exame"
    }
    else if(media >= 7 && media < 10){
        result = "Aprovado"
    }
    else{
        result = "Nota Inválida"
    }

    alert(`Média: ${media}\n${result}`)

}

function exe3(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    if(n1 < n2){
        alert(`O número menor é: ${n1}`)
    }
    else if(n1 > n2){
        alert(`O número menor é: ${n2}`)
    }
    else{
        alert(`Números iguais`)
    }

}

function exe4(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    if(n1 < n2 && n2 < n3){
        alert(`O maior número é ${n3}`)
    }
    else if(n1 < n2 && n3 < n2){
        alert(`O maior número é ${n2}`)
    }
    else{
        alert(`O maior número é ${n1}`)
    }

}

function exe5(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n = parseInt(Number(document.getElementById("n").value))
    let result

    switch(n){
        case 1: 
            result = (n1+n2)/2;
            alert(`Média dos valores: ${result}`)
            break;
        case 2: 
            if(n1 < n2){
                result = n2 - n1
            }
            else{
                result = n1 - n2
            };
            alert(`Diferença dos valores: ${result}`)
            break;
        case 3:
            result = n1 * n2;
            alert(`Produto dos valores: ${result}`)
            break;
        case 4: 
            result = n1 / n2;
            alert(`Resultado da divisão: ${result}`)
            break;
        default:
            alert(`Opção Inválida!`)
    }

}

function exe6(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n = parseInt(Number(document.getElementById("n").value))
    let result, result2

    switch(n){
        case 1: 
            result = Math.pow(n1,n2)
            alert(`Resultado da potência: ${result}`)
            break;
        case 2: 
            result = Math.sqrt(n1)
            result2 = Math.sqrt(n2)
            alert(`Raiz quadrada\n- Número 1: ${result}\n- Número 2: ${result2}`)
            break;
        case 3:
            result = Math.cqrt(n1)
            result2 = Math.cqrt(n2)
            alert(`Raiz cúbica\n- Número 1: ${result}\n- Número 2: ${result2}`)
            break;
        default:
            alert(`Opção Inválida!`)
    }

}

function exe7(){
    
    let sal = Number(document.getElementById("sal").value)

    if(sal < 500){
        sal = sal + (sal*0.3)
        alert(`Salário reajustado: R$ ${sal}`)
    }
    else{
        alert(`Salário sem reajuste: R$ ${sal}`)
    }

}

function exe8(){

    let sal = Number(document.getElementById("sal").value)

    if(sal <= 300){
        sal = sal + (sal*0.35)
        alert(`Salário reajustado: R$ ${sal}`)
    }
    else{
        sal = sal + (sal*0.15)
        alert(`Salário reajustado: R$ ${sal}`)
    }
    
}

function exe9(){

    let sal = Number(document.getElementById("sal").value)
    let credit

    if(sal > 400){
        credit = sal*0.3
    }
    else if(sal <= 400 && sal > 300){
        credit = sal*0.25
    }
    else if(sal <= 300 && sal > 200){
        credit = sal*0.2
    }
    else{
        credit = sal*0.1
    }

    alert(`Saldo médio: R$ ${sal}\nValor do crédito: R$ ${credit}`)
    
}

function exe10(){
    
    let cf = Number(document.getElementById("cf").value)
    let distrib, imp, result

    if(cf <= 12000){
        distrib = 0.05
        imp = 0
    }
    else if(cf > 12000 && cf <= 25000){
        distrib = 0.1
        imp = 0.15
    }
    else{
        distrib = 0.15
        imp = 0.2
    }

    result = cf + (cf * distrib) + (cf * imp)

    alert(`O preço ao consumidor é R$ ${result}`)

}

function exe22(){

    let idade = parseInt(Number(document.getElementById("idade").value))
    let peso = Number(document.getElementById("peso").value)

    if(idade < 20){
        if(peso <= 60){
            alert(`Grupo de risco: 9`)
        }
        else if(peso > 60 && peso <= 90){
            alert(`Grupo de risco: 8`)
        }
        else{
            alert(`Grupo de risco: 7`)
        }
    } 
    else if (idade >= 20 && idade <= 50){
        if(peso <= 60){
            alert(`Grupo de risco: 6`)
        }
        else if(peso > 60 && peso <= 90){
            alert(`Grupo de risco: 5`)
        }
        else{
            alert(`Grupo de risco: 4`)
        }
    } 
    else{
        if(peso <= 60){
            alert(`Grupo de risco: 3`)
        }
        else if(peso > 60 && peso <= 90){
            alert(`Grupo de risco: 2`)
        }
        else{
            alert(`Grupo de risco: 1`)
        }
    }

}

function exe23(){

    let codp = parseInt(Number(document.getElementById("codp").value))
    let qtdp = parseInt(Number(document.getElementById("qtdp").value))
    let unip, totp, descont, result

    if(codp >= 1 && codp <= 10){
        unip = 10.00
        totp = qtdp * unip

        if(totp < 250.00){
            descont = 0.05
            result = totp - (totp * descont)
        }
        else if(totp >= 250.00 && totp <= 500.00){
            descont = 0.10
            result = totp - (totp * descont)
        }
        else if(totp > 500.00){
            descont = 0.15
            result = totp - (totp * descont)
        }
        else{
            alert("Preço Inválido")
        }
    }
    else if(codp > 10 && codp <= 20){
        unip = 15.00
        totp = qtdp * unip

        if(totp < 250.00){
            descont = 0.05
            result = totp - (totp * descont)
        }
        else if(totp >= 250.00 && totp <= 500.00){
            descont = 0.10
            result = totp - (totp * descont)
        }
        else if(totp > 500.00){
            descont = 0.15
            result = totp - (totp * descont)
        }
        else{
            alert("Preço Inválido")
        }
    }
    else if(codp > 20 && codp <= 30){
        unip = 20.00
        totp = qtdp * unip

        if(totp < 250.00){
            descont = 0.05
            result = totp - (totp * descont)
        }
        else if(totp >= 250.00 && totp <= 500.00){
            descont = 0.10
            result = totp - (totp * descont)
        }
        else if(totp > 500.00){
            descont = 0.15
            result = totp - (totp * descont)
        }
        else{
            alert("Preço Inválido")
        }
    }
    else if(codp > 30 && codp <= 40){
        unip = 30.00
        totp = qtdp * unip

        if(totp < 250.00){
            descont = 0.05
            result = totp - (totp * descont)
        }
        else if(totp >= 250.00 && totp <= 500.00){
            descont = 0.10
            result = totp - (totp * descont)
        }
        else if(totp > 500.00){
            descont = 0.15
            result = totp - (totp * descont)
        }
        else{
            alert("Preço Inválido")
        }
    }
    else{
        alert(`Código Inválido!`)
    }
    
    descont = 100*descont
    alert(`Preço Unitário: R$ ${unip}\nPreço Total: R$ ${totp}\nDesconto: ${descont}%\nPreço com desconto: R$ ${result}`)
}

function exe24(){

    let preco = Number(document.getElementById("preco").value)
    let cat = parseInt(Number(document.getElementById("cat").value))
    let sit = String(document.getElementById("sit").value)
    let a, pa, imp, nvpreco, clas

    if(preco <= 25){
        switch(cat){
            case 1: a = 0.05;
                break;
            case 2: a = 0.08;
                break;
            case 3: a = 0.10;
                break;
            default: alert(`Opção inválida!`)
        }
    }
    else{
        switch(cat){
            case 1: a = 0.12;
                break;
            case 2: a = 0.15;
                break;
            case 3: a = 0.18;
                break;
            default: alert(`Opção inválida!`)
        }
    }
    
    if(cat == 2 || sit == 'R'){
        imp = 0.05
    }
    else{
        imp = 0.08
    }

    pa = preco + (preco*a)
    nvpreco = pa - (imp*preco)

    if(nvpreco <= 50){
        clas = "Barato"
    }
    else if(nvpreco > 50 && nvpreco < 120){
        clas = "Normal"
    }
    else{
        clas = "Caro"
    }

    a = 100*a
    imp = 100*imp

    alert(`Percentual de aumento: ${a}%\nImposto: ${imp}%\nNovo Preço: R$ ${nvpreco}\nClassificação: ${clas}`)

}