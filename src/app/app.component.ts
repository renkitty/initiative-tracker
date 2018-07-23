import {Component, OnInit} from '@angular/core';
import { Combatant } from './index/Combatant';
import { CombatantService} from "./combatant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  currentCombatant: Combatant;
  name: String;

  constructor(){

  }


  /** Move this to radiobutton component */
  versionChosen: string = "Dark Heresy";
  versions: string[] = ['Dark Heresy', 'Fifth Edition'];

  /** Move to topbar component */
  title = 'D&D Initiative Tracker';


  /** When radiobuttons are used, event used to fetch the changed value */
/*  changeVersion(event){
    if(event.value === "Dark Heresy"){
      this.currentCombatant = this.heresyPlaceholder;
    }
    else if(event.value === "Fifth Edition") {
      this.currentCombatant = this.fifthPlaceholder;
    }
  };*/


  updateCurrent(combatant: Combatant)
  {
    this.currentCombatant = combatant;
    this.name = this.currentCombatant.name;
  }
}
