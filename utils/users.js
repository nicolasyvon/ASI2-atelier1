
class Users {
    static getType() { return "com.cpe.user.model.User" }

    
    constructor() {
        this.users = [];
    }

   

    addUser({id, username,room} ) {
    username = username.toLowerCase()
    room = room.toLowerCase()

     //check for existing users
     const existingUser = this.users.find((user) => {
        return user.room == room && user.username == username
    })

    //validate username
    if (existingUser) {
        return {
            error: "username is already used"
        }
    }

    //store user
    const user = { id, username, room }
        this.users.push(user)
    return { user }
}

removeUser(id){
    const index = this.users.findIndex((user) => {
        return user.id === id
    })
    if (index !== -1) {
        return this.users.splice(index, 1)[0]
    }
}

getUser(id){
    this.users.find((user) => {
        user.id === id
       
    })
    return [this.users.id, this.users.username,this.users.room];
    
}

getUserRoom(id){
    this.users.find((user) => {
        user.id === id
        
    })
    return this.users.room;
}

getUserInRoom(room){
    const u = []
    this.users.filter((user) => {

        user.room === room
    })
    console.log(this.users)
    return this.users

}
}

module.exports = Users;
