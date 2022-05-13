import { by, element } from 'protractor';

export class NavbarPage {
    linkMascota = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkServicio = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));

    async clickBotonMascota() {
        await this.linkMascota.click();
    }

    async clickBotonServicio() {
        await this.linkServicio.click();
    }
}
