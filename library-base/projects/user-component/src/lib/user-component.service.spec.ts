import { TestBed } from '@angular/core/testing';

import { UserComponentService } from './user-component.service';

describe('UserComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserComponentService = TestBed.get(UserComponentService);
    expect(service).toBeTruthy();
  });
});
