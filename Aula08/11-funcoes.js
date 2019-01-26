// Functions

// Exemplo 01
function soma (a, b) {
    return a + b;
}

var num1 = 10;
var num2 = 5;

var minhaSoma = soma(num1, num2);
console.log(minhaSoma);


// Exemplo 02
function pagaBoleto (saldoNaConta, valorDoBoleto){

    var valorAposPagamento = saldoNaConta - valorDoBoleto;

    return valorAposPagamento;

}

var meuSaldoNaConta = 3000;
var boletoAPagar = 500;

var sobrouDepoisDePagar = pagaBoleto(meuSaldoNaConta, boletoAPagar);

console.log( `Boleto pago, seu saldo agora é de: ${sobrouDepoisDePagar}` );