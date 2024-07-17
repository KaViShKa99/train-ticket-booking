import { TestBed } from '@angular/core/testing';

import { TrainService } from './train.service';

describe('StationsService', () => {
  let train: TrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    train = TestBed.inject(TrainService);
  });

  it('should be created', () => {
    expect(train).toBeTruthy();
  });
});
