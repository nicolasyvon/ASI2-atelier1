import "./BottomSide.css";
import {ButtonContainer} from "./container/ButtonContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Sell } from '../SoldCard/Sell';
import { Buy } from '../SoldCard/Buy';
import {Login} from '../Login/Login';
import { ChatBox } from "../ChatBox/ChatBox";
import {PreJeuPage} from "../JeuPage/PreJeuPage"
import { JeuPage } from "../JeuPage/JeuPage";
 


 

export const BottomSide= (props) =>{
    return(
        <div className='BottomSide'>
            
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<ButtonContainer/>} />
                        <Route path='/Sell' element={<Sell/>} />
                        <Route path='/Buy' element={<Buy/>} />
                        <Route path='/Connection' element={<Login/>}/>
                        <Route path='/Play' element={<PreJeuPage/>}/>
                        <Route path='/Jeu' element={<JeuPage/>}/>
                    </Routes>
            </BrowserRouter>

        </div>
    );
}