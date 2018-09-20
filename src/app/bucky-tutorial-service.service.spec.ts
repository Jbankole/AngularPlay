import { TestBed } from '@angular/core/testing';

import { BuckyTutorialServiceService } from './bucky-tutorial-service.service';

describe('BuckyTutorialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuckyTutorialServiceService = TestBed.get(BuckyTutorialServiceService);
    expect(service).toBeTruthy();
  });
});
