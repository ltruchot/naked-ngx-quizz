import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface IReqOptions {
  headers: HttpHeaders;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _defaultContentType: string = 'application/json';
  private _defaultApi: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  // request without body
  get<T>(url: string): Observable<T> {
    const options: IReqOptions = {
      headers: this._createHeaders(),
    };
    return this.http
      .get(this._defaultApi + url, options)
      .pipe(catchError(this._throwReactiveError)) as Observable<T>;
  }

  private _createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': this._defaultContentType,
    });
  }

  private _throwReactiveError(error: any): Observable<never> {
    console.error('api.service::throwReactiveError', error);
    return throwError(error);
  }
}
