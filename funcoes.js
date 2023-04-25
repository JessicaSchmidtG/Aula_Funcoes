//CRIE UMA FUNÇÃO e chame ela
/*
function imprimirOlaMundo(){
    console.log("Olá Mundo!");
}

imprimirOlaMundo();
*/
//Crie uma função que receba por parametro um nome e imprima no console
//`Olá ${nome}`
/*
function imprimirNome(nome){
    nome = prompt("Digite seu nome");
    console.log(`Olá ${nome}`);
    alert(`Olá ${nome}`);
}
imprimirNome();

 //Crie uma função que receba dois números e retorne a soma entre eles
function somaDoisNumeros(num1, num2){
    let soma = num1 + num2;
    return soma;
    //ou return num1 + num2;
}
//Guarde o retorno dessa função em uma variável e imprima no console
let resultado = somaDoisNumeros(5,8);
console.log(resultado);
*/

//Crie uma função que:
//a)	Receba um array de números.
//b)	Retorne um novo array com dois elementos
//O último e o primeiro número do array recebido divididos por dois
/*
function arrayNumeros(){
    let numeros = [prompt("digite Num1"), prompt("digite Num2"), prompt("digite Num3")];
    let prim = numeros[0];
    let ultimo = numeros[numeros.length-1];
    return resultado = (ultimo/2 + " e " + prim/2);
}
let chamadaArray = arrayNumeros();
console.log(chamadaArray); 



let numsArray = [120,340,355,197];

function calculaArray(numsArray){
    let ultimoArray = numsArray[numsArray.length-1];
    let primeiroArray = numsArray[0];
   //console.log(ultimoArray + " e " + primeiroArray);
    calculaPrimeiro = primeiroArray/2;
    calculaUltimo = ultimoArray/2;
    return retornoDoArray = (calculaUltimo+' e '+ calculaPrimeiro);
}

let chama = calculaArray(numsArray);

alert(chama);

*/
//Crie uma função que:
//a)	Receba um array de números.
//b)	Retorne um novo array com dois elementos
//O último e o primeiro número do array recebido divididos por dois

let arrayNum = [120,340,355,197];


let variavel = function(valorArray){
    return novoArrayDeRetorno = [
        valorArray[arrayNum.length-1] /2,
        valorArray[0] /2
    ];
}
alert("Expressão de função: "+ variavel(arrayNum));

let variavel2 = (valoresRecebidos) =>{
    return novoArrayDeRetorno = [
        valoresRecebidos[arrayNum.length-1] /2,
        valoresRecebidos[0]
    ];
}
alert("Arrow function: " + variavel2(arrayNum));