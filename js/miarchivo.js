// Arrays para almacenar los productos y cantidades seleccionados
alert("Bienvenidos a MeLo Merezco")

const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Vestido", precio: 50 },
    { nombre: "Chaqueta", precio: 60 },
    { nombre: "Calcetines", precio: 5 },
    { nombre: "Zapatos", precio: 70 },
    { nombre: "Sombrero", precio: 15 },
    { nombre: "Bufanda", precio: 10 },
    { nombre: "Guantes", precio: 8 },
    { nombre: "Abrigo", precio: 75 }
];

// Inicializar el carrito de compra
const carrito = [];

// Funcion poara mostrar los productos disponibles
function mostrarProductos() {
    let listaProductos = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        listaProductos += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    alert(listaProductos);
}

// Funcion para agregar productos al carrito
function agregarAlCarrito() {
    mostrarProductos();
    const seleccion = parseInt(prompt("Ingrese el número del producto que desea agregar al carrito:")) - 1;
    const cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"));

    if (seleccion >= 0 && seleccion < productos.length && cantidad > 0) {
        carrito.push({ producto: productos[seleccion], cantidad });
        alert("Producto agregado al carrito");
    } else {
        alert("Selección inválida");
    }
}

// Funcion para calcular el precio total del carrito
function calcularTotalCarrito() {
    let total = 0;
    for (const item of carrito) {
        total += item.producto.precio * item.cantidad;
    }
    return total;
}

// Funcion para mostrar el contenido y el precio total a pagar
function mostrarCarrito() {
    let contenidoCarrito = "Contenido del carrito:\n";
    for (const item of carrito) {
        contenidoCarrito += `${item.producto.nombre} - Cantidad: ${item.cantidad}\n`;
    }

    const total = calcularTotalCarrito();
    contenidoCarrito += `\nTotal a pagar: $${total}`;

    alert(contenidoCarrito);
}

// Menú de la tienda
function menuTienda() {
    while (true) {
        const opcion = parseInt(prompt("Seleccione una opción:\n1. Ver productos\n2. Agregar al carrito\n3. Ver carrito\n4. Salir"));

        switch (opcion) {
            case 1:
                mostrarProductos();
                break;
            case 2:
                agregarAlCarrito();
                break;
            case 3:
                mostrarCarrito();
                break;
            case 4:
                return;
            default:
                alert("Opción inválida");
        }
    }
}

// Iniciar la tienda
menuTienda();

alert("Gracias por visitar MeLo Merezco")

  
































   


