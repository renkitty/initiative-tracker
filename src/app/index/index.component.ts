import { Component, OnInit } from '@angular/core';
import { Combatant} from "./Combatant";
import { CombatantService} from "../combatant.service";
import { AppComponent} from "../app.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  appComponent = new AppComponent;
  combatants: Combatant[];
  currentCombatant: Combatant;

  constructor(private combatantservice: CombatantService) { }

  ngOnInit() {

    this.combatantservice
      .getCombatant()
      .subscribe((data: Combatant[]) => {
        this.combatants = data;
      });
  }

  onSelect(combatant: Combatant): void {
    this.currentCombatant = combatant;
    this.appComponent.updateCurrent(this.currentCombatant);
  }
}
