import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CoindataService } from './coindata.service';

describe('CoindataService', () => {
  let service: CoindataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CoindataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
