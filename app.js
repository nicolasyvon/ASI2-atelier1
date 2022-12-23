
const express = require('express');
const { use } = require('express/lib/application');
const { join } = require('path');
const { disconnect } = require('process');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
global.CONFIG = require('./config.json');

const Producer = require('./app/services/producer.js');

const springProducer = new Producer({destination: CONFIG.activemq["spring-chat-messaging.topic.send"]});

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

var room = 0;
//25 52 66 83
//Récupération des données de l'user
io.on("connection", async (socket) => {
    console.log("numero de la room actuelle",room)
    var ID = socket.handshake.query.userID
    let userConnected;
    let reponse = await fetch("http://vps.cpe-sn.fr:8083/user/"+ID);
    userConnected = await reponse.json();
    //console.log(userConnected);
        
    console.log("OKKK logged in "+userConnected['login']);
    socket.emit('welcome', ID);
    listSocketCo.push(socket);
    listUsersCo.push(ID);
    console.log(listUsersCo);
    
    if (nbUsers[room] == undefined || nbUsers[room] == 2 ) {
        room ++;
        var user = {
            id: ID, 
            username:userConnected['login'],
            room: room
        }
        U.addUser(user)
        console.log("User added in room ",room);
        nbUsers[room] = 1;
        socket.join("room"+room);
        socket.in("room"+room).emit('connectToRoom', "You are in room no "+room);
        console.log()
        console.log(socket.rooms); // Set { <socket.id>, "room1" }
        
    } else {
        var user = {
            id: ID, 
            username:userConnected['login'],
            room: room
        }
        U.addUser(user);

        console.log("User added in room ", room);
        nbUsers[room] ++;
        socket.join("room"+room);
        socket.emit('connectToRoom', ID);
        socket.in("room"+room).emit('connectToRoom', "You are in room no "+room);
        console.log(socket.rooms); // Set { <socket.id>, "room1" }
    } 


    
    //gestion du chat 
    socket.on('chat message', (msg) => {   
        //io.emit('chat message', msg); 
        message = user.username +" :  "+ msg;
        io.to("room"+user.room).emit('message room', message );
    });


    //Fin de connexion
    socket.on("disconnect", ()=>{
        console.log('bye', socket.handshake.query.userID);
        listUsersCo.pop(socket.handshake.query.userID);
        nbUsers[user.room]-- ;
        socket.in("room"+user.room).emit('donne historique');
        });

    socket.on("voici historique" , (historique) => {
        console.log("FINALEMENT: ", historique);
        springProducer.send("Save chat",historique )
    })


});




