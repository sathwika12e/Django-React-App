import '../Css/Login.css'
 import axios from "axios"
import { useRef } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { mycontext } from '../App';
function Login(){
    let [isloggedin,setIsloggedin]=useContext(mycontext)
    
    let username=useRef();
    let userpassword=useRef();
     let navigate=useNavigate();
    let UserRegister=()=>{
        console.log("btn clicked")
        let user_credentials={
            username:username.current.value,
            password:userpassword.current.value
        }
        let post_url="http://127.0.0.1:8000/api/registerapi/"
       
        axios.post(post_url,user_credentials).then((resp)=>{
          console.log(resp.data)

        })  
    }
    let UserLogin=()=>{
        let user_credentials={
            username:username.current.value,
            password:userpassword.current.value
        }
         let login_url="http://127.0.0.1:8000/api/loginapi/"
        axios.post(login_url,user_credentials).then((resp)=>{
            setIsloggedin(true)
            navigate('/searchparent')
        }).catch((err)=>{
            console.log(err)
        })

    }
    return(
        <div className="login-div">
            <input ref={username} className='input' placeholder="user" type="text" /><br></br>
            <input ref={userpassword} className='input' placeholder="password" type="password" /><br></br>
            <Button fun={UserLogin} name="Login"/><br></br>
            <hr></hr>
            <p>new user Register</p>
            <Button fun={UserRegister}  name="Register"/>
        </div>
    );
}
export default Login;