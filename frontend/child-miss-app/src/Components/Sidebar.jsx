import { Link } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "../App";
import { useNavigate } from "react-router-dom";
function Sidebar(){
    let navigate=useNavigate();
    let [isloggedin,setIsloggedin]=useContext(mycontext)
    if (isloggedin==false){
         <Link to="/" ><p >Home</p></Link>
    }
    let logoutfun=()=>{
        setIsloggedin(false)
        navigate('/')

    }
    return(
        

        <div className="sidebar">
            
            <p >Home</p>
           <Link to="/searchparent"><p>search parent</p></Link> 
           <Link to="/addparent"><p>add parent</p></Link> 
            <Link to="searchchild"><p>search child</p></Link>
           <Link to="addchild"> <p>add child</p></Link>
           <div onClick={logoutfun}><p >logout</p></div>
          
        </div>
       
    );
}
export default Sidebar;