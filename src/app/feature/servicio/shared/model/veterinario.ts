export class Veterinario {
    id: number;
    nombreVeterinario: string;
    cedulaVeterinario: string;

    constructor(id?: number, nombreVeterinario?: string, cedulaVeterinario?: string) {
        this.id = id;
        this.nombreVeterinario = nombreVeterinario;
        this.cedulaVeterinario = cedulaVeterinario;
    }
}
