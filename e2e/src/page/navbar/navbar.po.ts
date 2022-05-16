import { by, element } from 'protractor';

export class NavbarPage {
    linkMascota = element(by.xpath('/html/body/app-root/app-navbar/nav/ul/li[1]/a'));
    linkServicio = element(by.xpath('/html/body/app-root/app-navbar/nav/ul/li[2]/a'));

    async clickBotonMascota() {
        await this.linkMascota.click();
    }

    async clickBotonServicio() {
        await this.linkServicio.click();
    }
}
