let celsius = [0, 10, 20, 30, 40];
let fahrenheit = [0];

//primeiro eu usei o for para fazer um laço de repetição, depois multipliquei os celsius por 9/5 e somei 32
for (let i = 0; i < celsius.length; i++) {
  fahrenheit[i] = celsius[i] * 9/5 + 32;
}

// aqui eu só listei tanto as temperaturas em celsius quanto em fahrenheit
console.log("Temperaturas em Celsius:");
for (let i = 0; i < celsius.length; i++) {
  console.log(celsius[i]);
}
console.log("Temperaturas em Fahrenheit:");
for (let i = 0; i < fahrenheit.length; i++) {
  console.log(fahrenheit[i]);
}

// aqui só apliquei o console table 
console.log("Temperaturas em Celsius:");
console.table(celsius);

console.log("Temperaturas em Fahrenheit:");
console.table(fahrenheit);


