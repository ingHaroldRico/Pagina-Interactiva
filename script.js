// document.querySelector("#btn").addEventListener("click", function(){
//     document.querySelector(".img").style.width="100px";
//     document.querySelector("p").textContent="Estafa";
// })

// contenido.innerHTML=`<img  class="img" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Air_india_b747-400_vt-esn_arp.jpg/330px-Air_india_b747-400_vt-esn_arp.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail">
//                     <p>holaaaaa</p>
//                      <button id="btn">Agregar</button>
//                      <button id="btn2">Resetear</button>`

const tarjeta1=document.querySelector("#tarjeta1");
document.querySelector("#comprar1").addEventListener("click", function(){
    document.querySelector("#estado1").textContent="VENDIDO";
    
})
document.querySelector("#cancelar1").addEventListener("click", function(){
    document.querySelector("#estado1").textContent="";
    
})
const tarjeta2=document.querySelector("#tarjeta2");
document.querySelector("#comprar2").addEventListener("click", function(){
    document.querySelector("#estado2").textContent="VENDIDO";
    
})
document.querySelector("#cancelar2").addEventListener("click", function(){
    document.querySelector("#estado2").textContent="";
    
})
const tarjeta3=document.querySelector("#tarjeta3");
document.querySelector("#comprar3").addEventListener("click", function(){
    document.querySelector("#estado3").textContent="VENDIDO";
    
})
document.querySelector("#cancelar3").addEventListener("click", function(){
    document.querySelector("#estado3").textContent="";
    
})
const tarjeta4=document.querySelector("#tarjeta4");
document.querySelector("#comprar4").addEventListener("click", function(){
    document.querySelector("#estado4").textContent="VENDIDO";
    
})
document.querySelector("#cancelar4").addEventListener("click", function(){
    document.querySelector("#estado4").textContent="";
    
})
const tarjeta5=document.querySelector("#tarjeta5");
document.querySelector("#comprar5").addEventListener("click", function(){
    document.querySelector("#estado5").textContent="VENDIDO";
    
})
document.querySelector("#cancelar5").addEventListener("click", function(){
    document.querySelector("#estado5").textContent="";
    
})
const fav1=document.querySelector("#fav1");
fav1.addEventListener("click", function(){
    fav1.classList.toggle("favoritos");
    
})

const fav2=document.querySelector("#fav2");
fav2.addEventListener("click", function(){
    fav2.classList.toggle("favoritos");
    
})

const fav3=document.querySelector("#fav3");
fav3.addEventListener("click", function(){
    fav3.classList.toggle("favoritos");
    
})

const fav4=document.querySelector("#fav4");
fav4.addEventListener("click", function(){
    fav4.classList.toggle("favoritos");
    
})

const fav5=document.querySelector("#fav5");
fav5.addEventListener("click", function(){
    fav5.classList.toggle("favoritos");
    
})