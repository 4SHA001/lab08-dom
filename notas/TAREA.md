# Tarea: Mi componente interactivo

## Componente elegido
Lista de tareas con botones para marcar y borrar.

## Codigo principal
```js
class Tarea {
  constructor(titulo, prioridad) {
    this.titulo = titulo;
    this.prioridad = prioridad;
  }

  descripcion() {
    return this.titulo + " (" + this.prioridad + ")";
  }
}

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
    lista.appendChild(li);
    nombreTarea.value = "";
  }
});
```

## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Enviar formulario vacío|Muestra "Escribe una tarea" en rojo sin recargar | Si|
|Agregar una tarea nueva |Crea un <li> con botones Marcar y Borrar | Si |
|Clic en Marcar y Borrar |Tacha la tarea y luego la borra del DOM | Si |