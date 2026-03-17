import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/footer';
import Mainpage from './Components/Mainpage';
import './App.css'
import { createContext } from "react";
export let mycontext=createContext();
import { useState } from 'react';
function App() {
  let[isloggedin,setIsloggedin]=useState(false)
  return (
<div className='app'>
  <mycontext.Provider value={[isloggedin,setIsloggedin]}> 
  <Header/>
  <Sidebar/>
 < Mainpage/>
 <Footer/>
  </mycontext.Provider>
</div>
  );
 
}
export default App
