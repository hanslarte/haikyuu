
let menu = document.getElementById("menu");

let mainMenu =  document.getElementById("mainNav");


menu.addEventListener("click",function(){
    mainMenu.classList.toggle("desplegar");
});



let abrirSublista = document.getElementById('sublista-a');

let subLista = document.getElementById('main-sublista');


abrirSublista.addEventListener("click",function(){
    let alturaSublista = subLista.scrollHeight;

    if(subLista.classList.contains("desplegar")){
        subLista.classList.remove("desplegar");
        subLista.removeAttribute("style");
    }else{
        subLista.classList.add("desplegar");
        subLista.style.height = alturaSublista + "px";
    }

   
});

let masCapitulos = document.getElementById('masCapitulos');


let plus = document.getElementById('plus');

plus.addEventListener('click',function(){
    
    let alturaPlus = masCapitulos.scrollHeight;

    if(plus.classList.contains('oculto')){
        plus.classList.remove('oculto');
        masCapitulos.style.height = alturaPlus + "px";
        masCapitulos.style.opacity = 1;
        masCapitulos.style.overflow = "visible";
        masCapitulos.style.transition = "all 1s"
    }else{
        plus.classList.add('oculto');
        masCapitulos.style.height = 0 + "px";
        masCapitulos.style.opacity = 0;
        masCapitulos.style.overflow = "hidden";
    }
});

