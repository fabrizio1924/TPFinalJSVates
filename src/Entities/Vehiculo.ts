import { IVehiculo } from "../Interfaces/IVehiculo";

export abstract class Vehiculo implements IVehiculo
{
    protected _marca: string;
    protected _modelo: string;
    protected _velocidadMaxima: number;

	constructor(marca: string, modelo: string, velocidadMaxima: number) {
		this._marca = marca;
		this._modelo = modelo;
		this._velocidadMaxima = velocidadMaxima;
	}	
	
    /**
     * Getter marca
     * @return {string}
     */
	public get marca(): string {
		return this._marca;
	}

    /**
     * Getter modelo
     * @return {string}
     */
	public get modelo(): string {
		return this._modelo;
	}

    /**
     * Getter velocidadMaxima
     * @return {number}
     */
	public get velocidadMaxima(): number {
		return this._velocidadMaxima;
	}

    /**
     * Setter marca
     * @param {string} value
     */
	public set marca(value: string) {
		this._marca = value;
	}

    /**
     * Setter modelo
     * @param {string} value
     */
	public set modelo(value: string) {
		this._modelo = value;
	}

    /**
     * Setter velocidadMaxima
     * @param {number} value
     */
	public set velocidadMaxima(value: number) {
		this._velocidadMaxima = value;
	}

	acelerar(velocidad: number): void { }

	//Metodo comun para todos los vehiculos hijos
	frenar(): void
	{
		console.log(`${this.marca} ${this.modelo} está frenando.`);
	}
}