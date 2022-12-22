import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogsService } from 'src/app/services/logs.service';
import { Log } from 'src/app/shared/models/log';

@Component({
  selector: 'app-log-create',
  templateUrl: './log-create.component.html',
  styleUrls: ['./log-create.component.scss']
})
export class LogCreateComponent implements OnInit, OnDestroy {
  log: Log = new Log('', '', '', '');
  submitted = false;
  error: null | string = null;
  private errorSub!: Subscription;

  constructor(private logService: LogsService) { }

  ngOnInit(): void {
    this.errorSub = this.logService.error.subscribe( errorMessage => {
      this.error = errorMessage;
    });
  }

  onSave() {
    // put values into log
    console.log(this.log);
    this.createLog();
  }

  createLog(): void {
    this.logService.createAndStorePost(this.log);
    // handle error of unsuccessfull post via errorSub in html -> ngif=
  }

  newLog(): void {
    this.submitted = false;
    this.log = {
      people: 'Mättu FE',
      comment: 'Super',
      summit: 'Mt Fuji',
      date: '12-12-2002'
    };
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
