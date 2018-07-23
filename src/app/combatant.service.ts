import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Combatant } from './index/Combatant';

@Injectable({
  providedIn: 'root'
})
export class CombatantService {

  uri = 'http://localhost:4000/combatant';

  constructor(private http: HttpClient) { }

  addCombatant(name, description, attributes, initiative) {
    const obj = {
      name: name,
      description: description,
      attributes: attributes,
      initiative: initiative
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }


  getCombatant() {
    return this.http.get(`${this.uri}/`);
  }

}
