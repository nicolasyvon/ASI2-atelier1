import React, { useState } from 'react';
import { Grid, Segment,Menu } from 'semantic-ui-react'
import {User} from './components/user/containers/User'
import  {ListCards} from './components/card/ListCards'

//Create function component
export const App =(props) =>{
    const [currentUser,setCurrentUser]= useState({
                                        id:12,
                                        surname:"John",
                                        lastname:"Doe",
                                        login:"jDoe",
                                        pwd:"jdoepwd",
                                        img:'https://i.pinimg.com/474x/9f/4b/6f/9f4b6ff027c0a45da65081efee6bdd36.jpg',
                                        money:1000,
                                      });
     function callbackErr(data){
        console.log(data);
    };

    function handleChange(data){
      console.log(data);
      setCurrentUser({
        id:data.id,
        surname:data.surname,
        lastname:data.lastname,
        login:data.login,
        pwd:data.pwd,
        money:data.money,
        img:data.img,
      });
    };

    function submitUserHandler(data){
      console.log("user to submit"+data);
    };

    return (
      <>
        <Menu>
          <Menu.Item
            name='heropres'>
            Sell Cards
          </Menu.Item>
          <User id={currentUser.id}
                      surname={currentUser.surname}
                      lastname={currentUser.lastname}
                      login={currentUser.login}
                      pwd={currentUser.pwd}
                      money={currentUser.money}
                      img={currentUser.img}
                      display_type='SHORT'>
            </User>
        </Menu>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
          <Grid.Column>
            <Segment>
              <ListCards>

              </ListCards>

            </Segment>
          </Grid.Column>
          <Grid.Column>
              <User 
                     id={currentUser.id}
                      surname={currentUser.surname}
                      lastname={currentUser.lastname}
                      login={currentUser.login}
                      pwd={currentUser.pwd}
                      money={currentUser.money}
                      img={currentUser.img}
                      display_type='FULL'>
              </User>
              <button>Sell</button>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
}

export default App;

