import { Component, OnInit, Input } from '@angular/core';

import { DataPromiseService } from './services/data.promis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Array<Object> = [];
  constructor(private dataService: DataPromiseService) { }

  ngOnInit(): void {

    this.dataService.getJsonData()
    .then(data => { this.data = data.body, console.log(data.body) })
  }
}
