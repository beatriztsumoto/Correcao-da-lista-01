let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let precosFinal = [];
let totalDesconto = 0;
let soma = 0;
let media

//aqui use o if para ver os preços que estão a acima de R$100, e depois subtrai o preço pelo proprio,depoi multipliquei por 0.1 
for (let i = 0; i < precos.length; i++) {
  if (precos[i] > 100) {
    precosFinal[i] = precos[i] - (precos[i] * 0.1);
    totalDesconto += precos[i] * 0.1;
  } else {
    precosFinal[i] = precos[i];
  }
  soma += precosFinal[i];
}

//aqui só dividi a soma pelo array de preços
media = soma / precos.length;

console.log("Total de descontos: R$", totalDesconto.toFixed(2));
console.log("Média dos preços com desconto: R$", media.toFixed(2));
console.log(precosFinal)