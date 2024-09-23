## Trabajo Integrador: 
- **Entrega (Repositorio en github)**: La entrega se realiza a traves de mensajería de plataforma enviando el link al repositorio remoto donde se cargue el código. Se debe aclarar nombre y apellido en el mensaje. La entrega es para el Lunes 7/10.
### Primera consigna: Cambios Dinámicos en una Página Web

#### Instrucciones:

1. **Objetivo**:
   Crear una página web donde, al interactuar con botones, se cambie el contenido y el estilo de algunos **divs**. El HTML y el CSS ya están proporcionados. Tu tarea es agregar la lógica utilizando **TypeScript** y eventos de JavaScript.

2. **Requisitos**:
   - Utilizar **TypeScript** para escribir la lógica de la aplicación.
   - **Manipular el DOM** para cambiar el contenido de los divs y el estilo (p. ej., cambiar colores o texto).
   - Implementar **eventos básicos** en botones que, al hacer clic, modifiquen los elementos visualmente.
   - Utilizar **tipado** de variables y objetos en TypeScript.

3. **HTML recomendado**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trabajo Integrador</title>
  <!-- agregar en atributo src la ruta al archivo .css -->
  <link rel="stylesheet" href="">
</head>
<body>
  <div id="container">
    <div id="box1" class="box">Caja 1</div>
    <div id="box2" class="box">Caja 2</div>
    <div id="box3" class="box">Caja 3</div>
  </div>

  <button id="change-color-btn">Cambiar Color</button>
  <button id="change-text-btn">Cambiar Texto</button>
<!-- agregar en atributo src la ruta al archivo .js -->
  <script src=""></script>
</body>
</html>
```

4. **CSS recomendado**:

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 50px;
}

#container {
  display: flex;
  justify-content: space-around;
}

.box {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: black;
  margin: 10px;
}
```

5. **Tareas en TypeScript**:
   - Capturar el evento de clic de los botones.
   - Al hacer clic en **"Cambiar Color"**, modificar el color de fondo de los divs con la clase "box".
   - Al hacer clic en **"Cambiar Texto"**, modificar el texto dentro de los divs para mostrar un nuevo mensaje.
   - Utilizar **tipado adecuado** en las variables que seleccionan los divs y los botones.

6. **Sugerencia de código en TypeScript**:

```typescript
// Seleccionamos los elementos del DOM
// TIP: Usa 'getElementById' para seleccionar los botones y 'querySelectorAll' para seleccionar los divs
const changeColorBtn = document.getElementById('change-color-btn') as HTMLButtonElement;
const changeTextBtn = document.getElementById('change-text-btn') as HTMLButtonElement;
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

/**
 * Función para cambiar el color de las cajas.
 * TIP: Usa un bucle (for o forEach) para recorrer todas las cajas y cambiar su color.
 * Recuerda que puedes modificar el estilo de un elemento accediendo a su propiedad 'style'.
 */
function changeBoxColors(): void {
  // Completa aquí el código para cambiar el color de las cajas.
  // TIP: Puedes usar una condición (if-else) para verificar el color actual y cambiarlo.
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    // TIP: Verifica si el color es 'lightgray', si es así cámbialo a otro color (ej. 'lightblue')
    // Si no, cámbialo de nuevo a 'lightgray'.
  }
}

/**
 * Función para cambiar el texto de las cajas.
 * TIP: Al igual que en la función anterior, recorre todas las cajas y cambia el contenido de texto.
 */
function changeBoxText(): void {
  // Completa aquí el código para cambiar el texto de las cajas.
  // TIP: Usa 'textContent' para cambiar el texto dentro de cada caja.
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    // Aquí deberías cambiar el texto de cada caja a algo como 'Nuevo Texto' + el número de caja.
  }
}

// Asignar eventos a los botones
// TIP: Usa 'addEventListener' para asociar las funciones anteriores a los botones.
changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);
```

### Guía para los estudiantes:

1. **Seleccionar elementos del DOM**: Les he dejado el código para seleccionar los botones y las cajas (`divs`). Deben utilizar estos elementos en las funciones siguientes.

2. **Función `changeBoxColors`**: Esta función debe recorrer cada caja (`box`) y cambiar su color dependiendo de su estado actual (p. ej., si es gris, cambiarlo a azul y viceversa).

   - **Tip**: Usa un `if-else` para verificar el color actual. Accede a `box.style.backgroundColor` para modificarlo.

3. **Función `changeBoxText`**: Deben modificar el texto dentro de las cajas.

   - **Tip**: Usa `box.textContent` para cambiar el texto. Pueden poner algo como "Nuevo Texto" seguido del número de la caja, que pueden obtener con la variable `i` del bucle.

4. **Eventos**: Ya están creados los eventos de clic para los botones. Los estudiantes solo tienen que completar las funciones para ver cómo la página responde a los eventos.

---
#### Criterios de evaluación:

- **Correcto uso de TypeScript**: Tipado básico de variables y objetos.
- **Manipulación del DOM**: Cambiar el color de fondo y el texto de los divs.
- **Eventos**: Capturar eventos de clic y ejecutar acciones dinámicas.
- **Código limpio y organizado**.

---

### Segunda consigna: Sistema de Gestión de Vehículos

#### Instrucciones:

1. **Objetivo**:
   Crear un sistema básico de gestión de vehículos utilizando **POO en TypeScript**. Los estudiantes deben implementar una jerarquía de clases y aplicar conceptos de **herencia**, **polimorfismo**, **abstracción** a través de una **interfaz**, y **encapsulamiento**.

2. **Requisitos**:
   - Definir una interfaz `IVehiculo` que tenga un método `acelerar(velocidad: number): void`.
   - Implementar una clase base `Vehiculo` que contenga atributos protegidos, su constructor y métodos de acceso (getters y setters).
   - Crear las clases `Coche` y `Moto` que hereden de `Vehiculo` e implementen el método `acelerar`.
   - Utilizar **polimorfismo** en una función que reciba una lista de vehículos y llame a los métodos `acelerar` de cada uno.

3. **Especificaciones**:

- **Interfaz `IVehiculo`**:
  - Define el método `acelerar(velocidad: number): void`, que todas las clases que implementen la interfaz deben definir.

- **Clase `Vehiculo`**:
  - Atributos protegidos:
    - `marca: string`
    - `modelo: string`
    - `velocidadMaxima: number`
  - Métodos:
    - Implementación del método `acelerar` de la interfaz.
    - Método común `frenar()`, que simula la acción de frenar el vehículo.
    - Getters y setters para acceder y modificar `marca`, `modelo` y `velocidadMaxima`.

- **Clases `Coche` y `Moto`**:
  - Heredan de `Vehiculo`.
  - Cada clase debe implementar su versión del método `acelerar(velocidad: number)`.
  - `Coche` debe tener un atributo adicional `numeroPuertas`.
  - `Moto` debe tener un atributo adicional `tipoManillar`.

- **Polimorfismo**:
  - Crear una función en un archivo main.ts que reciba una lista de `Vehiculo[]` y llame a los métodos `acelerar` y `frenar` de cada uno.

---

### Criterios de Evaluación:

1. **Abstracción**: Uso correcto de la interfaz `IVehiculo`.
2. **Encapsulamiento**: Correcta implementación de atributos privados/protegidos y acceso a través de getters y setters.
3. **Herencia**: Clases `Coche` y `Moto` heredan correctamente de `Vehiculo`.
4. **Polimorfismo**: La función gestionadora debe funcionar con cualquier objeto que implemente `IVehiculo`.
5. **Código limpio y organizado**: Codigo modularizado, comentarios (si es necesario), nombres de variables y funciones claros, respetando camel case.
---
