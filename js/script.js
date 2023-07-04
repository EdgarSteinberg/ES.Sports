
//Pre Entrega Edgar Steinberg 


let carrito = "";
let nuevaOperacion = false;
let totalCompra = 0;

function hacerCarrito() {
  do {
      producto = prompt("Agregar al carrito, seleccione su camiseta\n(Argentina, Independiente, River, Boca):");
      cantidad = Number(prompt(`Ingrese la cantidad de camisetas de ${producto} que desea comprar:`));
      seleccionarCamiseta();
      nuevaOperacion = confirm("¿Desea agregar otro producto al carrito?");
  } while (nuevaOperacion);
  alert("Productos en el carrito:\n" + carrito + "Precio total de la compra:\n" + totalCompra + " Pesos\n" + "Gracias por su compra" );
}

function seleccionarCamiseta() {
  switch (producto.toLowerCase()) {
    case "argentina":
      precio = 33000 * cantidad;
      carrito += `Camiseta de Argentina - Cantidad: ${cantidad} - Total: ${precio} pesos\n`;
      totalCompra += precio
      break;
    case "independiente":
      precio = 27000 * cantidad;
      carrito += `Camiseta de Independiente - Cantidad: ${cantidad} - Total: ${precio} pesos\n`;
      totalCompra += precio
      break;
    case "river":
      precio = 25000 * cantidad;
      carrito += `Camiseta de River - Cantidad: ${cantidad} - Total: ${precio} pesos\n`;
      totalCompra += precio
      break;
    case "boca":
      precio = 24000 * cantidad
      carrito += `Camiseta de Boca - Cantidad: ${cantidad} - Total: ${precio} pesos\n`;
      totalCompra += precio
      break;
    default:
      alert("El producto ingresado no está disponible.");
      break;
  }

} 

hacerCarrito();  

 
