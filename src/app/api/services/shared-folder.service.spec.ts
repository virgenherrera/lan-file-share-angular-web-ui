import { TestBed } from '@angular/core/testing';

import { SharedFolderService } from './shared-folder.service';

describe('SharedFolderService', () => {
  let service: SharedFolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedFolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
