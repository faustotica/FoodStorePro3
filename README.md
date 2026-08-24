Food Store - Catálogo Dinámico

Proyecto web desarrollado como parte del Trabajo Práctico Integrador de Programación Web. La aplicación simula una plataforma de pedidos de comidas rápidas con renderizado dinámico de productos y categorías mediante JavaScript y manipulación del DOM.

---

## Contexto y Decisiones Técnicas

* **El Problema:** La necesidad de desacoplar los datos de la interfaz visual para evitar la duplicación de código HTML estático y permitir que el catálogo escale o se actualice sin reescribir la estructura base.
* **Decisiones de Arquitectura:** 
  * **Separación de responsabilidades:** Los datos residen exclusivamente en `data.js` como una fuente única de verdad, mientras que `main.js` se encarga únicamente del ciclo de renderizado e interacción con el DOM.
  * **Manipulación declarativa del DOM:** Se implementaron métodos de arrays (`forEach`) y *template literals* para estructurar las tarjetas dinámicas, asegurando un flujo de renderizado limpio y legible.
  * **Layout Híbrido:** Implementación de **CSS Grid** para la grilla adaptable de productos y **Flexbox** en el contenedor global (`min-height: 100vh`) para garantizar un footer anclado al pie sin romper el layout en pantallas de distintas resoluciones.
* **Aprendizajes y Desafíos:** Manejo de rutas relativas para recursos estáticos locales (`assets/`) y control de eventos del usuario en elementos generados dinámicamente en tiempo de ejecución.

---

## Funcionalidades

* **Renderizado dinámico:** Generación automática del catálogo a partir de arrays de objetos (`data.js`).
* **Carga de categorías:** Generación de enlaces y filtros leídos directamente desde scripts.
* **Manejo de eventos:** Botón interactivo de agregar al carrito con retroalimentación inmediata al usuario.
* **Diseño responsivo:** Maquetación moderna utilizando CSS Grid y Flexbox.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica del documento.
* **CSS3:** Flexbox, CSS Grid y Variables CSS (`:root`).
* **JavaScript (ES6+):** Métodos de arrays (`forEach`), template literals y manipulación del DOM.

---

## Estructura del Proyecto

* `index.html` - Página principal del catálogo.
* `login.html` - Pantalla de inicio de sesión.
* `login.css` - Estilos del formulario de login.
* `css/style.css` - Estilos globales y layout del catálogo.
* `js/data.js` - Arrays con la información de productos y categorías.
* `js/main.js` - Lógica de manipulación del DOM y renderizado dinámico.
* `assets/` - Recursos visuales e imágenes locales.

---

## Cómo ejecutar el proyecto

1. Clona o descarga este repositorio.
2. Abre la carpeta del proyecto en VS Code.
3. Abre el archivo `index.html` directamente en tu navegador web o mediante la extensión **Live Server**.
