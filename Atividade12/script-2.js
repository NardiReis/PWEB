
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    get banco() {
        return this._banco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    get saldo() {
        return this._saldo;
    }

    set nomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    set banco(banco) {
        this._banco = banco;
    }

    set numeroConta(numero) {
        this._numeroConta = numero;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(saldoEspecial) {
        this._saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set juros(juros) {
        this._juros = juros;
    }

    set dataVencimento(dataVencimento) {
        this._dataVencimento = dataVencimento;
    }
}

function mostrarDados() {
    var nome = document.getElementById('nome').value;
    var banco = document.getElementById('banco').value;
    var numero = document.getElementById('numero').value;
    var saldo = parseFloat(document.getElementById('saldo').value);
    var saldoEspecial = parseFloat(document.getElementById('saldoEspecial').value);
    var juros = parseFloat(document.getElementById('juros').value);
    var dataVencimento = document.getElementById('dataVencimento').value;

    var contaCorrente = new Corrente(nome, banco, numero, saldo, saldoEspecial);
    var contaPoupanca = new Poupanca(nome, banco, numero, saldo, juros, dataVencimento);

    var dados = `
    Conta Corrente:
    Nome: ${contaCorrente.nomeCorrentista}
    Banco: ${contaCorrente.banco}
    Número da Conta: ${contaCorrente.numeroConta}
    Saldo: ${contaCorrente.saldo}
    Saldo Especial: ${contaCorrente.saldoEspecial}

    Conta Poupança:
    Nome: ${contaPoupanca.nomeCorrentista}
    Banco: ${contaPoupanca.banco}
    Número da Conta: ${contaPoupanca.numeroConta}
    Saldo: ${contaPoupanca.saldo}
    Juros: ${contaPoupanca.juros}
    Data de Vencimento: ${contaPoupanca.dataVencimento}
    `;

    document.getElementById('dados').innerText = dados;
}
