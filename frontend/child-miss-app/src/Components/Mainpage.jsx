import {Route,Routes} from 'react-router-dom'
import Login from './Login';
import Addchild from './Addchild';
import Addparent from './Addparent';
import Searchchild from './Searchchild';
import Searchparent from './Searchparent';

function Mainpage(){
    return(

        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/addparent" element={<Addparent/>}></Route>
            <Route path="/searchparent" element={<Searchparent/>}></Route>
            <Route path="/addchild" element={<Addchild/>}></Route>
            <Route path="/searchchild" element={<Searchchild/>}></Route>
        </Routes>
    
    );
}
export default Mainpage;