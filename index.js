const botonModo = document.querySelector('button');
const mensajeModo = document.querySelector('#modo');
const mensajeNombre = document.querySelector('#nombre');
const container = document.querySelector('.container');

botonModo.onclick = () => {
  container.classList.toggle('oscuro');
  if (container.classList.contains('oscuro')) {
    mensajeModo.textContent = 'claro';
  } else {
    mensajeModo.textContent = 'oscuro';
  }
};

const usuarioGuardado = localStorage.getItem('usuario');

if (usuarioGuardado) {
  const user = JSON.parse(usuarioGuardado)
  console.log(user)
  mensajeNombre.textContent = user.nombre;
 
} else {
  const nombre = prompt('Decime tu nombre');
  mensajeNombre.textContent = nombre;
  const usuario = {
    nombre: nombre,
  };
  localStorage.setItem('usuario', JSON.stringify(usuario));
}
