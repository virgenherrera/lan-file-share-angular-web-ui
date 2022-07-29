import { Component, OnInit } from '@angular/core';
import { FolderInfo } from '../../../api/models/folder-info.model';
import { SharedFolderService } from '../../../api/services/shared-folder.service';

@Component({
  selector: 'app-shared-folder',
  templateUrl: './shared-folder.component.html',
  styleUrls: ['./shared-folder.component.sass'],
})
export class SharedFolderComponent implements OnInit {
  private path = '';
  folderInfo: FolderInfo | null = null;

  constructor(public sharedFolderService: SharedFolderService) {}

  ngOnInit(): void {
    const folderInfo$ = this.sharedFolderService.getFolderInfo().subscribe({
      next: (value) => {
        this.folderInfo = value;
      },
      complete: () => {
        folderInfo$.unsubscribe();
      },
    });
  }
}
