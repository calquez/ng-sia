import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-newsletters-navbar',
  templateUrl: './newsletters-navbar.component.html',
  styleUrls: ['./newsletters-navbar.component.css']
})
export class NewslettersNavbarComponent implements OnInit {

  date: Date;

  constructor() {}

  ngOnInit() {

    this.date = new Date();
  }

  getChangedValue(event: Date, obj) {

    console.log(event, obj)
    this.date = event;
  }

}
