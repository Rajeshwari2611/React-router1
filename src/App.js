
import React ,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode]=useState('dark'); //whether dark mode is enable or not
  const[alert,setAlert]=useState('');

  const showAlert=(message, type)=>{
   setAlert({
     msg:message,
     type:type
    })
  }
  return (
 <>
{ /*<Router>*/}
 {/*<Navbar title="Textutils" aboutText="About Text"/>*/}
  {/*<Navbar/> */}
 <Navbar title="Textutils" mode={mode}/>
 <Alert alert={alert}/>
<div className="container my=3">
{ /*<Routes>*/}
{ /*<Route path="/" element={<TextForm />}>*/}
{ /* </Route>*/}
{ /*<Route path="/about" element={<About />} >*/}
{ /*</Route>*/}
{ /*</Routes>*/}
<TextForm  showAlert={showAlert} heading='Enter the text to Analyze' mode={mode} />


      </div>
      { /*</Router>*/}
  
  </>
  ); 
  
}

export default App;
