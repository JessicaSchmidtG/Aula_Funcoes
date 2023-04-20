//CRIE UMA FUNÇÃO e chame ela
/*
function imprimirOlaMundo(){
    console.log("Olá Mundo!");
}

imprimirOlaMundo();
*/
//Crie uma função que receba por parametro um nome e imprima no console
//`Olá ${nome}`

function imprimirNome(nome){
    nome = prompt("Digite seu nome");
    console.log(`Olá ${nome}`);
    alert(`Olá ${nome}`);
}
imprimirNome();