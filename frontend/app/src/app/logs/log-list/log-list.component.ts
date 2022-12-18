import { Component, OnInit } from '@angular/core';
import { LogsService } from 'src/app/services/logs.service';
import { Log } from 'src/app/shared/models/log';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

  currentLog = null;
  currentIndex = -1;
  name = '';
  logs: Log[] = [];

  constructor(
      private logService: LogsService
    ) { }

  ngOnInit(): void {
    this.readLogs();
  }

  readLogs(): void {
    this.logService.readAll()
    .subscribe(
      data => {
        //this.logs = data;
        console.log("Hello world");
        console.log(data);
      },
      error => {
        console.log(error);
      });    
  }

  refresh(): void {
    this.readLogs();
    this.currentLog = null;
    this.currentIndex = -1;
  }

  setCurrentLog(log: any, index: any): void {
    this.currentLog = log;
    this.currentIndex = index;
  }

}
