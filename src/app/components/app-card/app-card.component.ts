import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  @Input('name') name;
  @Input('logo') logo;
  @Input('page') page;

  constructor() { }

  ngOnInit() {
  }

}
