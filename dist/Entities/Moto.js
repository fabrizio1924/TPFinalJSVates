import { Vehiculo } from "./Vehiculo.js";
export class Moto extends Vehiculo {
    constructor(marca, modelo, velMaxima, tipoManillar) {
        super(marca, modelo, velMaxima);
        this._tipoManillar = tipoManillar;
    }
    /**
     * Getter tipoManillar
     * @return {String}
     */
    get tipoManillar() {
        return this._tipoManillar;
    }
    /**
     * Setter tipoManillar
     * @param {String} value
     */
    set tipoManillar(value) {
        this._tipoManillar = value;
    }
    /**
     * Se aplica polirmofismo, redefiniendo el metodo de la interfaz.
     * En este caso utilizo los getters de la clase base.
     **/
    acelerar(velocidad) {
        console.log(`Aceleración de la moto: ${this.marca} - ${this.modelo}`);
        if (velocidad >= this.velocidadMaxima)
            console.log(`La moto no pude acelerar a mas de su velocidad máxima de: ${this.velocidadMaxima}`);
        else
            console.log(`La moto está acelerando a ${velocidad} Km/h`);
    }
}
