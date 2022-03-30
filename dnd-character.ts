export class DnDCharacter {
  hitpoints: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

constructor(){
  this.charisma =  DnDCharacter.generateAbilityScore();
  this.strength =  DnDCharacter.generateAbilityScore();
  this.dexterity =  DnDCharacter.generateAbilityScore();
  this.wisdom =  DnDCharacter.generateAbilityScore();
  this.intelligence =  DnDCharacter.generateAbilityScore();
  this.constitution =  DnDCharacter.generateAbilityScore();
  this.hitpoints =  10 + DnDCharacter.getModifierFor(this.constitution);
}

public static generateAbilityScore(): number {
  var abilityScore: number = 0;
  var minDice: number = 6;
  for (let i = 0; i < 4; i++) {
    var dice: number = Math.floor(Math.random() * 6) + 1
    abilityScore += dice;
    if(dice<minDice){
      minDice=dice;
    }
  }
  return abilityScore-minDice;
}

public static getModifierFor(abilityValue: number): number {
  var modifier: number = Math.floor((abilityValue - 10)/2);
  return modifier;
}
}