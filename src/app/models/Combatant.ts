export class Combatant{

  name: String;
  attributes: [{}];
  description: String;
  hasSpellSlots: boolean;


  constructor(name: String, attributes, description: String, hasSpellSlots = false){
    this.name = name;
    this.attributes = attributes;
    this.description = description;
    this.hasSpellSlots = hasSpellSlots;
  }
}
