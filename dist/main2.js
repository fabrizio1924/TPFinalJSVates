import { Coche } from "./Entities/Coche.js";
import { Moto } from "./Entities/Moto.js";
let lista_vehiculos = [
    new Coche("Ford", "Mustang", 200, 5),
    new Moto("Yamaha", "YBR", 150, "Simple"),
    new Coche("Nissan", "GTR", 150, 3),
    new Moto("Kawasaki", "Ninja", 80, "Simple"),
    new Coche("Volkswagen", "Golf", 120, 5),
    new Moto("Honda", "CBR", 120, "Doble"),
    new Coche("Renault", "Clio", 100, 3),
    new Moto("Suzuki", "GSX", 100, "Simple")
];
function manejarVehiculos(vehiculos) {
    for (const vehiculo of vehiculos) {
        console.log("---------------------------------------------------------------");
        vehiculo.acelerar(110);
        vehiculo.frenar();
    }
}
manejarVehiculos(lista_vehiculos);
