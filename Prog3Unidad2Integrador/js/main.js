const cargarCategorias = () => {
    const listaCategorias = document.getElementById("lista-categorias");

    categorias.forEach((categoria) => {
        const li = document.createElement("li");
        const enlace = document.createElement("a");

        enlace.href = "#";
        enlace.textContent = categoria;

        li.appendChild(enlace);
        listaCategorias.appendChild(li);
    });
};

const cargarProductos = () => {
    const contenedorProductos = document.getElementById("contenedor-productos");

    productos.forEach((producto) => {
        const article = document.createElement("article");
        article.classList.add("producto-card");

    article.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio">$${producto.precio}</p>
        <button type="button" class="btn-agregar">Agregar</button>
    `;

        const btnAgregar = article.querySelector(".btn-agregar");
        btnAgregar.addEventListener("click", () => {
            alert(`Has agregado "${producto.nombre}" al carrito.`);
        });

        contenedorProductos.appendChild(article);
    });
};

cargarCategorias();
cargarProductos();