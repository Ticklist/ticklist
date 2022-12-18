import { Component, OnInit } from '@angular/core';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-log-create',
  templateUrl: './log-create.component.html',
  styleUrls: ['./log-create.component.scss']
})
export class LogCreateComponent implements OnInit {
  log = {
    people: '',
    comment: '',
    summit: '',
    date: '',
    tags: new Array()
  };
  submitted = false;

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
  }

  createLog(): void {
    const data = {
      people: this.log.people,
      comment: this.log.comment,
      summit: this.log.summit,
      date: this.log.date,
      tags: this.log.tags
    };

    this.logsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newLog(): void {
    this.submitted = false;
    this.log = {
      people: 'Mättu FE',
      comment: 'Super',
      summit: 'Mt Fuji',
      date: '12-12-2002',
      tags: new Array("Skitour","Beginner")
    };
  }

}
