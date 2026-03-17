
import '../Css/Login.css'
import ReusableComponent from "./ReusableComponent";
function Addparent(){
    let ur="http://127.0.0.1:8000/api/parentapi/"
    return(
<ReusableComponent url={ur}/>
    )
}
export default Addparent;