import { Component, OnInit } from '@angular/core';
import { Job, JsonClass } from './json.data';
import { DataPromiseService } from './services/data.promis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  job: Job[] = [];
  title: string = null;
  description: string = null;
  end_date: string = null;
  created_at: string = null;

  constructor(private dataService: DataPromiseService) { }
  ngOnInit(): void {
    this.dataService.getJsonData()
      .then(data => { this.job = data.body, console.log(data.body) });
  }

  selectJob(job) {
    this.title = job.title;
    this.description = "description: " + job.description
    this.end_date = job.end_date;
    this.created_at = job.created_at;
  }
}
