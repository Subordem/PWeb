var b1 =document.querySelector('.botao1');

var b2 =document.querySelector('.botao2');

var b3 =document.querySelector('.botao3');

var img =document.getElementById('ibagens');


var music=document.getElementById('music');

var onOff=document.getElementById('on-off');

var tocar =document.getElementById('tocar');


b1.addEventListener('click',function(e){

img.innerHTML=`<img src="./Imagem1.png" alt="">`


e.preventDefault();

});


b2.addEventListener('click',function(e){

    img.innerHTML=`<img src="./Imagem2.png" alt="">`
    
    
    e.preventDefault();
    
    });


    b3.addEventListener('click',function(e){

        img.innerHTML=`<img src="./Imagem3.png" alt="">`
        
        
        e.preventDefault();
        
        });


        music.addEventListener('click',function(e){

            if (onOff.textContent==='Sound:ON') {
                onOff.textContent='Sound:OFF'
                tocar.innerHTML=`<audio muted loop src="./sagun - Trust Nobody Love, Nobody The Same (Feat. Shiloh Dynasty).mp3"></audio>`

            }else{onOff.textContent='Sound:ON'
            tocar.innerHTML=`<audio autoplay loop src="./sagun - Trust Nobody Love, Nobody The Same (Feat. Shiloh Dynasty).mp3"></audio>`
        
        
        }


            e.preventDefault();
        });