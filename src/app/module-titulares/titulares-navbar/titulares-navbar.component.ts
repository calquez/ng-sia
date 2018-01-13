import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulares-navbar',
  templateUrl: './titulares-navbar.component.html',
  styleUrls: ['./titulares-navbar.component.css']
})
export class TitularesNavbarComponent implements OnInit {

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
