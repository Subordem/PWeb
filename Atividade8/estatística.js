let respondido,mulheres, homens, mediaIdades, maiorIdade, menorIdade, porcentagemOtimo, porcentagemBom, porcentagemRegular,porcentagemRuim;





if (localStorage.getItem('respondido') === null)  {
    respondido = 0;
} else {
    respondido = parseInt(localStorage.getItem('respondido'));
}

if (localStorage.getItem('mulheres') === null)  {
    mulheres = 0;
} else {
    mulheres = parseInt(localStorage.getItem('mulheres'));
}
if (localStorage.getItem('homens') === null)  {
    homens = 0;
} else {
    homens = parseInt(localStorage.getItem('homens'));
}

if (localStorage.getItem('somaIdades') === null)  {
    somaIdades = 0;
} else {
    somaIdades = parseInt(localStorage.getItem('somaIdades'));
}

if (localStorage.getItem('numOtimo') === null)  {
    numOtimo = 0;
} else {
    numOtimo = parseInt(localStorage.getItem('numOtimo'));
}

if (localStorage.getItem('numBom') === null)  {
    numBom = 0;
} else {
    numBom= parseInt(localStorage.getItem('numBom'));
}
if (localStorage.getItem('numBom') === null)  {
    numBom = 0;
} else {
    numBom= parseInt(localStorage.getItem('numBom'));
}

if (localStorage.getItem('mediaIdades') === null)  {
    mediaIdades = 0;
} else {
    mediaIdades= parseInt(localStorage.getItem('mediaIdades'));
}


if (localStorage.getItem('numRuim') === null)  {
    numRuim = 0;
} else {
    numRuim = parseInt(localStorage.getItem('numRuim'));
}

if (localStorage.getItem('porcentagemBom') === null)  {
    porcentagemBom = 0;
} else {
    porcentagemBom = localStorage.getItem('porcentagemBom');
}

if (localStorage.getItem('porcentagemOtimo') === null)  {
    porcentagemOtimo = 0;
} else {
    porcentagemOtimo = localStorage.getItem('porcentagemOtimo');
}

if (localStorage.getItem('maiorIdade') === null)  {
    maiorIdade = 0;
} else {
    maiorIdade = localStorage.getItem('maiorIdade');
}

if (localStorage.getItem('menorIdade') === null)  {
    menorIdade = 0;
} else {
    menorIdade = localStorage.getItem('menorIdade');
}


if (localStorage.getItem('porcentagemRegular') === null)  {
    porcentagemRegular = 0;
} else {
    porcentagemRegular = localStorage.getItem('porcentagemRegular');
}


if (localStorage.getItem('porcentagemRuim') === null)  {
    porcentagemRuim = 0;
} else {
    porcentagemRuim = localStorage.getItem('porcentagemRuim');
}





const estatisticas = document.getElementById('estatisticas');
estatisticas.innerHTML = `  <div class="row my-2">
<p class="col lead text-center">Média da idade dos que responderam: <span class="text-primary">${mediaIdades}</span></p>
<p class="col lead text-center">Mulheres que responderam a pesquisa: <span class="text-primary">${mulheres}</span></p> 
<p  class="col lead text-center">Homens que responderam a pesquisa: <span class="text-primary">${homens}</span></p> 
</div>





<p class="lead mt-3">Porcentagem que acharam o filme ótimo: </h6><div class="progress">
<div class="progress-bar bg-success" role="progressbar" style="width: ${porcentagemOtimo};" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<p class="lead">Porcentagem que acharam o filme bom: </h6><div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${porcentagemBom} ;" aria-valuenow="0" aria-valuemin="0039" aria-valuemax="100"></div>

</div>


<p class="lead">Porcentagem que acharam o filme regular: </h6><div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${porcentagemRegular} ;" aria-valuenow="0" aria-valuemin="0039" aria-valuemax="100"></div>

</div>

<p class="lead">Porcentagem que acharam o filme ruim: </h6><div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${porcentagemRuim} ;" aria-valuenow="0" aria-valuemin="0039" aria-valuemax="100"></div>

</div>


 

`;

