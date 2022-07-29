import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endpoint } from '../../core/enums/endpoint.enum';
import { FolderInfo } from '../models/folder-info.model';

@Injectable({
  providedIn: 'root',
})
export class SharedFolderService {
  private endpoint = `/api/v1/${Endpoint.sharedFolder}`;

  constructor(private http: HttpClient) {}

  getFolderInfo(path = ''): Observable<FolderInfo> {
    const url = `${this.endpoint}${path}`;

    return this.http.get(url).pipe(map((res: any) => new FolderInfo(res)));
  }
}
