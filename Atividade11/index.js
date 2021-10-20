//exercício 1,one,um


function Retangulo(x,y){
this.x=x;
this.y=y;



this.calcular=function(){
    var result= x*y;
    return result;
}


}

var retangulo=new Retangulo(5,5);

document.write("A área do retangula é: "+ retangulo.calcular());


//Exercício 2, banco SantoAndrer


function Conta(nome,nomeBanco,numeroConta,saldo){

    this.nome=nome;
    this.nomeBanco=nomeBanco;
    this.numeroConta=numeroConta;
    this.saldo=saldo;


    this.setnome=function(nomeCliente){
        nome=nomeCliente;
    }

    this.getnome = function() {
        return nome;
     }

    

     this.setnomeBanco=function(nomeBank){
        nomeBanco=nomeBank;
    }


    this.getnomeBanco = function() {
        return nomeBanco;
     }


     this.setnumeroConta=function(conta){
        numeroConta=conta;
    }


    this.getnumeroConta = function() {
        return numeroConta;
     }


     this.setsaldo=function(saldoConta){
        saldo=saldoConta;
    }


    this.getsaldo = function() {
        return saldo;
     }



    
}





function ContaCorrente(saldoEspecial){

this.saldoEspecial=saldoEspecial;

this.setsaldoEspecial=function(saldoEspecialConta){
    saldo=saldoEspecialConta;
}

this.getsaldoEspecial = function() {
    return saldoEspecial;
 }





}



function ContaPoupanca(juros,vencimento){
    this.juros=juros;
    this.vencimento=vencimento;




    this.setjuros=function(taxaDeJuros){
        juros=taxaDeJuros;
    }

    this.getjuros=function(){
        return juros;
    }

    this.setvencimento=function(dataVencimento){
        vencimento=dataVencimento;
    }



    this.getvencimento=function(){
        return vencimento;
    }






}


ContaCorrente.prototype=new Conta();

var contaCorrente1=new ContaCorrente();

contaCorrente1.setnome('Paulo Lemann');

contaCorrente1.setnomeBanco('Nubanki');

contaCorrente1.setnumeroConta('001');
contaCorrente1.setsaldo('999999999999999999999999');
contaCorrente1.setsaldoEspecial('Infinite');







ContaPoupanca.prototype=new Conta();

var contaPoupanca1=new ContaPoupanca();

contaPoupanca1.setnome('Luiza Trajano');

contaPoupanca1.setnomeBanco('BANCO DO BRASlL');

contaPoupanca1.setnumeroConta('002');
contaPoupanca1.setsaldo('999999999999999999999999');
contaPoupanca1.setjuros('20%');
contaPoupanca1.setvencimento("01/01/2090");




var info = 'Conta poupança:<br>Nome: ' + contaPoupanca1.getnome() + '<br> Banco: ' + contaPoupanca1.getnomeBanco() 
+ '<br>Número conta: ' + contaPoupanca1.getnumeroConta() + '<br>Saldo: ' +  contaPoupanca1.getsaldo() + '<br>Juros: ' 
+ contaPoupanca1.getjuros() + '<br>Data Vencimento: ' + contaPoupanca1.getvencimento() + '<br><br><br>';
document.getElementById('poupanca').innerHTML = `${info}` ;





var info2 = 'Conta Corrente:<br>Nome: ' + contaCorrente1.getnome() + '<br> Banco: ' + contaCorrente1.getnomeBanco() 
+ '<br>Número conta: ' + contaCorrente1.getnumeroConta() + '<br>Saldo: ' +  contaCorrente1.getsaldo() + '<br>Saldo especial: ' 
+ contaCorrente1.getsaldoEspecial() + '<br><br><br>';
document.getElementById('corrente').innerHTML = `${info2}` ;

