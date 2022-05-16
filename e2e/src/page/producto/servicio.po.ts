import { by, element } from 'protractor';

export class ServicioPage {
    private linkCrearServicio = element(by.id('crearServicio'));
    private selectServicio = element(by.cssContainingText('option', 'Servicio banio'));
    private selectVeterinario = element(by.cssContainingText('option', 'Veterinario 1'));
    private selectMascota = element(by.cssContainingText('option', 'Guardian'));
    private inputFecha = element(by.id('fecha-compra'));
    private linkInputCrearServicio = element(by.id('crear-servicio'));

    async clickBotonCrearServicio() {
        await this.linkCrearServicio.click();
    }

    async seleccionarServicio() {
        await this.selectServicio.click();
    }

    async seleccionarVeterinario() {
        await this.selectVeterinario.click();
    }

    async seleccionarMascota() {
        await this.selectMascota.click();
    }

    async ingresarFecha(fecha) {
        await this.inputFecha.sendKeys(fecha);
    }

    async clickInputCrearServicio() {
        await this.linkInputCrearServicio.click();
    }

}
