import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UploadFileDialogComponent } from './components/upload-file-dialog/upload-file-dialog.component';
import { UploadFilesDialogComponent } from './components/upload-files-dialog/upload-files-dialog.component';

@NgModule({
  declarations: [
    NavBarComponent,
    UploadFileDialogComponent,
    UploadFilesDialogComponent,
  ],
  imports: [MaterialModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
