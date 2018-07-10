import { Component } from '@angular/core';
import { Combatant } from './models/Combatant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  changeVersion(event){
    if(event.value === "Dark Heresy"){
      this.currentCombatant = this.heresyPlaceholder;
    }
    else if(event.value === "Fifth Edition") {
      this.currentCombatant = this.fifthPlaceholder;
    };
  };

  heresyPlaceholder: Combatant = new Combatant("Big Mek", [{'name': 'Wounds', 'value': 15},
    {'name': 'Movement', 'value': "5/10/15/20/25/30"}], "Does kaboom stuff.");

  fifthPlaceholder: Combatant = new Combatant("Dancer", [{'name': 'Hit Points', 'value': 26},
    {'name': 'Armor Class', 'value': 16}], "Does clawie stuff.");

  currentCombatant = this.heresyPlaceholder;

  versionChosen: string = "Dark Heresy";
  versions: string[] = ['Dark Heresy', 'Fifth Edition'];


  title = 'D&D Initiative Tracker';



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
