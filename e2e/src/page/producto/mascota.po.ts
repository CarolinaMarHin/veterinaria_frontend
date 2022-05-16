import { by, element } from 'protractor';

export class MascotaPage {
    private linkCrearMascota = element(by.id('crearMascota'));
    private inputNombre = element(by.id('nombre-mascota'));
    private inputCodigo = element(by.id('codigo-mascota'));
    private inputFecha = element(by.id('fecha-nacimiento'));
    private inputRaza = element(by.id('raza'));
    private inputPeso = element(by.id('peso'));
    private linkInputCrearMascota = element(by.id('crear-mascota'));

    async clickBotonCrearMascota() {
        await this.linkCrearMascota.click();
    }

    async ingresarCodigo(codigo) {
        await this.inputCodigo.sendKeys(codigo);
    }

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarPeso(peso) {
        await this.inputPeso.sendKeys(peso);
    }

    async ingresarRaza(raza) {
        await this.inputRaza.sendKeys(raza);
    }

    async ingresarFecha(fecha) {
        await this.inputFecha.sendKeys(fecha);
    }

    async clickInputCrearMascota() {
        await this.linkInputCrearMascota.click();
    }

}
