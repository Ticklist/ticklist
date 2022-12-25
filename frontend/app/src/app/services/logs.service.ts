import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';
import { Log } from '../shared/models/log';



const serverUrl = 'http://localhost:8080/api';

@Injectable({providedIn: 'root'})
export class LogsService {

  error = new Subject<string>();

  constructor(
    private http: HttpClient,
    ) {}

  createAndStorePost(data: Log) {
    this.http.post<{id: string}>(
        serverUrl,
        data
    ).subscribe( responseData => {
        console.log(responseData)
    },
    error => {
      this.error.next('Data failed to create or store with error: ' + error.message);
    });
  }

  fetchLogsGet() {
      return this.http.get<Log[]>(
          serverUrl
      ).pipe(
          map( responseData => {
              const getArray: Log[] = [];
              for(const item in responseData) {
                  getArray.push({...responseData[item]});
              }
              return getArray;
          })
      )
  }
}