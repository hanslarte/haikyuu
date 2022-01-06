
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


let sinopsisMenos = document.getElementById('sinopsisMenos');

let sinopsisMas = document.getElementById('sinopsisMas');

let botonMas = document.getElementById('botonMas');

let botonMenos = document.getElementById('botonMenos');



botonMas.addEventListener("click",function(){

    let alturaLeerMas = sinopsisMas.scrollHeight;

    botonMas.style.opacity=0;

    sinopsisMas.style.height= alturaLeerMas + "px";

    sinopsisMas.style.opacity=1;

    sinopsisMas.style.transition= "all 1s";

});

botonMenos.addEventListener("click",function(){

    let alturaLeerMas = sinopsisMas.scrollHeight;

    botonMas.style.opacity=1;

    sinopsisMas.style.height= 0 + "px";

    sinopsisMas.style.opacity=0;
})
