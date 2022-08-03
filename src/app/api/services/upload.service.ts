import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Endpoint } from '../../core/enums/endpoint.enum';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private endpoint = `/api/v1/${Endpoint.file}`;

  constructor(private http: HttpClient) {}

  file(file: File, path = '') {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('path', path);

    return this.http
      .post(this.endpoint, formData)
      .pipe(map((res: any) => res.data as string));
  }
}
