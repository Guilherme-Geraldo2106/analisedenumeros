let num = document.querySelector('#tx1')
let sele = document.querySelector('#sele')
let res = document.querySelector('#res')
let valores = []

function lista(n, v){
    if (v.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}

function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function acadc(){ 
    if(numero(num.value) && !lista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sele.appendChild(item)
        res.innerHTML= ''
    }else{
        alert('ERRO: Numero digitado invalido ( 1 a 100 ) ou Numero ja Utilizado')
    }
    num.value = ""
    num.focus()
}

function acveri(){
    if(valores.length == 0){
        alert('Nenhum numero encontrado, adicione numeros para verificar')
    }else{
        var soma = 0
        var media = 0
        var totv = valores.length
        var maior = valores[0]
        var menor = valores[0]
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/valores.length
    }


    res.innerHTML = ``
    res.innerHTML += `<p>O total de numeros adicionados foi: ${totv}</p>`
    res.innerHTML += `<p>O maior numero adicionado é: ${maior}</p>`
    res.innerHTML += `<p>O menor numero adicionado é: ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os numeros é: ${soma}</p>`
    res.innerHTML += `<p>A media de todos os valores é: ${media}</p>`
}






