# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | El titulo y designa el nombre del elemento a agregar en lista | Si |
| style.color | color del titulo | Si |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | hacer click en el boton sumar 1 | 1 |
| dblclick | hacer doble click en el boton sumar 1 | 1 |
| mouseover | pasar el mouse sobre el boton sumar 1 | 1 |

Mostro la funcion y la linea de codigo con la que interactua click/dblclick/mouse ```<button id="btnSumar">Sumar 1</button>" ```

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | Aparece lo que escribes en tiempo real en el texto debajo que dice Hola... | No |
| Enviar sin preventDefault |Recargo la pagina al presionar el boton Enviar | Si|
| Enviar con preventDefault, correo sin @ |Mensaje de correo no valido: "falta @ en rojo" |No |
| Enviar con preventDefault, correo con @ |Aparece "enviado: correo" |No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |

Al usar la clase, cuando creas un objeto, solo tienes que darle los atributos y obtienes un nuevo elemento, ya no escribes el mismo codigo para señalar cuales son el precio y nombre.