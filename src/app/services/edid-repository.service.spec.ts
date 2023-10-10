import { TestBed } from '@angular/core/testing';

import { EdidRepositoryService } from './edid-repository.service';

describe('EdidRepositoryService', () => {
  let service: EdidRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdidRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
