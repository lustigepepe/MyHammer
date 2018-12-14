import { Component, OnInit, Input } from '@angular/core';

import { DataPromiseService } from './services/data.promis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Array<Object> = [];
  title: string = null;
  description: string = null;
  end_date: string = null;
  created_at: string = null;

  constructor(private dataService: DataPromiseService) { }
  ngOnInit(): void {
    this.dataService.getJsonData()
      .then(data => { this.data = data.body, console.log(data.body) });
  }
  selectJob(data) {
    this.title = data.title;
    this.description = "description: " + data.description
    this.end_date = data.end_date;
    this.created_at = data.created_at;
    console.log(data.id);
    // console.log(event.currentTarget);
  }
}
