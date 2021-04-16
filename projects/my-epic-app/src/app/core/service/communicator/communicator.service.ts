import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, switchMap, map } from 'rxjs/operators';
import { environment } from 'projects/my-epic-app/src/environments/environment';
import { config } from '../../../config/global';
@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  constructor(private http: HttpClient) { }

  request(uri: string, method: string, payload?: any): Observable<any> {
    const options: any = {
      observe: 'response',
      body: payload
    };


    const url = `${environment.server}${config.api.endpoint}${uri}/`;
    return this.http.request(method, url, options)
      .pipe(map((result: any, index: number): Observable<any> => {
        return result;
      }),
        catchError((res: any, caughht: Observable<any>): Observable<any> => {
          console.log("the val", res);
          return of(false);

        })
      )

  }

  get(uri: string): Observable<any> {
    return this.request(uri, 'get');
  }

  post(uri: string, payload?: any): Observable<any> {
    return this.request(uri, 'post', payload);
  }

  put(uri: string, payload?: any): Observable<any> {
    return this.request(uri, 'put', payload);
  }

  delete(uri: string, payload?: any): Observable<any> {
    return this.request(uri, 'delete', payload);
  }
}
