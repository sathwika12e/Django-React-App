import Button from "./Button";
import { useRef } from "react";
import axios from "axios"
import '../Css/Login.css'

function ReusableComponent(props){
    let name=useRef();
    let mobileno=useRef();
    let DNAStrand1=useRef();
    let DNAStrand2=useRef();
    
    let post_btn_click=()=>{
        let data={
        name:name.current.value,
        mobileno:mobileno.current.value,
        DNAStrand1:DNAStrand1.current.value,
        DNAStrand2:DNAStrand2.current.value
    }
        let post_url=props.url
        axios.post(post_url,data).then((resp)=>{
           alert(resp.status)
           console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
      

    }


    return(
       <div className="addparent-div">
            <input className="input" ref={name} placeholder="name" type="text"/>
             <input className="input" ref={mobileno} placeholder="mobileno" type="text"/>
              <input className="input" ref={DNAStrand1} placeholder="DNAStrand1" type="text"/>
               <input className="input" ref={DNAStrand2} placeholder="DNAStrand2" type="text"/>
               <Button fun={post_btn_click} name="submit"/>

        </div>
    );
}
export default ReusableComponent;