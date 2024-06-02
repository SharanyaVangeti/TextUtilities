import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React ,{useState} from 'react'

function App() {
  const[mode ,setmode]=useState('light');
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode = () => {
    // Toggle between light and dark mode
    // setmode(mode === 'light' ? 'dark' : 'light');
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#15325e";
      showAlert("Dark mode has been enabled", "success");
      document.title=("TextUtils-DarkMode")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
      document.title=("TextUtils-LightMode")
    }
  };
  return (
    <>
    <Navbar title="TextUtils"  aboutText='About' mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container" my-3="True">
    
      <TextForm heading="Try TextUtils - Enter the text to analyze below" showAlert={showAlert} mode={mode}></TextForm>
      {/* <About/> */}
      
    </div>
   
    </> 
  );
}

export default App;
