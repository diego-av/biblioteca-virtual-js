// Inicio Storage
function guardarDatos(storage) {
  let user = document.getElementById("email").value;
  let pass = document.getElementById("contrasenia").value;

  const usuario = {
    user: user,
    pass: pass,
  };

  if (storage === "sessionStorage") {
    sessionStorage.setItem("user", JSON.stringify(usuario));
  }

  if (storage === "localStorage") {
    localStorage.setItem("user", JSON.stringify(usuario));
  }
}

let recordar = document.getElementById("recordarme");
let btnLogin = document.getElementById("btnIngresar");

btnLogin.addEventListener("click", () => {
  if (recordar.checked) {
    guardarDatos("localStorage");
  } else {
    guardarDatos("sessionStorage");
  }
});
// Fin Storage
