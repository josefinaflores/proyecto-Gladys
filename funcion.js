const menus = [
    { nombre: "Inicio", url: "index.html" },
    { nombre: "Carrito", url: "carrito.html" }
];

function cargarelmenu() {
    let enlances = document.getElementById('ulmenu'); 
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
        enlances.appendChild(lista);
    }
}

cargarelmenu();


const productos = [{nombre:"Barco Pirata", precio:"60000", img:"img/pirata.jpg", id:1},
    {nombre:"Super carrera ", precio:"120000", img:"img/CARRRR.jpg", id:2},
    {nombre:"Tobogan Escalador", precio:"110000", img:"img/tobogan.jpg", id:3},
]

function cargarproductos(){
    let ventas = document.getElementById('boxprductos')
        for (const producto of productos){
            let contenedor = document.createElement("div")
            contenedor.innerHTML = `<div id="boxproducto">
                <h3>${producto.nombre}</h3>
                <img src=${producto.img} alt="">
                <p>$${producto.precio}</p>
                <button onclick = "verdetalle('${producto.id}')">Detalles</button>
            </div>`
            ventas.appendChild(contenedor)
        }
}

cargarproductos()

function verdetalle(idproducto) {
    const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto)); 
    const enJSON = JSON.stringify(buscarProducto)
    localStorage.setItem("detalleproducto", enJSON)
    window.location.href = "detalle.html"
}