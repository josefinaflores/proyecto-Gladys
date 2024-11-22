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

let productocarritos = JSON.parse(localStorage.getItem("carrito")) || []; // Asegura que no sea null

function cargarcarrito() {
    let enlaces = document.getElementById("tablacarrito");
    enlaces.innerHTML = ""; // Limpia el contenido antes de cargar para evitar duplicados

    for (const productocarrito of productocarritos) {
        let lista = document.createElement("tr");
        lista.id = `producto-${productocarrito.id}`; // Asegura que el ID sea único

        lista.innerHTML = `
            <td><img src="${productocarrito.img}" alt="" width="60"></td>
            <td>${productocarrito.cantidad}</td>
            <td>${productocarrito.nombre}</td>
            <td>${productocarrito.precio}</td>
            <td>${productocarrito.cantidad * productocarrito.precio}</td> <!--Total-->
            <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">Eliminar</button></td>
        `;

        enlaces.appendChild(lista);
    }
}

function eliminarproducto(id) {
    // Filtra los productos para excluir el eliminado
    productocarritos = productocarritos.filter(producto => producto.id !== id);

    // Actualiza el DOM
    let nodo = document.getElementById(`producto-${id}`);
    if (nodo) nodo.remove();

    // Actualiza localStorage
    localStorage.setItem("carrito", JSON.stringify(productocarritos));
}

// Carga inicial del carrito
cargarcarrito();
