import { TestBed } from '@angular/core/testing';

import { MimeTypesService } from './mime-types.service';

describe('MimeTypesService', () => {
  let service: MimeTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MimeTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
