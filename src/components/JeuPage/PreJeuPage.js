import 'semantic-ui-css/semantic.min.css'
import { ListCards } from "../card/ListCards";
import store from '../SoldCard/store';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Card, Image, Icon, Feed } from 'semantic-ui-react';
import { updateListCard } from '../../actions';
import { useNavigate } from 'react-router-dom';
import {Button} from '../Button/Button';
import "../BottomSide/container/ButtonContainer";
import { Jeu } from '../../Jeu';

export const PreJeuPage =(props) =>{

    const item1 = {
        Name: "name1",
        Description: "name1",
        Attack: "name1",
        Power: "name1",
    
      }
      const item2 = {
        Name: "name2",
        Description: "ndes2",
        Attack: "name1",
        Power: "name1",
    
      }
      const item3 = {
        Name: "name3",
        Description: "DES3",
        Attack: "name1",
        Power: "name1",
    
      }
      const item4 = {
        Name: "name4",
        Description: "des4",
        Attack: "name1",
        Power: "name1",
    
      }

      const liste = [item1,item2,item3,item4]

      const cardList = []
      function handleclick(item) {
        /*
        for (element in cardList){
            if (element != item){
            }
        }
        */
        cardList.push(item)
        console.log('The link has been  clicked.', cardList);
        
        console.log(cardList,"liste des cartes")
      }

    
      
    //const navigate = useNavigate();
    // function redirectHandler(data){
    //     console.log("redirection");
    //     navigate('/'+data);};
    
      function StartPlay(){
        let dispatch=useDispatch();
        dispatch(updateListCard(cardList));
        return(
            <Jeu></Jeu>
        )
      }
      

    return (
        <>
       

        {liste.map(item => {

        return (
        <Card>
            <Card.Content>
                <Card.Meta>     
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                    </Feed.Label>
                <Feed.Content>
                <Feed.Summary>

                <ul>
                    <li >Name: {item.Name}</li>
                    <li >Description: {item.Description}</li>
                </ul>
                <Image src="/images/smiley.jpg" wrapped ui={false} onClick={() =>handleclick(item)} />
                </Feed.Summary>
                <Feed.Meta>
                    <Feed.Like>
                    <Icon name='money bill alternate outline' />
                    </Feed.Like>
                </Feed.Meta>
                    
                </Feed.Content>
                
                </Feed.Event>
            </Feed>
                    
                </Card.Meta>
            </Card.Content>
        
        </Card>
        
        )})};

        

        </>
       
    );

}


