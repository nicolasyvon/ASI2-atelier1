import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from "react"
import { Form, Header,Button } from 'semantic-ui-react'
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { HomePage } from '../HomePage/HomePage';
import Cookies from 'universal-cookie';


export const Login = (props) =>{
    const cookies = new Cookies();

    let [authMode, setAuthMode] = useState("signin")
    const [log, setlog] = useState({});


    const [currentUser,setCurrentUser]= useState({
                                        username:"",
                                        password:"",

                                    });
    
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
        }

    function processInput(event){
        const target = event.currentTarget;
        const value = target.value;
        const name = target.name;
        let currentVal=currentUser;
        setCurrentUser({...currentUser, [name]: value});
        currentVal[name]= value;
        props.handleChange(currentVal);

    };



    function Logverif() {
        const fetchData = () => {
            fetch("http://localhost:8083/auth",   
            { 
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
              method: "POST",
              body:JSON.stringify( currentUser)
            })
               .then(response => {
                   return response.json()
                 })
                .then(data => {
                  setlog(data)
                  cookies.set('idUser', data.toString(), { path: '/' });
                 }
                 
                 )
             }
             console.log(log)

        fetchData()

        return (<div>home</div>)};

    function submitlog(data){
        console.log(currentUser)
        Logverif()
    }
    
    if (authMode === "signin") {
        return (
        <Form className="form-control">
            <Header as='h4' dividing className="Auth-form-title">
            Sign In
            </Header>
            <br></br>

            
            <Form.Field widths='equal' className="form-outline mb-12">
                <Form.Input fluid label='username'  placeholder='username' name="username" onChange={processInput} value={currentUser.username} />
            </Form.Field>
            <br></br>

         
            <Form.Field  className="form-outline mb-6">
                <Form.Input type="password" label="Password" placeholder="" onChange={processInput}  name="password" value={currentUser.password}/>
            </Form.Field>
            <br></br>

            <Button type='submit'  className="btn btn-primary btn-block mb-4" onClick={submitlog}>Submit</Button>

            <div className="text-center">
             Not registered yet?{" "}
              <a className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </a>            
              </div>
        </Form>

    );

    
    }
    return (
    <div className='Login'> 
    <BrowserRouter>   
    <Form className="form-control">
        <Header as='h4' dividing className="Auth-form-title">
        Sign Up
        </Header>
        <br></br>

        
        <Form.Field widths='equal' className="form-outline mb-12">
            <Form.Input fluid label='Surname'  placeholder='Surname' name="surname" onChange={processInput} value={currentUser.surname} />
        </Form.Field>
        <br></br>
        <Form.Field widths='equal' className="form-outline mb-12">
            <Form.Input fluid label='name'  placeholder='name' name="name" onChange={processInput} value={currentUser.name} />
        </Form.Field>
        <br></br>

        <Form.Field  className="form-outline mb-6">
            <Form.Input type="password" label="Password" placeholder="" onChange={processInput}  name="pwd" value={currentUser.pwd}/>
        </Form.Field>
        <br></br>
        <Form.Field  className="form-outline mb-6">
            <Form.Input type="repassword" label="Re Password" placeholder="" onChange={processInput}  name="pwd" value={currentUser.repwd}/>
        </Form.Field>
        <br></br>

        <Button type='submit'  className="btn btn-primary btn-block mb-4" onClick={submitlog}>Submit</Button>

        <div className="text-center">
        Already registered?{" "}
        <a className="link-primary" onClick={changeAuthMode}>
            Sign In
        </a>            
        </div>
    </Form>
    <div>
                        <Routes>
                            <Route path='/soldCard' element={<HomePage/>} />
                        </Routes>
                    </div>
    </BrowserRouter>
    </div>
);
}