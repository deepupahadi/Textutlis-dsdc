import Navbar from './Components/Navbar';
import From from './Components/From';
import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import Contact from './Components/Contact';

import { useState } from 'react';

// import { BrowserRouter, Route,  Routes,} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  // alert............

  const [alert,setAlert] = useState(null);

  const showalert = (type, message) => {
    setAlert({type:type, message:message})
    setTimeout(() => {
      setAlert(null)
      
    }, 2000);
  }; 
  const handleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert('success', 'light mode is enabled');
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showalert('success', 'dark mode is enabled');
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
     <Navbar mode={mode} handleMode={handleMode}  title = "Deepu Vlogs" abouttext ="About Volgs" />
     <Alert alert={alert}></Alert>
   {/* <Routes> */}
   {/* <Route path='/' element={<From showalert={showalert}mode={mode} />}
   />
    <Route path='/about' element={<AboutUs />}/>
    <Route path='/contact' element={<Contact />}/> */}
 <From></From>
    {/* </Routes>
  </BrowserRouter> */}
    </>
  );
}

export default App;
