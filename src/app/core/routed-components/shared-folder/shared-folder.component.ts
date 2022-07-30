import { Component, OnInit } from '@angular/core';
import { FolderInfo } from '../../../api/models/folder-info.model';
import { SharedFolderService } from '../../../api/services/shared-folder.service';
import { PathService } from '../../services/path.service';

@Component({
  selector: 'app-shared-folder',
  templateUrl: './shared-folder.component.html',
  styleUrls: ['./shared-folder.component.sass'],
})
export class SharedFolderComponent implements OnInit {
  folderInfo: FolderInfo | null = null;

  constructor(
    private pathService: PathService,
    private sharedFolderService: SharedFolderService,
  ) {}

  ngOnInit(): void {
    this.pathSubscribe();
  }

  private pathSubscribe() {
    const path$ = this.pathService.pathSubject.subscribe({
      next: (path) => this.getFolderInfo(path),
      complete: () => {
        path$.unsubscribe();
      },
    });
  }

  setPath(path: string) {
    this.pathService.path = path;
  }

  private getFolderInfo(path: string) {
    const folderInfo$ = this.sharedFolderService.getFolderInfo(path).subscribe({
      next: (value) => {
        this.folderInfo = value;
      },
      complete: () => {
        folderInfo$.unsubscribe();
      },
    });
  }
}
