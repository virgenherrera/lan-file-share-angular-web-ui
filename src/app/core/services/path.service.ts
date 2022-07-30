import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  readonly pathSubject = new BehaviorSubject('');

  set path(value: string) {
    this.pathSubject.next(value);
  }

  get path(): string {
    return this.pathSubject.value;
  }
}
