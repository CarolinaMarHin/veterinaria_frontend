
describe('ServicioService', () => {

  /* beforeEach(() => {
    
  let httpMock: HttpTestingController;
  let service: ServicioService;
  const apiEndpointServicioConsulta = `${environment.endpoint_veterinaria}/servicio`;
  const apiEndpointServicios = `${environment.endpoint_veterinaria}/servicio`;
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    const productService: ServicioService = TestBed.inject(ServicioService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar servicios', () => {
    const dummyServicios = [
      new Servicio(1, 'Servicio 1', 10000), new Servicio(2, 'Servicio 2', 23500)
    ];
    service.consultar(dummyServicios[0]).subscribe(servicios => {
      expect(servicios.length).toBe(2);
      expect(servicios).toEqual(dummyServicios);
    });
    const req = httpMock.expectOne(apiEndpointServicioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyServicios);
  });

  it('deberia crear un servicio', () => {
    const dummyServicio = new Servicio(1, 'Servicio 1', 10000);
    service.guardar(dummyServicio).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointServicios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un servicio', () => {
    const dummyServicio = new Servicio(1, 'Servicio 1', 10000);
    service.eliminar(dummyServicio).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointServicios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  }); */
});
