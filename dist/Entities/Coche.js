import { Vehiculo } from "./Vehiculo.js";
export class Coche extends Vehiculo {
    constructor(marca, modelo, velMaxima, numeroPuertas) {
        // Llamamos al constructor de la clase padre y agregamos los atributos propios
        super(marca, modelo, velMaxima);
        this._numeroPuertas = numeroPuertas;
    }
    /**
     * Getter numeroPuertas
     * @return {number}
     */
    get numeroPuertas() {
        return this._numeroPuertas;
    }
    /**
     * Setter numeroPuertas
     * @param {number} value
     */
    set numeroPuertas(value) {
        this._numeroPuertas = value;
    }
    /**
     * Se aplica polirmofismo, redefiniendo el metodo de la interfaz.
     * Al definir como protected los atributos de la clase padre, se puede acceder desde la clase hija.
    **/
    acelerar(velocidad) {
        console.log(`Aceleración de la moto: ${this._marca} - ${this._modelo}`);
        if (velocidad >= this._velocidadMaxima)
            console.log(`El coche no pude acelerar a mas de su velocidad máxima de: ${this._velocidadMaxima}`);
        else
            console.log(`El coche está acelerando a ${velocidad} Km/h`);
    }
}
