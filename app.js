
const express = require('express');
const { join } = require('path');
const { disconnect } = require('process');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var listUsersCo= [];
var listSocketCo= [];

var nbUsers = {};
const 
    Users
 = require('./utils/users');

let U=new Users();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    });

app.set("port", process.env.PORT || 3000);
var server = http.listen(3000, () => {
    console.log("server is running on port", server.address().port);
    });

//Récupération des données de l'user
io.on("connection", async (socket) => {

    var ID = socket.handshake.query.userID
    
    let userConnected;
    let reponse = await fetch("http://vps.cpe-sn.fr:8083/user/"+ID);
    userConnected = await reponse.json();
    console.log(userConnected);
        
    console.log("OKKK logged in "+userConnected['login']);
    socket.emit('welcome', ID);
    listSocketCo.push(socket);
    listUsersCo.push(ID);
    console.log(listUsersCo);
    

    
    socket.on('join',(room) => {   
        if (nbUsers[room] == undefined || nbUsers[room] == 2 ) {
            //socket.join(room);

            U.addUser({
                id: ID, 
                username:userConnected['login'],
                room: room
            })

            console.log("User added in room ",room);
            console.log("User details  ",getUser(ID));
            
            nbUsers[room] = 1;
            
        } else {
            //socket.join(room);
            U.addUser({
                id: ID, 
                username:userConnected['login'],
                room: room
            })

            console.log("User added in room ",room);
            console.log("User details  ",getUser(ID));
            nbUsers[room] ++;
        } 

        })
        socket.join(U.getUserRoom(ID));
        console.log(U.getUserRoom(ID));
   /* 
    //gestion du chat 
    socket.on('chat message', (msg) => {   
        //io.emit('chat message', msg);  
        console.log(U.getUser(ID));
        //io.to(user.g.emit('chat message', user.getUser+" : "+msg);
        console.log(socket.handshake.query.userID);
    });*/




    //Fin de connexion
    socket.on("disconnect", ()=>{

        console.log('bye', socket.handshake.query.userID);
        listUsersCo.pop(socket.handshake.query.userID);
        console.log(listUsersCo);
    });


    


});




