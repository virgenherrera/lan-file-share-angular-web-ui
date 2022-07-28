import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedFolderComponent } from './components/shared-folder/shared-folder.component';
import { UploadFileDialogComponent } from './components/upload-file-dialog/upload-file-dialog.component';
import { UploadFilesDialogComponent } from './components/upload-files-dialog/upload-files-dialog.component';

@NgModule({
  declarations: [
    NavBarComponent,
    UploadFileDialogComponent,
    UploadFilesDialogComponent,
    SharedFolderComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [NavBarComponent, SharedFolderComponent],
})
export class CoreModule {}
