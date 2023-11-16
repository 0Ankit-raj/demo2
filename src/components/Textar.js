import React ,{useState} from 'react'
export default function Textar(props) {
  const[text, setText]=useState(' ');
  const handlechannge=(event)=>{
    setText(event.target.value);
  }
  const clear=()=>{
    setText(" ");
  }
  const upclick=()=>{
    let y = text.toUpperCase();
    setText(y);
  }
  const lwclick=()=>{
    let z = text.toLowerCase();
    setText(z);
  }
  // const[mode, setMode]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // });
  // const changemode=()=>{
  //   if(mode.color==='black')
  //   {
  //     setMode({
  //       color: 'white',
  //       backgroundColor:'black'
  //     })
  //   }
  //   else
  //   {
  //     setMode({
  //       color: 'black',
  //       backgroundColor:'white'
  //     })
  //   }
  // }
  return (
    <div className={`bg-${props.mode}`} >
      <div className={`text-${props.mode==='dark'?'light':'dark'}`}>
      <center><h1 >Conversion</h1></center>
      </div>
        <textarea className="form-control my-3 " style={{backgroundColor : props.mode==='light'?'white':'black',color : props.mode==='light'?'black':'white' }} value={text} onChange={handlechannge} id="mybox" rows="15"></textarea>
        <button onClick={clear} className="py-3 mx-3 btn btn-primary">Clear</button>
        <button onClick={upclick} className="py-3 btn btn-primary">Convert to upper case</button>
        <button onClick={lwclick} className="py-3 mx-3 btn btn-primary">Convert to lower case</button>
    </div>
  )
  }