import axios from "axios"
import Button from "./Button";
import { useEffect } from "react";
import { useState } from "react";
import '../Css/Searchparent.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "../App";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
function Searchchild(){
    let navigate=useNavigate()
    let [isloggedin,setIsloggedin]=useContext(mycontext)
   let [data,setData]=useState([]);
   let searchref=useRef();
    useEffect(()=>{
         if (isloggedin==false){
            alert('login to see')
            navigate('/')
         }
        let get_url="http://127.0.0.1:8000/api/childapi/"
        axios.get(get_url).then((resp)=>{
            console.log(resp)
            setData(resp.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    let search_data=data.filter((i)=>
        i.DNAStrand1==searchref.current.value ||i.DNAStrand2==searchref.current.value
    )
    console.log(search_data,'hello')
   let nxtbtnclick=()=>{
     
   }
    return(
        <div className="table-div">
            <input ref={searchref} type="search" />
            <table border="2px" cellSpacing="0px">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>MOBILENO</th>
                        <th>DNAstrand1</th>
                        <th>DNAstrand2</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                      search_data.map((i)=>{
                        return(
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.mobileno}</td>
                                <td>{i.DNAStrand1}</td>
                                <td>{i.DNAStrand2}</td>
                            </tr>
                        )
                      })
                      
                    }
                  
                    
                </tbody>
            </table>
            <Button fun={nxtbtnclick} name="Prev"/>
            <Button name="Next"/>
         </div>

    );
}
export default Searchchild