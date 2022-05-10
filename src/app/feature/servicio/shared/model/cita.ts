export class Cita {
    id: number;
    codigoMascota: number;
    idVeterinario: number;
    codigoServicio: number;
    totalPago: number;
    fecha: string;

    constructor(id?: number, codigoMascota?: number, idVeterinario?: number, codigoServicio?: number, totalPago?: number, fecha?: string) {
        if (id) {
            this.id = id;
            this.codigoMascota = codigoMascota;
            this.idVeterinario = idVeterinario;
            this.codigoServicio = codigoServicio;
            this.totalPago = totalPago;
            this.fecha = fecha;
        }
    }
}