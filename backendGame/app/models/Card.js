class Card {
    constructor({id,attack, defense, energy, life,userId}) {
        this.id = id;
        this.attack = attack;
        this.defense=defense;
        this.energy=energy;
        this.life=life;
        this.userId=userId
    }
}
module.exports = Card;