let frase = "Eu sou um cara Legal!"; //tomarcuidado pq se a frase tiver começando em letra minuscula, e eu passar como maiscula para o includes é diferente
console.log(frase.toLocaleLowerCase().includes('legal')); // uma função que serve para localizar caracteres nas minhas variaveis tipo String
// se minha frase começa com letra maiscula entao eu passo  o toLocaleLoewrCase para ele acha mesmo comeãndo com letra maiscula