// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 5
let numberTwo = 6
let sum = numberOne + numberTwo
alert(sum)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".   
let isNumber = 25
if (typeof isNumber == 'number') {
    alert("É um numero")
}
else {
    alert("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = "ola"
if (typeof isString == 'string') {
    alert("É uma string")
}
else {
    alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBoolean = false
if (typeof isBoolean == 'boolean') {
    alert("É um booleano")
} 
else {
    alert("Não é um booleano")
}
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let subtraction = numberOne - numberTwo
alert(subtraction)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let multiply = numberOne * numberTwo
alert(multiply)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let division = numberOne / numberTwo
alert(division)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let isEven = 5
if (isEven % 2 === 0) {
alert("É um número par")
}
else {
    alert("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let isOdd = 5 
if (isOdd % 2 === 0) {
alert("Não é um número ímpar")
}
else {
    alert("É um número ímpar")
}