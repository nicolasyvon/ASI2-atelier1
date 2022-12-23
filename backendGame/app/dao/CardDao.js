const Card = require('../models/Card');


const listCard = [];

class CardDao {
    constructor({}) {
        console.log('new CardDao');
    }

    getCards() {
        return listCard;
    }

    getCard(cardId,userId){
        return listCard.filter(
                card => {(card.id == cardId) && (card.userId == userId)}
        );
    }

    putCard(card) {
        listCard.push(card);
    }

    modifyHealthCard(userAttack,cardIdAttack,cardIdDefense,userDefense){
        let indexAttack = listCard.findIndex( card => {(card.id == cardIdAttack) && (card.userId == userAttack)});
        let indexDefense = listCard.findIndex( card => {(card.id == cardIdDefense) && (card.userId == userDefense)});

        if(listCard[indexAttack].attack>listCard[indexDefense].defense){
            let life = listCard[indexDefense].life - listCard[indexAttack].attack + listCard[indexDefense].defense;
            listCard[indexDefense].life=life; 
        }

    }

    victoryCondition(userIdDefense){

    }
}

module.exports = new CardDao({});