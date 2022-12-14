import React, { useState } from 'react';
import { Grid, Segment,Menu } from 'semantic-ui-react'
import { User } from '../user/containers/User'
import Cookies from "universal-cookie";
import CardPlayed from '../card/CardPlayed';
import ListCardPlayed from '../card/ListCardPlayed';
import { Provider } from 'react-redux';
import store from '../SoldCard/store';

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
  

    return (
    <Provider store={store} >
      <div className='JeuPage'>
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
            <p> interface chat</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment>

              <ListCardPlayed>
              </ListCardPlayed>
                <p> interface liste cards</p>
              <button >End Turn</button>
              </Segment>
          </Grid.Column>
          <Grid.Column>
            <CardPlayed>

            </CardPlayed>
                <button >Attack</button>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </Provider>
    );
}

//export default App;

