let notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]
let estaoNaMedia = 0;
let abaixoDaMedia = 0;
let totalDeNotas = 0;
let notaMaxima = notas [0];
let mediaDosAlunos = 0;
let notaMinima = notas[0];

//aqui fiz a soma para ver o total de notas usando o for. 
for( let i = 0; i < notas.length; i++){
    totalDeNotas +=  notas[i]
};

// aqui dividi a soma do total de notas pelo array de notas no caso 10.
mediaDosAlunos = totalDeNotas / notas.length;
console.log(`A media da turma é: ${mediaDosAlunos.toFixed(2)}.`);

// usei o for também, e o if para ver se a nota seria maior ou igual a média.
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= mediaDosAlunos) {
        estaoNaMedia += 1
    }
    
};
console.log(`O numero de alunos na media é: ${estaoNaMedia}`);

//usei o for como laço de repetição, e o if para mostrar a maior nota.
for (let i = 1; i < notas.length; i++) {
    if (notas[i] > notaMaxima) {
        notaMaxima = notas[i];
    }
};
console.log("a maior nota é: " + notaMaxima );

//fiz a mesma coisa mas para mostrar a menor nota.
for (let i = 1; i < notas.length; i++) {
    if (notas[i] < notaMinima ) {
        notaMinima = notas[i];
    }
};
console.log("a menor nota é : " + notaMinima );