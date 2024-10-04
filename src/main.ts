// Seleccionamos los elementos del DOM
// TIP: Usa 'getElementById' para seleccionar los botones y 'querySelectorAll' para seleccionar los divs
const changeColorBtn = document.getElementById('change-color-btn') as HTMLButtonElement;
const changeTextBtn = document.getElementById('change-text-btn') as HTMLButtonElement;
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;
let textIsDefault:boolean = true;

console.log(boxes[0].style.backgroundColor)
/**
 * Función para cambiar el color de las cajas.
 * TIP: Usa un bucle (for o forEach) para recorrer todas las cajas y cambiar su color.
 * Recuerda que puedes modificar el estilo de un elemento accediendo a su propiedad 'style'.
 */
function changeBoxColors(): void {
  // Completa aquí el código para cambiar el color de las cajas.
  // TIP: Puedes usar una condición (if-else) para verificar el color actual y cambiarlo.
  // TIP: Verifica si el color es 'lightgray', si es así cámbialo a otro color (ej. 'lightblue')
  // Si no, cámbialo de nuevo a 'lightgray'.

  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const colorActual = getComputedStyle(box).backgroundColor;
    if (colorActual === 'rgb(211, 211, 211)') 
    {
      box.style.backgroundColor = 'lightblue';      
    } 
    else
    {
      box.style.backgroundColor = 'lightgray';
    }   
  }
}

/**
 * Función para cambiar el texto de las cajas.
 * TIP: Al igual que en la función anterior, recorre todas las cajas y cambia el contenido de texto.
 */
function changeBoxText(): void {
  // Completa aquí el código para cambiar el texto de las cajas.
  // TIP: Usa 'textContent' para cambiar el texto dentro de cada caja.

  for (let i = 0; i < boxes.length; i++) 
  {
    const box = boxes[i];
    if(textIsDefault)
    {    
      box.textContent = `Nuevo Texto ${i+1}`;               
    }
    else
    {
      box.textContent = `Caja ${i+1}`;             
    } 

    //Si esta en la ultima caja, cambia el valor de la bandera
    if(i == boxes.length -1)
    {
      textIsDefault = !textIsDefault;      
    }
  }   
}

// Asignar eventos a los botones
// TIP: Usa 'addEventListener' para asociar las funciones anteriores a los botones.
changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);