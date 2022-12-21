import 'semantic-ui-css/semantic.min.css'
import { ListCards } from "../card/ListCards";
import store from '../../store';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Card, Image, Icon, Feed } from 'semantic-ui-react';
import { updateListCard } from '../../actions';
import { useNavigate } from 'react-router-dom';
import {Button} from '../Button/Button';
import "../BottomSide/container/ButtonContainer";
import { Jeu } from '../../Jeu';
import React, { useEffect, useState } from "react"
import './JeuPage.css'

export const PreJeuPage =(props) =>{
    const cardList = []
    let dispatch=useDispatch();
    dispatch(updateListCard(cardList));

    const item1 = {
        name: "name1",
        description: "name1",
        attack: "name1",
        power: "name1",
    
      }
      const item2 = {
        name: "name2",
        description: "ndes2",
        attack: "name1",
        power: "name1",
    
      }
      const item3 = {
        name: "name3",
        description: "DES3",
        attack: "name1",
        power: "name1",
    
      }
      const item4 = {
        name: "name4",
        description: "des4",
        attack: "name1",
        power: "name1",
    
      }
      const item5 = {
        name: "name5",
        description: "des5",
        attack: "name1",
        power: "name1",
    
      }
      const [cards, setCards] = useState([]);
      const fetchData = () => {
        fetch("http://vps.cpe-sn.fr:8083/cards")
           .then(response => {
               return response.json()
             })
            .then(data => {
              setCards(data)
             })
         }
         useEffect(() => {
              fetchData()
            }, [])

      const liste = [item1,item2,item3,item4,item5]
      
      let isAdded = false;
      function handleclick(item) {
        isAdded = false;
       console.log("carde",cardList.length)
       if (cardList.length < 4) {
        cardList.push(item);
        isAdded = true}
       else{
         window.alert("Choose only 4 cards My friend ! Clique sur Start pour commencer")
       }        
        console.log(cardList.includes(item),"liste des cartes")
        
      }

    
      
    const navigate = useNavigate();
     function redirectHandler(data){
        if (cardList.length < 4){
          window.alert("Il faut choisir 4 cartes pour pouvoir jouer !")
        }
        else{

          console.log("redirection");
           navigate('/'+data);
          };
        }
        
    
      function StartPlay(){
        let dispatch=useDispatch();
        dispatch(updateListCard(cardList));
        return(
            <Jeu></Jeu>
        )
      }
      

    return (
        // <>
        <> 
        <div class="container-fluid py-2">
    <div class="d-flex flex-row flex-nowrap">

        
    


        {cards.map(item => {

          
            return(


            <Card className='class'>
            <Card.Content>
                <Card.Meta>     
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                    </Feed.Label>
                <Feed.Content>
                <Feed.Summary>

                <ul>
                    <li >Name: {item.name} </li>
                    <li >Description: {item.description}  </li>
                    <li >Attack: {item.attack}</li>
                    <li >
                    <a><Icon name='protect'/></a>  Defense: {item.defence} </li>
                    <li >
                        <a><Icon name='battery three quarters Energy'/></a>  Energy: {item.energy}</li>
                    <li >
                        <a><Icon name='heart' /></a> HP: {item.hp}

                    </li>
                    <li>
                        <p>Added</p>
                    </li>

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
            )
          }
          )}
    {/* <div class="container bg-light"> */}
    {/* <div class="row"> */}
    <div class="fixed-bottom d-flex justify-content-center">
        <button class="bottom" className="bg-black text-white p-2.5 w-fit mt-9 " onClick={()=>redirectHandler("Jeu")}>Start</button>
          </div>
        </div>
        </div> 

    {/* </div> */}
        {/* </div>          */}
        
        

        

        </>
       
    );

}


