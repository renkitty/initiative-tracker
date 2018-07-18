import { Component, OnInit } from '@angular/core';
import { Combatant} from "./Combatant";
import { CombatantService} from "../combatant.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  combatants: Combatant[];

  constructor(private combatantservice: CombatantService) { }

  ngOnInit() {

    this.combatantservice
      .getCombatant()
      .subscribe((data: Combatant[]) => {
        this.combatants = data;
      });
  }

}
