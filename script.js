//         nombre: "Martin Fierro",
//         autor: "Jose Hernandez",
//         editorial: "Penguin",
//         anio: 2018,
//         precio: 600,
//         imagen: "img/Libro-Martin-fierro.jpg",

//         nombre: "El mago de Oz",
//         autor: "L.F. Baum",
//         editorial: "Anaya",
//         anio: 2019,
//         precio: 700,
//         imagen: "img/Libro-Mago-de-Oz.jpg",
Swal.fire({
    title: "Bienvenid@ nuevamente",
    text: "¡Estamos felices de que hayas vuelto! Ingresaron nuevos libros que te pueden interesar.",
    imageUrl: "img/carita-feliz.png",
    imageWidth: 600,
    imageHeight: 200,
    imageAlt: "Carita feliz",
});

class Libro {
  constructor(nombre, autor, editorial, anio, precio, imagen) {
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.anio = anio;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let libros = [];

const libro1 = new Libro(
  "El libro de la selva",
  "Rudyard Kipling",
  "Editorial Porrúa México",
  "2020",
  "500",
  "img/Libro-El-libro-de-la-selva.jpg"
);
libros.push(libro1);

const libro2 = new Libro(
  "Boquitas pintadas",
  "Manuel Puig",
  "Seix Barral",
  "2012",
  "600",
  "img/Libro-Boquitas-pintadas.jpg"
);
libros.push(libro2);

const libro3 = new Libro(
  "El juguete rabioso",
  "Roberto Art",
  "Editorial Co",
  "2020",
  "700",
  "img/Libro-El-juguete-rabioso.jpg"
);
libros.push(libro3);

const libro4 = new Libro(
  "El túnel",
  "Ernesto Sabato",
  "Seix Barral",
  "2010",
  "500",
  "img/Libro-El-tunel.jpg"
);
libros.push(libro4);

function imprimirLibros() {
  let biblioteca = document.getElementById("biblioteca");

  // Esto vacía el contenedor antes de imprimir de nuevo los libros
  // para evitar que se dupliquen
  biblioteca.innerHTML = "";

  libros.forEach((libro) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-lg-6");
    card.innerHTML = `<img src=${libro.imagen} class="card-img-top">
                        <div class="card-body"> 
                        <h5 class="card-title">${libro.nombre}</h5>
                        <p class="card-text">${libro.autor}.</p>
                        <p class="card-text">${libro.editorial}.</p>
                        <p class="card-text">${libro.anio}.</p>
                        <p class="card-text">$${libro.precio}.</p>
                        <a href="#" class="btn btn-primary">Agregar a favoritos</a>
                        </div>`;
    biblioteca.appendChild(card);
  });
}

const agregoUnLibro = document.getElementById("btnAgregarLibro");

// Cuando tomamos los datos de un form submit, tenemos que pasar
// la e por parámetro y el e.preventDefault() lo que hace es
// prevenir que no se refresque la página
agregoUnLibro.addEventListener("click", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombreNuevoLibro").value;
  let autor = document.getElementById("autorNuevoLibro").value;
  let editorial = document.getElementById("editorialNuevoLibro").value;
  let anio = document.getElementById("anioNuevoLibro").value;
  let precio = document.getElementById("precioNuevoLibro").value;
  let imagen = document.getElementById("imagenNuevoLibro");

  const libro = new Libro(nombre, autor, editorial, anio, precio, imagen);

  libros.push(libro);

  localStorage.setItem("libros", JSON.stringify(libros));

  imprimirLibros();
});

// Ejecución del programa
// Chequear si hay datos guardados en storage
imprimirLibros();

if (JSON.parse(localStorage.getItem("libros"))) {
  libros = JSON.parse(localStorage.getItem("libros"));
  imprimirLibros();
}

// let divApi=document.addEventListener("divApi")

fetch("http://www.omdbapi.com/?apikey=[yourkey]&t&y&type")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);



  // <a href="#" class="btn btn-primary">
//   Agregar a favoritos
// </a>;