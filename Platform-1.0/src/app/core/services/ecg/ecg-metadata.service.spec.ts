import { TestBed } from '@angular/core/testing';

import { EcgMetadataService } from './ecg-metadata.service';

describe('EcgMetadataService', () => {
  let service: EcgMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcgMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
