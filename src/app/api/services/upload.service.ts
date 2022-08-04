import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Endpoint } from '../../core/enums/endpoint.enum';
import { FilesResponse } from '../models/files-response.model';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private readonly apiUrl = '/api/v1/';

  constructor(private http: HttpClient) {}

  file(file: File, path = '') {
    const url = `${this.apiUrl}${Endpoint.file}`;
    const formData = new FormData();

    formData.append('file', file);
    formData.append('path', path);

    return this.http
      .post(url, formData)
      .pipe(map((res: any) => res.data as string));
  }

  files(files: File[], path = '') {
    const url = `${this.apiUrl}${Endpoint.files}`;
    const formData = new FormData();

    files.forEach((file) => formData.append('file[]', file));

    formData.append('path', path);

    return this.http
      .post(url, formData)
      .pipe(map((res) => new FilesResponse(res)));
  }
}
