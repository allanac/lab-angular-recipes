import { TestBed, inject } from '@angular/core/testing';

import { RecipiesApiService } from './recipies-api.service';

describe('RecipiesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipiesApiService]
    });
  });

  it('should be created', inject([RecipiesApiService], (service: RecipiesApiService) => {
    expect(service).toBeTruthy();
  }));
});
