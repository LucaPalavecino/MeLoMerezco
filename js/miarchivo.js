// Arrays para almacenar los productos y cantidades seleccionados
alert("Bienvenidos a MeLo Merezco")

const productos = [
  "Camiseta Roja",
  "Pantalón Negro",
  "Vestido Floral",
  "Chaqueta de Mezclilla",
  "Sudadera Gris",
  "Blusa Blanca",
  "Jeans Azules",
  "Falda Plisada",
  "Chaleco Negro",
  "Shorts Vaqueros"
];
const precios = [
  2500,
  3400,
  4500,
  3900,
  2500,
  1800,
  2900,
  2200,
  2800,
  1900
];

// Función para mostrar la lista de productos
function mostrarProductos() {
  let listaProductos = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
      listaProductos += `${i + 1}. ${productos[i]} - $${precios[i].toFixed(2)}\n`;
  }
  return listaProductos;
}

// Función para seleccionar productos y cantidades
function seleccionarProductos() {
  const carrito = [];
  
  while (true) {
      const seleccion = parseInt(prompt(mostrarProductos() + "\n\n Oprima (0 para salir):"));
      
      if (seleccion === 0) {
          break;
      }
      
      if (seleccion < 1 || seleccion > productos.length) {
          alert("Selección inválida. Intente nuevamente.");
          continue;
      }
      
      const cantidad = parseInt(prompt(`Seleccione la cantidad de ${productos[seleccion - 1]}:`));
      
      if (isNaN(cantidad) || cantidad <= 0) {
          alert("Cantidad inválida. Intente nuevamente.");
          continue;
      }
      
      carrito.push({
          producto: productos[seleccion - 1],
          cantidad: cantidad,
          subtotal: precios[seleccion - 1] * cantidad
      });
      
      alert(`Se ha agregado ${cantidad} ${productos[seleccion - 1]} al carrito.`);
  }
  
  return carrito;
}

// Función para calcular el precio total del carrito
function calcularTotal(carrito) {
  let total = 0;
  for (const item of carrito) {
      total += item.subtotal;
  }
  return total;
}



// Ejecución 
const carrito = seleccionarProductos();

if (carrito.length > 0) {
  const totalCompra = calcularTotal(carrito);
  let factura = "Detalles de la compra:\n";
  for (const item of carrito) {
      factura += `${item.cantidad} ${item.producto} - $${item.subtotal.toFixed(2)}\n`;
  }
  factura += `\nTotal a pagar: $${totalCompra.toFixed(2)}`;
  alert(factura);
} else {
  alert("Gracias por visitar MeLo Merezco");
}
  
































   


