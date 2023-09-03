
alert("Bienvenidos a MeLo Merezco")

const productos = [
    { nombre: "Camiseta", precio: 3800, },
    { nombre: "Pantalón", precio: 3900 },
    { nombre: "Vestido", precio: 5000 },
    { nombre: "Remera", precio: 4500 },
    { nombre: "Camisa", precio: 4600 },
    { nombre: "Medias", precio: 2600 },
    { nombre: "Corbatas", precio: 2400 },
    { nombre: "Cinto", precio: 3200},

    
    
];

  // Inicializar el carrito de compra
const carrito = [];

  // Mostrar los productos disponibles
function mostrarProductos() {
    let listaProductos = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
    listaProductos += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    alert(listaProductos);
}

  // Agregar productos al carrito
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

  // Calcular el precio total del carrito
function calcularTotalCarrito() {
    let total = 0;
    for (const item of carrito) {
      total += item.producto.precio * item.cantidad;
    }
    return total;
}

  // Mostrar el contenido y el precio total del carrito
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
  
































    // let validUsers = [
    //     { username: "luca", password: "patitasdepescado" },
    //     { username: "usuario2", password: "contraseña2" },
        
    // ];

    // let isLoggedIn = false;

    // for (let i = 0; i < validUsers.length; i++) {
    //     if (username === validUsers[i].username && password === validUsers[i].password) {
    //         isLoggedIn = true;
    //         break;
    //     }
    // }

    // if (isLoggedIn) {
    //     document.getElementById("message").textContent = "Inicio de sesión exitoso. ¡Bienvenido!";
    // } else {
    //     document.getElementById("message").textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
    // }

    


