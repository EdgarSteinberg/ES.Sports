

let carrito = "";
let nuevaOperacion = false;
let producto = prompt("Agregar al carrito:\nSeleccione su camiseta:\n  Argentina\n  Independiente\n  River\n  Boca\n");
let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
let totalCompra = 0;

function hacerCarrito(producto, cantidad) {
  do {
    seleccionarProducto(producto, cantidad);
    nuevaOperacion = confirm("¿Desea agregar otro producto al carrito?");
     if (nuevaOperacion) {
      producto = prompt("Comprar ahora, seleccione su camiseta (Argentina, Independiente, River, Boca):");
      cantidad = parseInt(prompt(`Ingrese la cantidad de camisetas de ${producto} que desea comprar:`));
    }   
  } while (nuevaOperacion);

  alert("Productos en el carrito:\n" + carrito + "Precio total de la compra:\n" + totalCompra + " Pesos\n" + "Gracias por su compra" );

}

function seleccionarProducto(producto, cantidad) {
  switch (producto.toLowerCase()) {
    case "argentina":
      let precioArgentina = 33000 * cantidad;
      carrito += `Camiseta de Argentina - Cantidad: ${cantidad} - Total: ${precioArgentina} pesos\n`;
      totalCompra += precioArgentina;
      break;
    case "independiente":
      let precioIndependiente = 27000 * cantidad;
      carrito += `Camiseta de Independiente - Cantidad: ${cantidad} - Total: ${precioIndependiente} pesos\n`;
      totalCompra += precioIndependiente;
      break;
    case "river":
      let precioRiver = 25000 * cantidad;
      carrito += `Camiseta de River - Cantidad: ${cantidad} - Total: ${precioRiver} pesos\n`;
      totalCompra += precioRiver
      break;
    case "boca":
      let precioBoca = 24000 * cantidad
      carrito += `Camiseta de Boca - Cantidad: ${cantidad} - Total: ${precioBoca} pesos\n`;
      totalCompra += precioBoca 
      break;
    default:
      alert("El producto ingresado no está disponible.");
      break;
  }

}

hacerCarrito(producto, cantidad);  
