const pedraU=document.getElementById("pedraU");
const papelU=document.getElementById("papelU");
const tesouraU=document.getElementById("tesouraU");


var pedraC=document.getElementById("pedraC");
var papelC=document.getElementById("papelC");
var tesouraC=document.getElementById("tesouraC");

let numP=document.getElementById("numP");
let numC=document.getElementById("numC");

let num1=0;
let num2=0;

var meio=document.getElementById("louca");



pedraU.addEventListener('click',function(e){
    var random = parseInt(Math.random() * 3 + 1);
   pedraC.classList="btn btn-outline-primary";
    papelC.classList="btn btn-outline-primary";
    tesouraC.classList="btn btn-outline-primary";
    meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
    <div class="d-flex justify-content-center">
<h1 class="text-center ">...</h1>
</div>
</div>`
    if (random===1) {
        
        pedraC.classList="btn btn-primary bg-primary";
       
        
        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Empate</h1>
        </div>
        </div>`; }, 500);
    }else if (random===2) {
        papelC.classList="btn btn-primary bg-primary";
       

        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Você perdeu</h1>
        </div>
        </div>`; num2++;
        numC.textContent=num2;}, 500);
    }else{
        tesouraC.classList="btn btn-primary bg-primary";
       

        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Você venceu!!!</h1>
        </div>
        </div>`; num1++;
        numP.textContent=num1;}, 500);

        
    }
    
e.preventDefault();})


papelU.addEventListener('click',function(e){
    var random = parseInt(Math.random() * 3 + 1);
   pedraC.classList="btn btn-outline-primary";
    papelC.classList="btn btn-outline-primary";
    tesouraC.classList="btn btn-outline-primary";
    meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
    <div class="d-flex justify-content-center">
<h1 class="text-center ">...</h1>
</div>
</div>`
    if (random===1) {
        
        pedraC.classList="btn btn-primary bg-primary";
       
        
        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Você venceu!!!</h1>
        </div>
        </div>`; num1++;
        numP.textContent=num1;}, 500);
    }else if (random===2) {
        papelC.classList="btn btn-primary bg-primary";
       

        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Empate</h1>
        </div>
        </div>`; }, 500);
    }else{
        tesouraC.classList="btn btn-primary bg-primary";
       

        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Você perdeu</h1>
        </div>
        </div>`; num2++;
        numC.textContent=num2; }, 500);
    }
    
e.preventDefault();})


tesouraU.addEventListener('click',function(e){
    var random = parseInt(Math.random() * 3 + 1);
   pedraC.classList="btn btn-outline-primary";
    papelC.classList="btn btn-outline-primary";
    tesouraC.classList="btn btn-outline-primary";
    meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
    <div class="d-flex justify-content-center">
<h1 class="text-center ">...</h1>
</div>
</div>`
    if (random===1) {
        
        pedraC.classList="btn btn-primary bg-primary";
       
        
        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Você perdeu</h1>
        </div>
        </div>`; num2++;
        numC.textContent=num2;}, 500);
    }else if (random===2) {
        papelC.classList="btn btn-primary bg-primary";
       

        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Você venceu!!!</h1>
        </div>
        </div>`; num1++;
        numP.textContent=num1;}, 500);
    }else{
        tesouraC.classList="btn btn-primary bg-primary";
       

        setTimeout(function(){ meio.innerHTML=`<div class="breadcrumb text-center d-flex justify-content-center" >
        <div class="d-flex justify-content-center">
        <h1 class="text-center ">Empate</h1>
        </div>
        </div>`; }, 500);
    }
    
e.preventDefault();})


