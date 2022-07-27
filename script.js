let abrirmenu = document.getElementById("abrir-menu-mobile");

abrirmenu.addEventListener("click", () => {
    document.querySelector(".menu-mobile").style.display = "block";
})

let cerrarmenu = document.getElementById("cerrar-menu-mobile");

cerrarmenu.addEventListener("click", () => {
    document.querySelector(".menu-mobile").style.display = "none";
    document.querySelector(".menu-mobile2").style.display = "none";
})

let abrirmenu2 = document.getElementById("abrir-menu-mobile2");

abrirmenu2.addEventListener("click", () => {
    document.querySelector(".menu-mobile2").style.display = "block";
})

let cerrarmenu2 = document.getElementById("cerrar-menu-mobile2");

cerrarmenu2.addEventListener("click", () => {
    document.querySelector(".menu-mobile2").style.display = "none";
})
