export class Mascota {
    id: number;
    nombreMascota: string;
    codigoMascota: string;
    raza: string;
    fechaNacimientoMascota: string;
    peso: number;

    constructor(nombreMascota?: string, codigoMascota?: string, raza?: string, fechaNacimientoMascota?: string, peso?: number) {
        if (nombreMascota) {
            this.nombreMascota = nombreMascota;
            this.codigoMascota = codigoMascota;
            this.raza = raza;
            this.fechaNacimientoMascota = fechaNacimientoMascota;
            this.peso = peso;
        }
    }
}
