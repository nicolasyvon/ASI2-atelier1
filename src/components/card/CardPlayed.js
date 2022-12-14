import React from 'react';
import {useSelector} from "react-redux";
import { Card, Image, Icon } from 'semantic-ui-react'

 export const CardDisplay=(props) =>{
    const item = useSelector(state=> state.cardReducer.value);
    return (
        <Card>
            <Image src="/images/smiley.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Meta>
                    <ul>
                    <li >Name: {item.Name} </li>
                    <li >Description: {item.Description}  </li>
                    <li >Attack: </li>
                    <li >
                    <a><Icon name='protect'/></a>  Defense: </li>
                    <li >
                        <a><Icon name='battery three quarters Energy'/></a>  Energy: </li>
                    <li >
                        <a><Icon name='heart' /></a> HP: </li>
                    <li>
                        <a>
                            <Icon name='money bill alternate outline' />
                                 $
                        </a>

                    </li>
                    

                    </ul>
                    
                    
                </Card.Meta>
            </Card.Content>
           
        </Card>

        );
    }
export default CardDisplay;