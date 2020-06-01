import { TestBed } from '@angular/core/testing';

import { TutorialService } from './tutorial.service';

describe('TutorialService', () => {
  let service: TutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
