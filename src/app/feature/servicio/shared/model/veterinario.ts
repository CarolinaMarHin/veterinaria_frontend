export class Veterinario {
    id: number;
    nombreVeterinario: string;
    cedulaVeterinario: string;

    constructor(id?: number, nombreVeterinario?: string, cedulaVeterinario?: string) {
        if (id) {
            this.id = id;
            this.nombreVeterinario = nombreVeterinario;
            this.cedulaVeterinario = cedulaVeterinario;
        }
    }
}
