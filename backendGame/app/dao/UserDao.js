//import  {User} from '../models/User.mjs';
const User = require('../models/User');

const listUsers = [];

class UserDao {
    constructor({}) {
        console.log(`new UserDao`);
    }

    getUsers() {
        return listUsers;
    }
    
    getUser(userId){
        return listUsers.filter(
                user => user.id == userId
        );
    }

    putUser(user) {
        listUsers.push(user);
    }

    async modifyListCardSelect(userId,cardId){
        let index = listUsers.findIndex( user => user.id == userId);
        listUsers[index].listCardSelect.push(cardId);
        console.log(listUsers[index]);
    }

    modifyEnergyUser(userId,energyCard){
        let indexUser = listUsers.findIndex( user => user.id == userId);
        let energy = listUsers[indexUser].energy;
        listUsers[indexUser].energy.push(energy-energyCard);
    }

    modifyTurn(userId,state){
        let indexUser = listUsers.findIndex( user => user.id == userId);
        listUsers[indexUser].turn=state;
    }

}

module.exports = new UserDao({});