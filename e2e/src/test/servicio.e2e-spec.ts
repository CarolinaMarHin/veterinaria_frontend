import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ServicioPage } from '../page/producto/servicio.po';

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
        const FECHA = '2021-03-12';
        const PRECIO = '55200';

        page.navigateTo();
        navBar.clickBotonServicio();
        servicio.clickBotonCrearServicio();
        servicio.seleccionarServicio();
        servicio.seleccionarVeterinario();
        servicio.seleccionarMascota();
        servicio.ingresarPrecio(PRECIO);
        servicio.ingresarFecha(FECHA);
    });

    it('Deberia crear la mascota', () => {
        page.navigateTo();
        navBar.clickBotonServicio();
        servicio.clickBotonCrearServicio();

        expect(1).toBe(servicio.clickInputCrearServicio());
    });
});
