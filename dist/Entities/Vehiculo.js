export class Vehiculo {
    constructor(marca, modelo, velocidadMaxima) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidadMaxima = velocidadMaxima;
    }
    /**
     * Getter marca
     * @return {string}
     */
    get marca() {
        return this._marca;
    }
    /**
     * Getter modelo
     * @return {string}
     */
    get modelo() {
        return this._modelo;
    }
    /**
     * Getter velocidadMaxima
     * @return {number}
     */
    get velocidadMaxima() {
        return this._velocidadMaxima;
    }
    /**
     * Setter marca
     * @param {string} value
     */
    set marca(value) {
        this._marca = value;
    }
    /**
     * Setter modelo
     * @param {string} value
     */
    set modelo(value) {
        this._modelo = value;
    }
    /**
     * Setter velocidadMaxima
     * @param {number} value
     */
    set velocidadMaxima(value) {
        this._velocidadMaxima = value;
    }
    acelerar(velocidad) { }
    //Metodo comun para todos los vehiculos hijos
    frenar() {
        console.log(`${this.marca} ${this.modelo} está frenando.`);
    }
}
