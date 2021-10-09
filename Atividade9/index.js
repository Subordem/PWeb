const n1=document.getElementById('number1');
const n2=document.getElementById('number2');
const n3=document.getElementById('number3');

const b1=document.getElementById('btn1');
const b2=document.getElementById('btn2');


var maiorNum;




var sort= function(e){

let m=[3];
m[0]=n1.value;
m[1]=n2.value;
m[2]=n3.value;

m.sort(function(a,b){
    return a - b;
});

n1.value=m[0]
n2.value=m[1]
n3.value=m[2]

console.log(m);
    e.preventDefault();
}


var maior= function(e) {


    let m=[3];
    m[0]=n1.value;
    m[1]=n2.value;
    m[2]=n3.value;
    
    m.sort(function(a,b){
        return a - b;
    });

alert('O maior valor é '+ m[2]);

console.log
    e.preventDefault();
}


//Eventos
b2.addEventListener('click',sort);
b1.addEventListener('click',maior);