import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Banner} from '../app.models';

@Injectable({providedIn: 'root'})
export class NotificationService {
  apiUrl: string = environment.apiUrl + 'api/common/';
  constructor(private http: HttpClient) {}

  getBanner(): Observable<Banner> {
    return this.http.get<Banner>(this.apiUrl + 'getBanner');
  }
}
