import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Endpoint } from '../../core/enums/endpoint.enum';

@Injectable({
  providedIn: 'root',
})
export class MimeTypesService {
  private endpoint = `/api/v1/${Endpoint.mimeTypes}`;

  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get(this.endpoint)
      .pipe(map((res: any) => res.data as string[]))
      .pipe(map((mimeTypes) => mimeTypes.join(', ')));
  }
}
