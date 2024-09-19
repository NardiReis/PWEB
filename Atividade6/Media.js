

var nota1;
var nota2;
var nota3;
var nota4;
var media;

var nome = prompt("Qual o nome do aluno?");
nota1 = parseFloat(prompt("Qual a nota da prova 1"));
nota2 = parseFloat(prompt("Qual a nota da prova 2"));
nota3 = parseFloat(prompt("Qual a nota da prova 3"));
nota4 = parseFloat(prompt("Qual a nota da prova 4"));

media = (nota1 + nota2 + nota3 + nota4) / 4;
 alert("A média do aluno "+nome+" é: "+media);

