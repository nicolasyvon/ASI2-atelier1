//import {UserDao} from '../dao/UserDao.mjs';
const UserDao = require('../dao/UserDao');
const User = require('../models/User');
const CardDao = require('../dao/CardDao');
const Card = require('../models/Card');
const { getCard } = require('../dao/CardDao');
const { modifyTurn } = require('../dao/UserDao');


class GameService {
    constructor({}) {
        console.log(`new GameService`);
    }

    getUsers() {
        return UserDao.getUsers();
    }

    getUser(userId) {
        return UserDao.getUser(userId);
    }

    putUser(userId1,userId2) {
        let listCard1=[];
        let listCard2=[];

        fetch("http://localhost:8083/user/"+userId1)
         .then(response => {
          //console.log(response.json())
             return response.json()
           })
          .then(data => {
            listCard1=data['cardList'];
            let user1 = new User({
                id:userId1,
                idChallenger : userId2,
                listCard:listCard1,
                turn:true
            });
            UserDao.putUser(user1);
           });

        fetch("http://localhost:8083/user/"+userId2)
           .then(response => {
            //console.log(response.json())
               return response.json()
             })
            .then(data => {
                listCard2=data['cardList'];
                let user2 = new User({
                    id:userId2,
                    idChallenger : userId1,
                    listCard:listCard2,
                    turn:false
                });
                UserDao.putUser(user2);
             });
        
        return {};
    }
    getCards() {
        return CardDao.getCards();
    }

    putCard(userId,cardId) {

        fetch("http://localhost:8083/card/"+cardId)
         .then(response => {
          //console.log(response.json())
             return response.json()
           })
          .then(data => {
            let attack=data['attack'];
            let defense=data['defence'];
            let energy=data['energy'];
            let life=data['hp'];

            let card = new Card({
                id:cardId,
                attack : attack,
                defense:defense,
                energy:energy,
                life:life,
                userId:userId
            });
            CardDao.putCard(card);
           });
        
        return {};
    }

    selectCards(userId,card1Id,card2Id,card3Id,card4Id){
        UserDao.modifyListCardSelect(userId,card1Id);
        UserDao.modifyListCardSelect(userId,card2Id);
        UserDao.modifyListCardSelect(userId,card3Id);
        UserDao.modifyListCardSelect(userId,card4Id);

        this.putCard(userId,card1Id);
        this.putCard(userId,card2Id);
        this.putCard(userId,card3Id);
        this.putCard(userId,card4Id);
    }

    getCard(cardId,userId) {
        return CardDao.getCard(cardId,userId);
    }

    switchTurn(userId1,userId2){
        let user1=this.getUser(userId1);
        let user2=this.getUser(userId2);
        let state1=user1.turn;
        let state2=user2.turn;

        UserDao.modifyTurn(userId1,state2);
        UserDao.modifyTurn(userId2,state1);
    }

    attack(userIdAttack,cardIdAttack,cardIdDefense){
        let userAttack = this.getUser(userIdAttack);
        let cardAttack = this.getCard(cardIdAttack);
        console.log(userAttack.turn);
        console.log((userAttack.energy>cardAttack.energy));
        if (userAttack.turn && (userAttack.energy>cardAttack.energy)){
            console.log('attack possible');
            CardDao.modifyHealthCard(userIdAttack,cardIdAttack,cardIdDefense,userAttack.idChallenger);
            UserDao.modifyEnergyUser(userIdAttack,cardAttack.energy);
            let userAttackModifie = this.getUser(userIdAttack);
            if(userAttackModifie.energy<=0){
                console.log('switch turn')
                this.switchTurn(userIdAttack,userIdDefense);
            }
        }
        return({})
    }
}

module.exports = new GameService({});