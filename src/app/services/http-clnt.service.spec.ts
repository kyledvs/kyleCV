import { TestBed } from '@angular/core/testing';

import { HttpClntService } from './http-clnt.service';

describe('HttpClntService', () => {
  let service: HttpClntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
