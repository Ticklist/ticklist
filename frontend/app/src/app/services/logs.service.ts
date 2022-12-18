import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Log } from '../shared/models/log';

const baseURL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private httpClient: HttpClient) {
   }

  readAll(): Observable<Log[]> {
    return this.httpClient.get<Log[]>(baseURL);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  // update(id, data): Observable<any> {
  //   return this.httpClient.put(`${baseURL}/${id}`, data);
  // }

  // delete(id): Observable<any> {
  //   return this.httpClient.delete(`${baseURL}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.httpClient.delete(baseURL);
  // }
}