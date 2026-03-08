
const DOM = {
    botonNoche: document.getElementById("botonNoche"),
    body: document.body
};
const textos = {
    todosLosTextos: document.querySelectorAll(".texto"),
    listaDeLosTextos: [],
};
const imagenes = {
    imagenArticleNoche: document.querySelectorAll(".ocultarImagen")
};
const config = {
    clases: {
        modoOscuroBody: "modoOscuroBody"
    },
    opacidad: {
        visible: 1,
        oculto: 0
    },
    textos: {
        noche: ["Noche 1 nueva", "Noche 2 nueva"],
        dia: []
    }
};

textos.todosLosTextos.forEach(X => {
    textos.listaDeLosTextos.push(X.textContent)
});

config.textos.dia = textos.listaDeLosTextos;

let modoOscuro = DOM.body.classList.contains(config.clases.modoOscuroBody);

function nocheBody(){
    DOM.body.classList.toggle(config.clases.modoOscuroBody);
}
function nocheImagenes() {
    imagenes.imagenArticleNoche.forEach(x => {
        x.style.opacity = modoOscuro ? config.opacidad.oculto : config.opacidad.visible;
    })
}
function nocheTexto() {
    textos.todosLosTextos.forEach((x, y) => {
        x.textContent = modoOscuro
        ? config.textos.dia[y]
        : config.textos.noche[y];
    })
}

function activarModoNoche() {
    nocheBody();
    nocheImagenes();
    nocheTexto();
    modoOscuro = !modoOscuro;
}

DOM.botonNoche.addEventListener("click", activarModoNoche);
