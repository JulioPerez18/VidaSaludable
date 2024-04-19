window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY>0);
})

const productos = [
  {
    id: 1,
    nombre: "Plato basico",
    precio: 50,
    img:
    "comprar1.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Berenjenas",
    precio: 100,
    img:
      "comprar2.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Alcachofas al horno",
    precio: 150,
    img:
      "comprar3.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Arroz bastamani",
    precio: 200,
    img:
      "comprar4.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Tataki de Atun",
    precio: 50,
    img:
    "comprar5.jpg",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Merluza al vapor",
    precio: 100,
    img:
      "comprar6.jpg",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Curry de tirabeques",
    precio: 150,
    img:
      "comprar7.jpg",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Crema de puerros",
    precio: 200,
    img:
      "comprar8.jpg",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Guiso de bacalao",
    precio: 200,
    img:
      "comprar89.jpg",
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Bacalao co habas",
    precio: 200,
    img:
      "comprar10.jpg",
    cantidad: 1,
  },
];

const paquetes = [
  [
    {
      id: 1,
      nombre: "Plato basico",
      precio: 50,
      img:
      "comprar1.jpg",
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Berenjenas",
      precio: 100,
      img:
        "comprar2.jpg",
      cantidad: 1,
    },
  ],
  [
    {
      id: 5,
      nombre: "Tataki de Atun",
      precio: 50,
      img:
      "comprar5.jpg",
      cantidad: 1,
    },
    {
      id: 9,
      nombre: "Guiso de bacalao",
      precio: 200,
      img:
        "comprar89.jpg",
      cantidad: 1,
    },
    {
      id: 3,
      nombre: "Alcachofas al horno",
      precio: 150,
      img:
        "comprar3.jpg",
      cantidad: 1,
    }
  ],
  [
    {
      id: 10,
      nombre: "Bacalao co habas",
      precio: 200,
      img:
        "comprar10.jpg",
      cantidad: 1,
    },
    {
      id: 8,
      nombre: "Crema de puerros",
      precio: 200,
      img:
        "comprar8.jpg",
      cantidad: 1,
    },
    {
      id: 4,
      nombre: "Arroz bastamani",
      precio: 200,
      img:
        "comprar4.jpg",
      cantidad: 1,
    }
  ]
]
  
  