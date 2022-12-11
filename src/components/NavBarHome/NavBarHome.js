import React, { useEffect, useState } from "react"
import Cookies from "universal-cookie";
import './NavBarHome.css';

export const NavBarHome= (props) =>{
    const cookies = new Cookies();
    const [moneyUser, setMoneyUser] = useState(-1);
    const [nameUser, setNameUser] = useState('noName');
    const fetchData = () => {
      fetch("http://localhost:8083/user/"+cookies.get('idUser'))
         .then(response => {
          //console.log(response.json())
             return response.json()
           })
          .then(data => {
            setMoneyUser(data['account'])
            setNameUser(data['surName'])
           })
       }
       useEffect(() => {
            fetchData()
          }, [])
      //cookies.addChangeListener(fetchData);
    
    return(
        <div>
            <div className="MoneyUser">
              <img alt='MoneyImage' src="/images/money.png" className='MoneyImage'/>
              <span className="MoneyLabel">{moneyUser}</span>
            </div> 
            <div className="user">
              <img alt='userImg' src="/images/user.png" className="userImages"/>
              <span className="userLabel">{nameUser}</span>
            </div>
        </div>
        );
}