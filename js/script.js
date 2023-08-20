
//Segunda Pre Entrega Proyecto final  Edgar Steinberg 


// Mi array de objetos con id nombre producto y precio
/* let productos = [
  {
    id: 1,
    nombreProducto: "camiseta argentina negra",
    precio: 24990
  },
  {
    id: 2,
    nombreProducto: "camiseta argentina blanca",
    precio: 27000
  },
  {
    id: 3,
    nombreProducto: "camiseta argentina titular",
    precio: 53000
  },
  {
    id: 4,
    nombreProducto: "camiseta argentina violeta",
    precio: 23989
  },
  {
    id: 5,
    nombreProducto: "camiseta argentina tres estrellas",
    precio: 51897
  },
  {
    id: 6,
    nombreProducto: "camiseta argentina campeona del mundo",
    precio: 49900
  }
];
// variables globales carrito almacena productos y producto almacena el producto encontrado en el proceso de busqueda.
let carrito = [];
let producto;


// funcion para interectuar con el usuario donde se le pide que elija el producto con un pront y con otra variable local utilizamos el filter para que busque y filtre que si lo q escribe el usuario esta en mi array y lo almacena en la variable producto.
function buscarProducto() {
  let seleccion = prompt("Ingrese el nombre del producto que desea comprar: \ncamiseta argentina negra\ncamiseta argentina blanca\ncamiseta argentina violeta\ncamiseta argentina tres estrella\ncamiseta argentina campeon del mundo");
  let productosSeleccionados = productos.filter((p) => p.nombreProducto.toLowerCase() == seleccion.toLowerCase());

  if (productosSeleccionados.length > 0) {
    producto = productosSeleccionados[0];
  } else {
    producto = null;
    alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
  }
}


//Se le pide al usuario que ingrese la cantidad y se crea un array con la informacion, este obejeto se agrega al carrito.
function agregarCarrito() {
  if (producto) {
    let cantidad = Number(prompt("Ingrese la cantidad que desea comprar"));
    carrito.push({
      producto: producto.nombreProducto,
      cantidad: cantidad,
      subtotal: producto.precio * cantidad
    });
  } 
}


//Hacemos un bucle while seteado en true donde llamamos las dos funciones y colacamos un if con un corfirm negado para que si el usuario apreta aceptar vuelva al bucle y se apreta cancelar sale del con un break.
function confirmarCarrito() {
  while (true) {
    buscarProducto();
    agregarCarrito();
    if (!confirm("¿Desea agregar otro producto al carrito?")) {
      break;
    }
  }
}

//se encarga de calcular y mostrar el total a pagar de un carrito de compras hacemos un foreach que se encarga se recorrer cada elemento del carrito un alert que muestra la cantida el producto y su total el reduce calcula el total que se inicializa en cero sum y item son el acumulador y elemento 
function calcularTotal() {
  alert("Carrito de compras: ");
  carrito.forEach((item) => {
    alert(`- ${item.cantidad} ${item.producto} : ${item.subtotal}`);
  });
  let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);
  alert(`Total a pagar : ${total}`);
}


//carrito se le asigna un array vacio
function vaciarCarrito() {
  carrito = [];
  alert("El carrito ha sido vaciado.");
}

confirmarCarrito();


// aca verifica si por lo menos hay un producto en el carrito que si el usuario apreta aceptar se vaciara el carrito con la funcion vaciarcarrito()
if (carrito.length > 0) {
  if (confirm("¿Desea vaciar el carrito?")) {
    vaciarCarrito();
  }
}

calcularTotal();


 */

/* // Obtener el elemento del DOM con el ID "miProducto"
const productoCard = document.getElementById("miProducto");

// Acceder a los elementos internos del div con clase "producto-card"
const imagen = productoCard.querySelector("img");
const titulo = productoCard.querySelector("h3");
const precio = productoCard.querySelector("h4");
const envio = productoCard.querySelector("h5");
const boton = productoCard.querySelector("a");

// Realizar acciones con los elementos obtenidos
console.log(imagen.src);
console.log(titulo.textContent);
console.log(precio.textContent);
console.log(envio.textContent);

// Ejemplo de cómo agregar un evento al botón
boton.addEventListener("click", () => {
  alert("¡Has hecho clic en el botón Comprar!");
}); */



  // Accediendo a todos los elementos con la clase "producto-card"
 // const productos = document.getElementsByClassName('producto-card');

  // O puedes usar document.querySelectorAll() para seleccionar por clase
  // const productos = document.querySelectorAll('.producto-card');

  // Iterando sobre los elementos con la clase "producto-card"
  //for (let i = 0; i < productos.length; i++) {
   // const producto = productos[i];

    // Realizando alguna acción con cada producto
   // producto.addEventListener('click', () => {
     // alert(`Haz clic en el producto número ${i + 1}.`);
      // Puedes realizar cualquier otra acción que desees aquí
   // });
//  }
