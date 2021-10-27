


const validar = function(e){

    var email =document.getElementById('exampleInputEmail1').value;
    var nome =document.getElementById('exampleInputPassword1');
    var comentario =document.getElementById('exampleTextarea');
    var sim =document.getElementById('optionsRadios1');
    var nao =document.getElementById('optionsRadios2');
    var count=3;
    if (nome.value.length < 10) {
        alert("NOME INVÁLIDO");
        
    }else{count--}

    if (comentario.value.length < 20) {
        alert("COMENTÁRIO INVÁLIDO");
    }else{count--}

     

    const re = /^([a-zA-Z0-9=.]+)@([a-zA-Z0-9=.]+).([a-zA-Z]{2,5})$/;

    if (!re.test(email)) {
      alert("Insira um email válido");

    }else{count--}


    if (count==0) {
        if (sim.checked) {
            alert("I hope to see you soon");
        } 
        if (nao.checked) {
            alert("Welcome back");
        }
    }


e.preventDefault();

};

var submit=document.getElementById('enviar');

submit.addEventListener('click',validar);



