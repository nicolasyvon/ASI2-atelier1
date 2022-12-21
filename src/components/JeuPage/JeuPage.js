import React, { useState } from 'react';
import { Grid, Segment,Menu } from 'semantic-ui-react'
import { User } from '../user/containers/User'
import Cookies from "universal-cookie";
import CardPlayed from '../card/CardPlayed';
import ListCardPlayed from '../card/ListCardPlayed';
import { Provider } from 'react-redux';
import store from '../../store';
import ListPlayedPlayer2 from '../card/ListPlayedPlayer2';
import { ChatInterface } from '../chat/ChatInterface';
import CardPlayer2 from '../card/CardPlayer2';
import { useNavigate } from 'react-router-dom';


//Create function component
export const JeuPage =(props) =>{
    const currentUser = {
        id:12,
        surname:"John",
        lastname:"Doe",
        login:"jDoe",
        pwd:"jdoepwd",
        img:'https://i.pinimg.com/474x/9f/4b/6f/9f4b6ff027c0a45da65081efee6bdd36.jpg',
        money:1000,
      };
    const cookies = new Cookies();

    const navigate = useNavigate();
    function redirectHandler(data){
          navigate('/'+data);
         };
    function attack(){
      CardPlayed.item.energy = CardPlayed.item.energy - 10;
      
    console.log('attacked')

    }
       
  

    return (
    <Provider store={store} >
      <div className='JeuPage' style={{width:'100%'}}> 
        <Menu>
          <Menu.Item
            name='heropres'>
            Jeu
          </Menu.Item>
        </Menu>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
          <Grid.Column>
            <Segment>
              <ChatInterface></ChatInterface>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment>
              <p> Player 1</p>
              <ListCardPlayed>
              </ListCardPlayed>
                <button class="bottom" className="bg-black text-white p-2.5 w-fit mt-9" onClick={()=>redirectHandler("Play")}>End Turn</button>         
          </Segment>
          <Segment>
              <p> Player 2</p>
              <ListPlayedPlayer2>
              </ListPlayedPlayer2>
          </Segment>
          </Grid.Column>
          <Grid.Column>
          <h2> Player 1</h2>
            <CardPlayed>
            </CardPlayed>
            <button class="bottom" className="bg-black text-white p-2.5 w-fit mt-9 " onClick={attack}>Attack</button>    
            <h2> Player 2</h2>     
          <CardPlayer2></CardPlayer2>

          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </Provider>
    );
}

//export default App;

