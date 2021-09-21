//Variáveis
const btn =document.getElementById('calcular');






//funções

calcular = function(e){

    const nota1= parseFloat(document.getElementById('nota1').value);
    const nota2= parseFloat(document.getElementById('nota2').value);
    const nota3= parseFloat(document.getElementById('nota3').value);
    const nome = (document.getElementById('nome').value);
    const container =document.getElementById('container');

    var media=((nota1+nota2+nota3)/3).toFixed(2);

    if (nome==='' || isNaN(nota1)|| isNaN(nota2)|| isNaN(nota3)) {
        alert("ow?")
    }else{
        const nota = document.createElement('div');
        nota.classList += "container border mb-2";
        nota.innerHTML = `
        <h5>Nome: ${nome}</h5>
        <p>Nota 1: ${nota1} |
        Nota 2: ${nota2} |
        Nota 3: ${nota3}</p>
        <h4>Media= ${media}</h4>

        `

        container.appendChild(nota);
    }



e.preventDefault();
}




//Evento
btn.addEventListener('click', calcular); 