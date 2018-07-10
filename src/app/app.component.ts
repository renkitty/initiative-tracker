import { Component } from '@angular/core';
import { Combatant } from './models/Combatant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  /** Move this to radiobutton component */
  versionChosen: string = "Dark Heresy";
  versions: string[] = ['Dark Heresy', 'Fifth Edition'];

  /** Move to topbar component */
  title = 'D&D Initiative Tracker';

  /** Temporary placeholders for testing */

  heresyPlaceholder: Combatant = new Combatant("Big Mek", [{'name': 'Wounds', 'value': 15},
    {'name': 'Movement', 'value': "5/10/15/20/25/30"}], "Does kaboom stuff.");
  fifthPlaceholder: Combatant = new Combatant("Anathema", [{'name': 'Hit Points', 'value': 143},
    {'name': 'Armor Class', 'value': 19}], "Does nommie stuff.", true, 15);

  currentCombatant = this.heresyPlaceholder;



  /** When radiobuttons are used, event used to fetch the changed value */
  changeVersion(event){
    if(event.value === "Dark Heresy"){
      this.currentCombatant = this.heresyPlaceholder;
    }
    else if(event.value === "Fifth Edition") {
      this.currentCombatant = this.fifthPlaceholder;
    }
  };


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
