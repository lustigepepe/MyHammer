import { Component, OnInit, Input } from '@angular/core';

import { DataPromiseService } from './services/data.promis.service';
import { JsonClass } from './json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @Input() json: JsonClass;
  data: Array<Object> = [];
  constructor(private dataService: DataPromiseService) { }

  ngOnInit(): void {

    this.dataService.getJsonData().then(data => { console.log(data.body) });
    // console.log(this.jsonData);
  }
}
