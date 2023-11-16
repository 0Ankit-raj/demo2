import "./App.css";
import Navbar from "./components/Navbar";
import Textar from "./components/Textar";
import React,{useState} from 'react'
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light')
  const togglemode = () =>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title = "TextVerse" mode = {mode} togglemode = {togglemode} />
    <div className="container">
    {/* <Routes> */}
    {/* <Route path="/" element={<Textar mode = {mode} />}/>  */}
		{/* <Route path="/about" element={<Navbar title = "TextVerse" x = "About" mode = {mode} togglemode = {togglemode} />}/>  */}
	  {/* </Routes> */}
    <Textar mode = {mode} />
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}
export default App;