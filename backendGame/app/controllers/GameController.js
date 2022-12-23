//import {GameService} from '../services/GameService.mjs';
const GameService = require('../services/GameService');

class GameController {
    constructor({}) {
        console.log(`new GameController`);
    }

    getUsers(request, response) {
        response.json(GameService.getUsers());
    }

    putUser(request, response) {
        response.json(GameService.putUser(request.params.userId1,request.params.userId2));
    }

    selectCards(request, response) {
        response.json(GameService.selectCards(request.params.userId,request.params.card1Id,request.params.card2Id,request.params.card3Id,request.params.card4Id));
    }

    getUser(request, response) {
        response.json(GameService.getUser(request.params.userId));
    }

    getCards(request, response) {
        response.json(GameService.getCards());
    }

    attack(request, response) {
        response.json(GameService.attack(request.params.userIdAttack,request.params.cardIdAttack,request.params.cardIdDefense));
    }

}

module.exports = new GameController({});