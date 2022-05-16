import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ServicioPage } from '../page/producto/servicio.po';
import { by, element } from 'protractor';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let servicio: ServicioPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        servicio = new ServicioPage();
    });

    it('Deberia crear servicio', () => {
        const FECHA = '15-03-2021';

        page.navigateTo();
        navBar.clickBotonServicio();
        servicio.clickBotonCrearServicio();
        servicio.seleccionarServicio();
        servicio.seleccionarVeterinario();
        servicio.seleccionarMascota();
        servicio.ingresarFecha(FECHA);
        servicio.clickInputCrearServicio();

        const mensajeResultado = element(by.id('registro-exitoso'));
        expect(mensajeResultado.getText()).toBe("Registro exitoso.");
    });
});
