import 'semantic-ui-css/semantic.min.css'
import { ListCards } from "../card/ListCards";
import store from '../SoldCard/store';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Card, Image, Icon, Feed } from 'semantic-ui-react';
import { updateListCard } from '../../actions';
import { PreJeuPage } from '../JeuPage/PreJeuPage';


export const StartPlay =(props) =>{

    

      
    return (
        <Provider store={store} >
            <PreJeuPage>

            </PreJeuPage>

        </Provider>
       
    );

}


