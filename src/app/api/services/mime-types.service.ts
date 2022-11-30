import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, of, reduce, switchMap, tap } from 'rxjs';
import { UploadRoute } from '../enums/endpoint.enum';
import { MimeTypesResponse } from '../models/mime-types.model';

@Injectable({
  providedIn: 'root',
})
export class MimeTypesService {
  private endpoint = `/api/v1${UploadRoute.mimeTypes}`;
  private mimeTypesRes$ = new BehaviorSubject<MimeTypesResponse>(null);

  constructor(private http: HttpClient) {}

  get() {
    return of(this.mimeTypesRes$.value).pipe(
      switchMap((value) => (value ? of(value) : this.requestMimeTypes())),
    );
  }

  getAllowedTypes() {
    return this.get().pipe(
      switchMap((res) => from(Object.values(res).flat())),
      reduce((acc, curr) => (!acc ? curr : `${acc}, ${curr}`)),
    );
  }

  private requestMimeTypes() {
    return this.http
      .get<MimeTypesResponse>(this.endpoint)
      .pipe(tap((res) => this.mimeTypesRes$.next(res)));
  }
}
