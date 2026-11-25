// 1. Clase y objetos
class Tarea {
  constructor(titulo, prioridad) {
    this.titulo = titulo;
    this.prioridad = prioridad;
  }

  descripcion() {
    return this.titulo + " (" + this.prioridad + ")";
  }
}

const t1 = new Tarea("Repasar DOM", "Alta");
const t2 = new Tarea("Hacer push en GitHub", "Media");

// 2. Mostrar en la página y eventos click
const tareas = [t1, t2];
const lista = document.querySelector("#lista");

tareas.forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t.descripcion() + " ";

  const btnMarcar = document.createElement("button");
  btnMarcar.textContent = "Marcar";
  btnMarcar.addEventListener("click", () => {
    li.classList.toggle("hecha");
  });

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnMarcar);
  li.appendChild(btnBorrar);
  lista.appendChild(li);
});

// 3. Evento submit
const formulario = document.querySelector("#formulario");
const nombreTarea = document.querySelector("#nombreTarea");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (nombreTarea.value === "") {
    mensaje.textContent = "Escribe una tarea";
    mensaje.classList.add("error");
  } else {
    mensaje.textContent = "";
    const nueva = new Tarea(nombreTarea.value, "Normal");

    const li = document.createElement("li");
    li.textContent = nueva.descripcion() + " ";

    const btnMarcar = document.createElement("button");
    btnMarcar.textContent = "Marcar";
    btnMarcar.addEventListener("click", () => {
      li.classList.toggle("hecha");
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(btnMarcar);
    li.appendChild(btnBorrar);
    lista.appendChild(li);
    nombreTarea.value = "";
  }
});