//import React, { Component } from 'react';
import {Button} from '../Button/Button';
import "./BottomSide.css"
import store from '../SoldCard/store';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { Provider } from 'react-redux';
import { Sell } from '../SoldCard/Sell';
import { Buy } from '../SoldCard/Buy';
import {Login} from '../Login/Login'
import React, { useState } from 'react';

 

export const BottomSide= (props) =>{
    const [showResults, setShowResults] = useState(true)
    const HideResult = () => setShowResults(false)
    const ShowResult = () => setShowResults(true)
    return(
        <div className='BottomSide'>
            <Provider store={store} >
                <BrowserRouter>
                { showResults ? 
                    <div className='Buy'>
                        <Button title="BUY" visual_source="/images/buy.png"/>
                        <NavLink to="/Buy">
                        <div onClick={HideResult}><Button title="BUY" visual_source="/images/buy.png"/></div>
                        </NavLink>

                    </div>
                : null}
                { showResults ? 
                    <div className='Sell'>
                        <NavLink to="/Sell">
                            <div onClick={HideResult}><Button title="SELL" visual_source="/images/sell.png"/></div>
                        </NavLink>
                    </div>
                : null}
                { showResults ? 
                    <div className='Play'>
                        <Button title="PLAY" visual_source="/images/play.png"/>
                    </div>
                : null}
                { showResults ? 
                    <div className='Connection'>
                        <NavLink to="/login">
                        <div onClick={HideResult}><Button title="CONNECT" visual_source="/images/user.png"/></div>
                        </NavLink>
                    </div>
                : null}
                <div className='goBack' onClick={ShowResult}>
                    <NavLink to="/">
                    <img alt='goBackImg' src='/images/goBack.png' className='goBackImg'/>
                    </NavLink>
                </div>
                    
                    
                
                    <div>
                        <Routes>
                            <Route path='/Sell' element={<Sell/>} />
                            <Route path='/Buy' element={<Buy/>} />
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
        </div>
        );
}