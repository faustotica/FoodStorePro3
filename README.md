Food Store - Catálogo Dinámico

Proyecto web desarrollado como parte del Trabajo Práctico Integrador de Programación Web. La aplicación simula una tienda de comidas rápidas con renderizado dinámico de productos y categorías mediante JavaScript y manipulación del DOM.

---

## Funcionalidades

* **Renderizado dinámico de productos:** Carga automatizada del catálogo a partir de un array de objetos (`data.js`) inyectado en el DOM con Vanilla JavaScript.
* **Carga de categorías:** Generación de enlaces y filtros de categorías directamente desde la lógica de scripts.
* **Interactividad:** Manejo de eventos del usuario (agregado de productos al carrito con alertas interactivas).
* **Diseño responsivo:** Maquetación con CSS moderno utilizando CSS Grid y Flexbox.

---

## Estructura del Proyecto

```text
/
├── index.html        # Página principal de la tienda
├── login.html        # Pantalla de inicio de sesión
├── login.css         # Estilos específicos del login
├── css/
│   └── style.css     # Estilos generales y layout de la tienda
├── js/
│   ├── data.js       # Arrays con la información de productos y categorías
│   └── main.js       # Lógica de manipulación del DOM y renderizado
└── assets/           # Recursos visuales e imágenes locales del catálogo
