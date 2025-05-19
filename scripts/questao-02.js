let numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27]
let numerosImpares = 0;
let numerosPares = 0;
let maisQueVinte = 0;

// usei o for para fazer uma repetição, e logo usei o if para ver se os números iriam ser pares usando o %.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2) {
        numerosImpares += 1
    }
    
};
console.log(numerosImpares);

// depois vi que deu 6 e subritrai o 6 pelo número total dos numeros 
console.log(numeros.length - 6); 

//aqui usei o for para fazer uma repetição, e o if para ver se os numeros eram maior ou igual a 20.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 20) {
        maisQueVinte += 1
    }
    
};
console.log(maisQueVinte);