//forma 1, função odebreacht

function ConstrAluno(name,ra){
this.name=name;
this.ra=ra;
}


// instanciar
var aluno1=new ConstrAluno('João Gabriel','777');

console.log(aluno1);


//forma 2 -forma literal


var aluno2={
    nome: 'José Carlos Moura',
    ra: 333

}

console.log(aluno2);


//forma 3

var aluno3 = new Object();
aluno3.nome='Eduardo Locatelli';
aluno3.ra='013';


console.log(aluno3);


//Pausa pro café, retorno assim que acabar a parte 4

class mala{
    constructor(nome,ra){
        this.nome=nome;
        this.ra=ra;

    }
}

var aluno4 = new mala('Mala da Silva','000');


console.log(aluno4);


const um=document.getElementById('aluno1');
const dois=document.getElementById('aluno2');
const tres=document.getElementById('aluno3');



um.innerHTML=`

<ul>

<li>
<b>Nome:${aluno1.name}</b>
</li>
<li>
<b>RA:${aluno1.ra}</b>
</li>

</ul>


`


dois.innerHTML=`

<ul>

<li>
<b>Nome:${aluno2.nome}</b>
</li>
<li>
<b>RA:${aluno2.ra}</b>
</li>

</ul>


`


tres.innerHTML=`

<ul>

<li>
<b>Nome:${aluno3.nome}</b>
</li>
<li>
<b>RA:${aluno3.ra}</b>
</li>

</ul>


`