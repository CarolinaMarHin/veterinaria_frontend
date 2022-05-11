export class Servicio {
    id: number;
    nombreServicio: string;
    precioServicio: number;

    constructor(id?: number, nombreServicio?: string, precioServicio?: number) {
        this.id = id;
        this.nombreServicio = nombreServicio;
        this.precioServicio = precioServicio;
    }
}
