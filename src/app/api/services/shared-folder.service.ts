import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Endpoint } from '../../core/enums/endpoint.enum';
import { FolderInfo } from '../models/folder-info.model';

@Injectable({
  providedIn: 'root',
})
export class SharedFolderService {
  private endpoint = `/api/v1/${Endpoint.sharedFolder}`;
  readonly FolderInfoSubject = new BehaviorSubject<FolderInfo>(null);

  constructor(private http: HttpClient) {}

  getFolderInfo(path = ''): Observable<FolderInfo> {
    this.FolderInfoSubject.next(null);

    const url = `${this.endpoint}${path}`;

    return this.http.get(url).pipe(
      map((res: any) => new FolderInfo(res)),
      tap((info) => this.FolderInfoSubject.next(info)),
      map(() => this.FolderInfoSubject.value),
    );
  }
}
