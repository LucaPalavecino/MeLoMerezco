// Definir los productos de ropa
const productos = [
    { id: 1, nombre: "Camiseta", precio: 2200 },
    { id: 2, nombre: "Pantalón", precio: 3600 },
    { id: 3, nombre: "Vestido", precio: 5200 },
    { id: 4, nombre: "Camisa", precio: 2500 },
    { id: 5, nombre: "Pantalón de Jing", precio: 3400 },
    { id: 6, nombre: "Remera", precio: 3500 },
    { id: 7, nombre: "Camisa mangas largas", precio: 6000 },
    { id: 8, nombre: "Shorts", precio: 3000 },
    { id: 9, nombre: "Corbata", precio: 1600 },
    { id: 10, nombre: "Medias largas", precio: 2600},
    { id: 11, nombre: "Medias cortas", precio: 2000 },
    { id: 12, nombre: "Guantes de Invierno", precio: 4000 },
];

const cart = [];

// Función para generar tarjetas de productos
function generarTarjetasDeProductos() {
    const productsSection = document.querySelector('.products');
    productsSection.innerHTML = '';

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
        <h3>${producto.nombre}</h3>
        
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    `;
        productsSection.appendChild(card);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);

    if (producto) {
        const itemEnCarrito = cart.find(item => item.producto.id === productoId);

        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            cart.push({ producto, cantidad: 1 });
        }

        actualizarCarrito();
    }
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    const cartContent = document.querySelector('#cart-content');
    cartContent.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        <p>${item.producto.nombre} x ${item.cantidad} - $${item.producto.precio * item.cantidad}</p>
    `;
        cartContent.appendChild(itemDiv);
        total += item.producto.precio * item.cantidad;
    });

    const cartTotalAmount = document.querySelector('#cart-total-amount');
    cartTotalAmount.textContent = total;

    const checkoutButton = document.querySelector('#checkout-button');
    checkoutButton.disabled = cart.length === 0;
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const cartSection = document.querySelector('.cart');
    cartSection.style.display = 'block';
}

// Función para ocultar el carrito
function ocultarCarrito() {
    const cartSection = document.querySelector('.cart');
    cartSection.style.display = 'none';
}

// Evento para mostrar/ocultar el carrito al hacer clic en el botón del carrito
const cartButton = document.querySelector('#cart-button');
cartButton.addEventListener('click', () => {
    const cartSection = document.querySelector('.cart');
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        mostrarCarrito();
    } else {
        ocultarCarrito();
    }
});

// Evento para finalizar la compra
const checkoutButton = document.querySelector('#checkout-button');
checkoutButton.addEventListener('click', () => {
    alert('Compra finalizada. Total a pagar: $' + document.querySelector('#cart-total-amount').textContent);
});

// Generar las tarjetas de productos al cargar la página
window.addEventListener('load', () => {
    generarTarjetasDeProductos();
});


// Función para guardar el carrito en el almacenamiento local
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(cart));
}

// Función para cargar el carrito desde el almacenamiento local
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');

    if (carritoGuardado) {
        cart.length = 0; // Vaciamos el carrito actual
        const carritoParseado = JSON.parse(carritoGuardado);
        cart.push(...carritoParseado);
        actualizarCarrito();
    }
}

// Evento para cargar el carrito desde el almacenamiento local al cargar la página
window.addEventListener('load', () => {
    cargarCarritoDesdeLocalStorage();
});

// Evento para agregar productos al carrito y actualizar el almacenamiento local
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);

    if (producto) {
        const itemEnCarrito = cart.find(item => item.producto.id === productoId);

        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            cart.push({ producto, cantidad: 1 });
        }

        actualizarCarrito();
        guardarCarritoEnLocalStorage(); // Guardamos el carrito en el almacenamiento local
    }
}

// Evento para finalizar la compra y borrar el carrito en el almacenamiento local
checkoutButton.addEventListener('click', () => {
    alert('Compra finalizada. Total a pagar: $' + document.querySelector('#cart-total-amount').textContent);
    cart.length = 0; // Vaciamos el carrito
    actualizarCarrito();
    guardarCarritoEnLocalStorage(); // Actualizamos el almacenamiento local
});








































