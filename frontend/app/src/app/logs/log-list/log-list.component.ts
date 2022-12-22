import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogsService } from 'src/app/services/logs.service';
import { Log } from 'src/app/shared/models/log';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit, OnDestroy {

  currentLog = null;
  currentIndex = -1;
  name = '';
  logs: Log[] = [];
  isFetching = false;
  error: string | null = null;
  private errorSub!: Subscription; //'!' at end ignores that it is not initialized. Else ts motzes

  constructor(private logService: LogsService) { }

  ngOnInit(): void {
    this.errorSub = this.logService.error.subscribe( errorMessage => {
      this.error = errorMessage;
    });
    this.fetchLogs();
  }

  fetchLogs() {
    this.isFetching = true;
    this.logService.fetchLogsGet()
    .subscribe({ 
      next: (data => {
        console.log(data);
        this.logs = data;
        this.isFetching = false;
      }), 
      error: (error => {
        console.log(error)
        this.clearLogList()
      })
    });
  }

  refresh(): void {
    this.fetchLogs();
    this.currentLog = null;
    this.currentIndex = -1;
  }

  setCurrentLog(log: any, index: any): void {
    this.currentLog = log;
    this.currentIndex = index;
  }

  clearLogList() {
    this.currentLog = null;
    this.currentIndex = -1;
    this.name = '';
    this.logs = [];
    this.isFetching = false;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
