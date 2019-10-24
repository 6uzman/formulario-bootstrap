const botonEnviar = document.getElementById("botonEnviar")

let usuarioAlta = {}

botonEnviar.addEventListener("click", function() {
  usuarioAlta.nombre = document.getElementById("inputNombre").value
  usuarioAlta.ocupacion = document.getElementById("ocupacionInput").value
  usuarioAlta.edad = document.getElementById("edadInput").value
  usuarioAlta.correo = document.getElementById("inputEmail").value
  usuarioAlta.contrasenia = document.getElementById("inputPassword").value
  console.log(usuarioAlta)
})
