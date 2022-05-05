export class Mascota {
    id: number;
    nombreMascota: string;
    codigoMascota: string;
    raza: string;
    fechaNacimientoMascota: Date;
    peso: number;

    constructor(id:number, nombreMascota: string, codigoMascota: string, raza: string, fechaNacimientoMascota: Date, peso: number) {
        this.id = id;
        this.nombreMascota = nombreMascota;
        this.codigoMascota = codigoMascota;
        this.raza = raza;
        this.fechaNacimientoMascota = fechaNacimientoMascota;
        this.peso = peso;
    }
}
