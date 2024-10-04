import { Vehiculo } from "./Vehiculo.js";

export class Coche extends Vehiculo
{
    private _numeroPuertas: number;

    constructor(marca: string, modelo: string, velMaxima: number, numeroPuertas: number)
    {
        // Llamamos al constructor de la clase padre y agregamos los atributos propios
        super(marca, modelo, velMaxima);
        this._numeroPuertas = numeroPuertas;
    }   

    /**
     * Getter numeroPuertas
     * @return {number}
     */
	public get numeroPuertas(): number {
		return this._numeroPuertas;
	}

    /**
     * Setter numeroPuertas
     * @param {number} value
     */
	public set numeroPuertas(value: number) {
		this._numeroPuertas = value;
	}

    /**
     * Se aplica polirmofismo, redefiniendo el metodo de la interfaz.
     * Al definir como protected los atributos de la clase padre, se puede acceder desde la clase hija.
    **/
    acelerar(velocidad: number): void 
    {
        console.log(`Aceleración de la moto: ${this._marca} - ${this._modelo}`);
        if(velocidad >= this._velocidadMaxima)
            console.log(`El coche no pude acelerar a mas de su velocidad máxima de: ${this._velocidadMaxima}`);
        else
            console.log(`El coche está acelerando a ${velocidad} Km/h`);
    }    
}