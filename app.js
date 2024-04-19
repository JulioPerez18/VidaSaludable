const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function Mensaje(){
  Swal.fire(
    'Buen trabajo!',
    'Producto agregado correctamente al carrito!',
    'success'
  )
}
productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);
  comprar.addEventListener("click", () => {
    Mensaje();
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
    }
  });
});
//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
//get item

btn1.addEventListener("click", () => {
  paquetes[0].forEach(e => {

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === e.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === e.id) {
          prod.cantidad++;
        }
      });
    }
    else{
      carrito.push(e);
      console.log(carrito);
    }
  });
  carritoCounter();
  saveLocal();
});

btn2.addEventListener("click", () => {
  paquetes[1].forEach(e => {

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === e.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === e.id) {
          prod.cantidad++;
        }
      });
    }
    else{
      carrito.push(e);
      console.log(carrito);
    }
  });
  carritoCounter();
  saveLocal();
});

btn3.addEventListener("click", () => {
  paquetes[2].forEach(e => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === e.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === e.id) {
          prod.cantidad++;
        }
      });
    }
    else{
      carrito.push(e);
      console.log(carrito);
    }
  });
  carritoCounter();
  saveLocal();
});