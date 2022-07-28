import { Component, OnInit } from '@angular/core';
import { FolderInfo } from '../../../api/models/folder-info.model';
import { SharedFolderService } from '../../../api/services/shared-folder.service';
import { Endpoint } from '../../enums/endpoint.enum';

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

        // this.folderInfo.files = Array(7).fill(this.folderInfo.files[0]);

        this.folderInfo.files.forEach((file) =>
          this.getDownloadUrl(file.fileName),
        );
      },
      complete() {
        folderInfo$.unsubscribe();
      },
    });
  }

  getDownloadUrl(fileName: string) {
    const endpoint = pathJoin('/api/v1/', Endpoint.file, this.path, fileName);

    console.log({ endpoint });
  }
}

function pathJoin(...paths: string[]): string {
  const separator = '/';
  const replace = new RegExp(separator + '{1,}', 'g');

  return paths.join(separator).replace(replace, separator);
}
