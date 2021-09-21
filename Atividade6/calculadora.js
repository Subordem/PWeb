const mais = document.getElementById('Somar');
const menos= document.getElementById('Subtrair');
const Multiplicar = document.getElementById('Multiplicar');
const dividir = document.getElementById('Dividir');
const resto = document.getElementById('Resto');



mais.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero2)) {
        alert("Ow?");
    } else{
  var valor = numero1 + numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});



menos.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero1)) {
        alert("Ow?");
    } else{
   let valor = numero1 - numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});


Multiplicar.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero1)) {
        alert("Ow?");
    } else{
   let valor = numero1 * numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});


dividir.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero1) || numero2===0) {
        alert("Ow?");
    } else{
   let valor = numero1 / numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});


resto.addEventListener('click', function(e) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (isNaN(numero1) ||  isNaN(numero1) || numero2===0) {
        alert("Ow?");
    } else{
   let valor = numero1 % numero2;
   alert("O valor é: " + valor);
    }

    e.preventDefault();
});




