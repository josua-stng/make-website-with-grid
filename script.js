const menuToogle=document.querySelector(".menu-toogle");
const nav=document.querySelector("nav ul");
menuToogle.addEventListener("click",function(){
    nav.classList.toggle("slide");
})