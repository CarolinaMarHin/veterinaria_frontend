import { by, element } from 'protractor';

export class NavbarPage {
    linkMascota = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));

    async clickBotonProductos() {
        await this.linkMascota.click();
    }
}
