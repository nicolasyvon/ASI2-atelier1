const {Router} = require('express');
//import {GameController} from '../controllers/GameController.mjs';
const GameController = require('../controllers/GameController');

const BASE_PATH = '/game';

const GameRouter = Router();
module.exports = GameRouter;

GameRouter.route(BASE_PATH+'/putUser/:userId1/:userId2')
    .get(GameController.putUser);

GameRouter.route(BASE_PATH+'/getUsers')
    .get(GameController.getUsers);

GameRouter.route(BASE_PATH+'/selectCards/:userId/:card1Id/:card2Id/:card3Id/:card4Id')
    .get(GameController.selectCards);

GameRouter.route(BASE_PATH+'/getUser/:userId')
    .get(GameController.getUser);

GameRouter.route(BASE_PATH+'/getCards')
    .get(GameController.getCards);

GameRouter.route(BASE_PATH+'/attack/:userIdAttack/:cardIdAttack/:cardIdDefense')
    .get(GameController.attack);
