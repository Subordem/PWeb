const enviar=document.getElementById('enviar');

let respondido;
let mulheres;
let homens;
let somaIdades;
let maiorIdade;
let menorIdade;
let numOtimo;
let numBom;
let numRegular;
let numRuim;
let mediaIdades;
let porcentagemOtimo;
let porcentagemBom;
let porcentagemRegular;
let porcentagemRuim;


// verificar storage
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


if (localStorage.getItem('numRegular') === null)  {
    numRegular = 0;
} else {
    numRegular= parseInt(localStorage.getItem('numRegular'));
}


if (localStorage.getItem('maiorIdade') === null)  {
    maiorIdade = 0;
} else {
    maiorIdade = parseInt(localStorage.getItem('maiorIdade'));
}

if (localStorage.getItem('menorIdade') === null)  {
    menorIdade = 0;
} else {
    menorIdade = parseInt(localStorage.getItem('menorIdade'));
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


if (localStorage.getItem('porcentagemRegular') === null)  {
    porcentagemRegular = 0;
} else {
    porcentagemRegular = localStorage.getItem('porcentagemRegular');
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




var atualizarEstat = function(e){




    const idade = document.getElementById('idade').value;
    const feminino = document.getElementById('feminino');
    const masculino = document.getElementById('masculino');
    const otimo = document.getElementById('otimo');
    const bom = document.getElementById('bom');
    const regular = document.getElementById('regular');
    const Ruim = document.getElementById('Ruim');
  
    if(isNaN(idade) || idade =='' ){ // verifica se idade está vazio
        alert("Ow?");
    } else {
       
        if (feminino.checked) {
        
            if(otimo.checked) {


               /* let respondido;
                let mulheres;
                let homens;
                let somaIdades;
                let maiorIdade;
                let menorIdade;
                let numOtimo;
                let numBom;
                let numRegular;
                let numRuim;
                let mediaIdades;
                let porcentagemOtimo;
                let porcentagemBom;
                let porcentagemRegular;
                let porcentagemRuim; */



                
                respondido += 1; // numero de vezes que o form foi enviado
                mulheres += 1; // numero de vezes que o form foi enviado
                numOtimo += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/respondido;
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRegular = ((parseInt(numRegular) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRuim = ((parseInt(numRuim) /respondido) * 100 ).toFixed(0) + '%';

                
                alert('Respondido!');

                localStorage.setItem('respondido',respondido);
                localStorage.setItem('mulheres',mulheres);
                localStorage.setItem('homens',homens);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('numOtimo', numOtimo);
                localStorage.setItem('numBom', numBom);
                localStorage.setItem('numRegular', numRegular);
                localStorage.setItem('numRuim', numRuim);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                localStorage.setItem('porcentagemRegular',porcentagemRegular);
                localStorage.setItem('porcentagemRuim',porcentagemRuim);
                
                console.log(respondido,
                    mulheres,
                    homens,
                    somaIdades,
                    numOtimo,
                    numBom,
                    numRegular,
                    numRuim,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom,
                    porcentagemRegular,
                    porcentagemRuim
                    )
                
            } else if(bom.checked){
                respondido += 1;
                mulheres += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/respondido;
                numBom += 1;
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRegular = ((parseInt(numRegular) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRuim = ((parseInt(numRuim) /respondido) * 100 ).toFixed(0) + '%';

                console.log(respondido,
                    mulheres,
                    homens,
                    somaIdades,
                    numOtimo,
                    numBom,
                    numRegular,
                    numRuim,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom,
                    porcentagemRegular,
                    porcentagemRuim
                    )
                
                    
                localStorage.setItem('respondido',respondido);
                localStorage.setItem('mulheres',mulheres);
                localStorage.setItem('homens',homens);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('numOtimo', numOtimo);
                localStorage.setItem('numBom', numBom);
                localStorage.setItem('numRegular', numRegular);
                localStorage.setItem('numRuim', numRuim);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                localStorage.setItem('porcentagemRegular',porcentagemRegular);
                localStorage.setItem('porcentagemRuim',porcentagemRuim);
                alert('Respondido!');
            }else if(regular.checked){
                respondido += 1;
                mulheres += 1;
               
                somaIdades += parseInt(idade);

                mediaIdades = somaIdades/respondido;
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRegular = ((parseInt(numRegular) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRuim = ((parseInt(numRuim) /respondido) * 100 ).toFixed(0) + '%';
                
                localStorage.setItem('respondido',respondido);
                localStorage.setItem('mulheres',mulheres);
                localStorage.setItem('homens',homens);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('numOtimo', numOtimo);
                localStorage.setItem('numBom', numBom);
                localStorage.setItem('numRegular', numRegular);
                localStorage.setItem('numRuim', numRuim);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                localStorage.setItem('porcentagemRegular',porcentagemRegular);
                localStorage.setItem('porcentagemRuim',porcentagemRuim);
              
                alert('Respondido!');
            }else if(Ruim.checked){
                respondido += 1;
                mulheres += 1;
               
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/respondido;
                numRuim += 1;
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRegular = ((parseInt(numRegular) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRuim = ((parseInt(numRuim) /respondido) * 100 ).toFixed(0) + '%';
                console.log(respondido,
                                        mulheres,
                    homens,
                    somaIdades,
                    numOtimo,
                    numBom,
                    numRegular,
                    numRuim,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom,
                    porcentagemRegular,
                    porcentagemRuim
                    )
                    
                localStorage.setItem('respondido',respondido);
                localStorage.setItem('mulheres',mulheres);
                localStorage.setItem('homens',homens);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('numOtimo', numOtimo);
                localStorage.setItem('numBom', numBom);
                localStorage.setItem('numRegular', numRegular);
                localStorage.setItem('numRuim', numRuim);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                localStorage.setItem('porcentagemRegular',porcentagemRegular);
                localStorage.setItem('porcentagemRuim',porcentagemRuim);
                alert('Respondido!');
            } else {
                // valição opinião
                alert("Ow?");
            }

        } else if (masculino.checked){
            if(otimo.checked) {
                respondido += 1; // numero de vezes que o form foi enviado
                homens += 1; // numero de vezes que o form foi enviado
                numOtimo += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/respondido;
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRegular = ((parseInt(numRegular) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRuim = ((parseInt(numRuim) /respondido) * 100 ).toFixed(0) + '%';
                
                localStorage.setItem('respondido',respondido);
                localStorage.setItem('mulheres',mulheres);
                localStorage.setItem('homens',homens);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('numOtimo', numOtimo);
                localStorage.setItem('numBom', numBom);
                localStorage.setItem('numRegular', numRegular);
                localStorage.setItem('numRuim', numRuim);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                localStorage.setItem('porcentagemRegular',porcentagemRegular);
                localStorage.setItem('porcentagemRuim',porcentagemRuim);
                console.log(respondido,
                                        mulheres,
                    homens,
                    somaIdades,
                    numOtimo,
                    numBom,
                    numRegular,
                    numRuim,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom,
                    porcentagemRegular,
                    porcentagemRuim
                    )
                alert('Respondido!');

            } else if(bom.checked){
                respondido += 1;
                homens += 1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/respondido;
                numBom += 1;
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
               
                console.log(respondido,
                                        mulheres,
                    homens,
                    somaIdades,
                    numOtimo,
                    numBom,
                    numRegular,
                    numRuim,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom,
                    porcentagemRegular,
                    porcentagemRuim
                    )
                    
                localStorage.setItem('respondido',respondido);
                localStorage.setItem('mulheres',mulheres);
                localStorage.setItem('homens',homens);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('numOtimo', numOtimo);
                localStorage.setItem('numBom', numBom);
                localStorage.setItem('numRegular', numRegular);
                localStorage.setItem('numRuim', numRuim);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                localStorage.setItem('porcentagemRegular',porcentagemRegular);
                localStorage.setItem('porcentagemRuim',porcentagemRuim);
                alert('Respondido!');

            }else if(regular.checked){
                respondido += 1;
                homens+= 1;
                numRegular+=1;
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/respondido;
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRegular = ((parseInt(numRegular) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRuim = ((parseInt(numRuim) /respondido) * 100 ).toFixed(0) + '%';
                console.log(respondido,
                                        mulheres,
                    homens,
                    somaIdades,
                    numOtimo,
                    numBom,
                    numRegular,
                    numRuim,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom,
                    porcentagemRegular,
                    porcentagemRuim
                    )
                    
                localStorage.setItem('respondido',respondido);
                localStorage.setItem('mulheres',mulheres);
                localStorage.setItem('homens',homens);
                localStorage.setItem('mediaIdades',mediaIdades);
                localStorage.setItem('somaIdades',somaIdades);
                localStorage.setItem('numOtimo', numOtimo);
                localStorage.setItem('numBom', numBom);
                localStorage.setItem('numRegular', numRegular);
                localStorage.setItem('numRuim', numRuim);
                localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                localStorage.setItem('porcentagemBom',porcentagemBom);
                localStorage.setItem('porcentagemRegular',porcentagemRegular);
                localStorage.setItem('porcentagemRuim',porcentagemRuim);
                alert('Respondido!');
                
               
            }else if(Ruim.checked){
                respondido += 1;
                homens+= 1;
                
                numRuim+= 1;
                
                somaIdades += parseInt(idade);
                mediaIdades = somaIdades/respondido;
               
                porcentagemOtimo = ((parseInt(numOtimo) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemBom = ((parseInt(numBom) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRegular = ((parseInt(numRegular) /respondido) * 100 ).toFixed(0) + '%';
                porcentagemRuim = ((parseInt(numRuim) /respondido) * 100 ).toFixed(0) + '%';
                console.log(respondido,
                                        mulheres,
                    homens,
                    somaIdades,
                    numOtimo,
                    numBom,
                    numRegular,
                    numRuim,
                    mediaIdades,
                    porcentagemOtimo,
                    porcentagemBom,
                    porcentagemRegular,
                    porcentagemRuim
                    )
                
                    localStorage.setItem('respondido',respondido);
                    localStorage.setItem('mulheres',mulheres);
                    localStorage.setItem('homens',homens);
                    localStorage.setItem('mediaIdades',mediaIdades);
                    localStorage.setItem('somaIdades',somaIdades);
                    localStorage.setItem('numOtimo', numOtimo);
                    localStorage.setItem('numBom', numBom);
                    localStorage.setItem('porcentagemOtimo',porcentagemOtimo);
                    localStorage.setItem('porcentagemBom',porcentagemBom);
                 alert('Respondido!');
            } else {
                // validação opinião
                alert("Ow?");
            }
        } else {
            // validação sexo
        alert("Ow?");
        }
        
       



    }

    e.preventDefault();

}

enviar.addEventListener('click', atualizarEstat);