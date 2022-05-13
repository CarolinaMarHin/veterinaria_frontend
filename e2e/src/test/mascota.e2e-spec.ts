import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { MascotaPage } from '../page/producto/mascota.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let mascota: MascotaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        mascota = new MascotaPage();
    });

    it('Deberia crear mascota', () => {
        const NOMBRE_MASCOTA = 'Canela';
        const CODIGO_MASCOTA = '0002';
        const PESO_MASCOTA = 23;
        const FECHA_NACIMIENTO_MASCOTA = '2021-03-12';
        const RAZA_MASCOTA = 'Husky';

        page.navigateTo();
        navBar.clickBotonMascota();
        mascota.clickBotonCrearMascota();
        mascota.ingresarNombre(NOMBRE_MASCOTA);
        mascota.ingresarCodigo(CODIGO_MASCOTA);
        mascota.ingresarPeso(PESO_MASCOTA);
        mascota.ingresarRaza(RAZA_MASCOTA);
        mascota.ingresarFecha(FECHA_NACIMIENTO_MASCOTA);
    });

    it('Deberia crear la mascota', () => {
        page.navigateTo();
        navBar.clickBotonMascota();
        mascota.clickBotonCrearMascota();

        expect(1).toBe(mascota.clickInputCrearMascota());
    });
});
