import ReusableComponent from "./ReusableComponent";
function Addchild(){
   let ur="http://127.0.0.1:8000/api/childapi/"
  
    return(
<ReusableComponent url={ur}/>
    
    );
}
export default Addchild;