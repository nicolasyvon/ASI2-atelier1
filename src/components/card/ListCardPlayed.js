
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentCard } from '../../actions';
import { Card, Image, Icon, Feed } from 'semantic-ui-react'




export const ListCardPlayed= ( state={items:undefined} )=>{
  //const item = useSelector(state=> state.cardReducer.value);
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

  const list = [item1,item2,item3,item4]
  const itemList = [];
  //itemList.push(item);
  function addtoListCard(){
  }
  //const [itemList, addtoListCard] = useState([item]);
  
  let dispatch=useDispatch();

  function handleclick(item) {
    console.log('The link has been  clicked.', item);
    dispatch(updateCurrentCard(item));
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
      {list.map(item => {

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
                    <li >Name: {item.Name}</li>
                    <li >Description: {item.Description}</li>
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
          
          )})};
        </>
    );
}
export default ListCardPlayed;
