class User {
    constructor({id,idChallenger,listCard,turn}) {
        this.id = id;
        this.idChallenger = idChallenger;
        this.listCard=listCard;
        this.listCardSelect=[];
        this.energy=1000;
        this.turn=turn;
        this.victory=false;
    }
}

module.exports = User;