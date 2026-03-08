
const DOM = {
    botonNoche: document.getElementById("botonNoche"),
    body: document.body
};
const textos = {
    todosLosTextos: document.querySelectorAll(".texto"),
    listaDeLosTextos: [],
    listaDeLosTextosNoche: ["Noche 1", "Noche 2"]
};
const imagenes = {
    imagenArticleNoche: document.querySelectorAll(".ocultarImagen")
};

textos.todosLosTextos.forEach(X => {
    textos.listaDeLosTextos.push(X.textContent)
});

let estadoCaja = false;
let modoOscuro = DOM.body.classList.contains("modoOscuroBody");

function nocheBody(){
    DOM.body.classList.toggle("modoOscuroBody");
}
function nocheImagenes() {
    imagenes.imagenArticleNoche.forEach(x => {
        x.style.opacity = modoOscuro ? 0 : 1;
    })
}
function nocheTexto() {
    textos.todosLosTextos.forEach((x, y) => {
        x.textContent = modoOscuro
        ? textos.listaDeLosTextos[y]
        : textos.listaDeLosTextosNoche[y];
    })
}

function activarModoNoche() {
    nocheBody();
    nocheImagenes();
    nocheTexto();
    modoOscuro = !modoOscuro;
}

DOM.botonNoche.addEventListener("click", activarModoNoche);
