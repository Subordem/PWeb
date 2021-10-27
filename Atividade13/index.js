//variáveis da UI 

const textArea=document.getElementById('texto');
const btn1=document.getElementById('maiuscula');
const btn2=document.getElementById('minuscula');
const btn3=document.getElementById('primeira');
var contador=document.getElementById('contador');
let juncao="";

console.log(contador)
//eventos
textArea.addEventListener('keyup', function(){
    contador.textContent =  textArea.value.length.toString();
});


btn1.addEventListener('click',function(e){


let textValue=textArea.value.toUpperCase();
textArea.value=textValue;
    e.preventDefault()});



    btn2.addEventListener('click',function(e){


        let textValue=textArea.value.toLowerCase();
        textArea.value=textValue;
            e.preventDefault()});



btn3.addEventListener('click',function(e){

    textArea.value.split(" ");
    let substrings =textArea.value.toLowerCase().split(" ");

    for (let i = 0; i < substrings.length; i++) {
        var chars = substrings[i].charAt(0).toUpperCase()+substrings[i].substr(1);
        
        juncao=juncao+chars+" ";

        
        
    }
    juncao=juncao.substring(0, juncao.length - 1);

    textArea.value=juncao;
    juncao="";
    


    e.preventDefault();
})