
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentCardPlayer2 } from '../../actions';
import { Card, Image, Icon, Feed } from 'semantic-ui-react'




export const ListPlayedPlayer2= ( state={items:undefined} )=>{
  const listeCards = useSelector(state=> state.listcardReducerPlayer2.value);
  console.log(listeCards, "liste des cartes reçu")
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
    name: "name3 carte",
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

  const listPlayer2 = [item1,item2,item3,item4]
  const itemList = [];
  //itemList.push(item);
  function addtoListCard(){
  }
  //const [itemList, addtoListCard] = useState([item]);
  
  let dispatch=useDispatch();

  function handleclick(item) {
    console.log('The link has been  clicked.', item);
    dispatch(updateCurrentCardPlayer2(item));
    console.log(cards, "cartes")
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
  

  return (
    /*
    <div>
      <br/>
    <h2>Market</h2>
    <table class="table table-hover table-bordered ">
                        <thead class="table-info">
                        <tr>
                        <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Family</th>
                            <th scope="col">Affinity</th>
                            <th scope="col">Energy</th>
                            <th scope="col">HP</th>
                            <th scope="col">Price</th>
                            <th scope="col">ID</th>
                          </tr>
                          </thead>
              
    {
                list.map((item) => ( 
               
                        
                        <tbody>
                          <tr key = { item.id }>
                          <td >{ item.name }</td>
                            <td >{ item.description }</td>
                            <td>{ item.family }</td>
                            <td>{ item.affinity }</td>
                            <td>{ item.energy }</td>
                            <td>{ item.hp }</td>
                            <td>{ item.price }</td>
                            <td>{ item.id }</td>
                          </tr>
                        </tbody>           
                ))
            }
                      </table>

    </div>*/
    <>
      {listPlayer2.map(item => {

        return (
        <Card>
            <Card.Content>
                <Card.Meta>     
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                <Image src="/images/OIP.jpg" wrapped ui={false}/>
                    </Feed.Label>
                <Feed.Content>
                <Feed.Summary>

                <ul>
                    <li >Name: {item.name}</li>
                    <li >Description: {item.description}</li>
                </ul>
                <Image src="/images/smiley.jpg" wrapped ui={false} onClick={() =>handleclick(item)} />
                </Feed.Summary>
                <Feed.Meta>
                    <Feed.Like>
                    <Icon name='money bill alternate outline'/>
                    </Feed.Like>
                </Feed.Meta>
                    
                </Feed.Content>
                
                </Feed.Event>
            </Feed>
                    
                </Card.Meta>
            </Card.Content>
           
        </Card>

        
          
          )})}
        </>
    );
}
export default ListPlayedPlayer2;
