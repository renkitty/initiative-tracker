import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D&D Initiative Tracker';
  attributes = [
    {'name': 'Wounds', 'value': 15},
    {'name': 'Movement', 'value': '5/10/15/30'}
  ];
}
