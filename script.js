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



// Trabajando con json

const shoes = [];

let peticion = fetch("/catalogo.json");

peticion
    .then(res => res.json())
    .then(res => shoes.push(...res));

console.log(shoes);

const zapatillas = document.querySelectorAll('.most-sellers-prod');
const conteinerxd = document.querySelector(".conteinerxd");

zapatillas.forEach(zapatilla => zapatilla.addEventListener('click', showProd));

function showProd () {
    let zapa = (this.id-1)
    let zapa2 = (this.id - 0)
    let zapa3 = (this.id - 2)

    if (zapa == 0 ) {
        zapa3 = 2
    } else if (zapa == 40) {
        zapa2 = 38
    }

    localStorage.clear();
    zapasss = [{
        zapa: zapa, 
        zapa2: zapa2, 
        zapa3: zapa3
    }];
    localStorage.setItem('zapa', JSON.stringify(zapasss));
    window.location="/showprod.html";
};

function loadProd (){
    let misZapas = JSON.parse(localStorage.getItem("zapa"))
    console.log(misZapas[0].zapa)
    console.log(misZapas[0].zapa2)
    console.log(misZapas[0].zapa3)

    conteinerxd.innerHTML = `
    <div class="show-prod">
        <img src=${shoes[misZapas[0].zapa].img} alt="">
        <h2>${shoes[misZapas[0].zapa].name}</h2>
        <p>${shoes[misZapas[0].zapa].description}</p>
        <div class="div1">
            <h2>$${shoes[misZapas[0].zapa].price}</h2>
            <div class="div2">
                <p>Talle</p>
                <select name="talle" id="talle">
                    <option value="37">37</option>
                    <option value="37">38</option>
                    <option value="37">39</option>
                    <option value="37">40</option>
                    <option value="37">41</option>
                    <option value="37">42</option>
                    <option value="37">43</option>
                </select> 
            </div>
        </div>
        <button>Agregar al carrito</button>
    </div>

    <h4 class="middle">Envio gratis con la compra de 3 o mas unidades</h4>
    <h4 class="middle">Productos similares</h4>
    <div class="most-sellers">
        <div class="most-sellers-prod">
            <img src=${shoes[misZapas[0].zapa2].img} alt="">
            <p>${shoes[misZapas[0].zapa2].name}</p>
            <h4>$${shoes[misZapas[0].zapa2].price}</h4>
        </div>
        <div class="most-sellers-prod">
            <img src=${shoes[misZapas[0].zapa3].img} alt="">
            <p>${shoes[misZapas[0].zapa3].name}</p>
            <h4>$${shoes[misZapas[0].zapa3].price}</h4>
        </div>
    </div>
    `
}

setTimeout(loadProd, 100);

