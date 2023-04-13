import Navbar from './Components/Navbar';
import From from './Components/From';
// import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';

import { useState } from 'react';
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
     <Navbar mode={mode} handleMode={handleMode}  title = "Deepu Vlogs" abouttext ="About Volgs" />
     <Alert alert={alert}></Alert>
   
   
    <From mode={mode} showalert={showalert}/>
    {/* <AboutUs></AboutUs> */}
  
    </>
  );
}

export default App;
