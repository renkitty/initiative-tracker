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


  spellslots = [
    {'name': '1', 'value': 4, 'expended': 0},
    {'name': '2', 'value': 3, 'expended': 0},
    {'name': '3', 'value': 3, 'expended': 0},
    {'name': '4', 'value': 3, 'expended': 0},
    {'name': '5', 'value': 3, 'expended': 0},
    {'name': '6', 'value': 2, 'expended': 0},
    {'name': '7', 'value': 2, 'expended': 0},
    {'name': '8', 'value': 1, 'expended': 0},
    {'name': '9', 'value': 1, 'expended': 0}

  ];
}
