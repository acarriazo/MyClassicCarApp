import { TestBed } from '@angular/core/testing';

import { ServiciodatosService } from './serviciodatos.service';

describe('ServiciodatosService', () => {
  let service: ServiciodatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciodatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
