export class Mascota {
    id: number;
    nombreMascota: string;
    codigoMascota: string;
    raza: string;
    fechaNacimientoMascota: string;
    peso: number;

    constructor(
        nombreMascota?: string, codigoMascota?: string, raza?: string, fechaNacimientoMascota?: string, peso?: number, id?: number
        ) {
        if (id) {
            this.id = id;
            this.nombreMascota = nombreMascota;
            this.codigoMascota = codigoMascota;
            this.raza = raza;
            this.fechaNacimientoMascota = fechaNacimientoMascota;
            this.peso = peso;
        } else if (nombreMascota) {
            this.nombreMascota = nombreMascota;
            this.codigoMascota = codigoMascota;
            this.raza = raza;
            this.fechaNacimientoMascota = fechaNacimientoMascota;
            this.peso = peso;
        }
    }
}
