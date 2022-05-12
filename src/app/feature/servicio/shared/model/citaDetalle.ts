export class CitaDetalle {
    id: number;
    nombreMascota: string;
    nombreVeterinario: string;
    nombreServicio: string;
    totalPago: number;
    fecha: string;

    constructor(id?: number, nombreMascota?: string, nombreVeterinario?: string,
                nombreServicio?: string, totalPago?: number, fecha?: string) {
            this.id = id;
            this.nombreMascota = nombreMascota;
            this.nombreVeterinario = nombreVeterinario;
            this.nombreServicio = nombreServicio;
            this.totalPago = totalPago;
            this.fecha = fecha;
    }
}
