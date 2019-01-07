import { TestBed } from '@angular/core/testing';

import { BigdataService } from './bigdata.service';

describe('BigdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigdataService = TestBed.get(BigdataService);
    expect(service).toBeTruthy();
  });
});
