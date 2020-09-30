import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {Banner} from '../app.models';

@Injectable({providedIn: 'root'})
export class NotificationService {
  apiUrl: string = environment.apiUrl + 'api/common/';
  loadingError$ = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getBanner(): Observable<Banner> {
    return this.http.get<Banner>(this.apiUrl + 'getBanner')
        .pipe(catchError(error => {
          console.error(
              `${this.apiUrl + 'getBanner'} request failed: ${error.message}`);
          this.loadingError$.next(true);
          return of() as Observable<Banner>;
        }));
  }
}
