import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { MimeTypesService } from '../../../api/services/mime-types.service';
import { UploadService } from '../../../api/services/upload.service';
import { PathService } from '../../services/path.service';

@Component({
  selector: 'app-upload-file-dialog',
  templateUrl: './upload-file-dialog.component.html',
  styleUrls: ['./upload-file-dialog.component.sass'],
})
export class UploadFileDialogComponent implements OnInit {
  accept: string | null = null;
  file: File = null;
  fileError: string = null;
  uploading = false;

  constructor(
    private dialogRef: MatDialogRef<UploadFileDialogComponent>,
    private matSnackBar: MatSnackBar,
    private mimeTypesService: MimeTypesService,
    private pathService: PathService,
    private uploadService: UploadService,
  ) {}

  ngOnInit(): void {
    this.mimeTypesService.get().subscribe((accept) => (this.accept = accept));
  }

  inputFileChanged($event: any) {
    const file = $event.target?.files[0] as File;

    this.fileError = null;
    this.file = file || null;
  }

  uploadFile() {
    this.uploading = true;

    const { path } = this.pathService.pathSubject.value;

    return this.uploadService
      .file(this.file, path)
      .pipe(tap((message) => this.matSnackBar.open(message)))
      .subscribe({
        next: (data) => this.dialogRef.close(data),
        error: this.uploadFileError.bind(this),
      });
  }

  private uploadFileError(errorDetails: string[]) {
    const [error] = errorDetails;

    this.file = null;
    this.fileError = error;
    this.uploading = false;
  }
}
