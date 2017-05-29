import { TestBed, inject } from '@angular/core/testing';

import { HolopService } from './holop.service';

describe('HolopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolopService]
    });
  });

  it('should be created', inject([HolopService], (service: HolopService) => {
    expect(service).toBeTruthy();
  }));
});
