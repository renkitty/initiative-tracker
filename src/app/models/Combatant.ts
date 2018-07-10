export class Combatant {

  name: String;
  attributes: [{}];
  description: String;
  hasSpellSlots: Boolean;
  casterLevel: number
  spellslots;


  constructor(name: String, attributes?, description?: String, hasSpellSlots = false, casterLevel?: number) {
    this.name = name;
    this.attributes = attributes;
    this.description = description;
    this.hasSpellSlots = hasSpellSlots;
    this.casterLevel = casterLevel;
    this.calculateSpellSlots(casterLevel);
  }

  calculateSpellSlots(casterLevel: number){
    this.spellslots = [
      {'name': 1, 'value': 4, 'expended': 0},
      {'name': 2, 'value': 3, 'expended': 0},
      {'name': 3, 'value': 3, 'expended': 0},
      {'name': 4, 'value': 3, 'expended': 0},
      {'name': 5, 'value': 3, 'expended': 0},
      {'name': 6, 'value': 2, 'expended': 0},
      {'name': 7, 'value': 2, 'expended': 0},
      {'name': 8, 'value': 1, 'expended': 0},
      {'name': 9, 'value': 1, 'expended': 0}
    ];
  }
}


