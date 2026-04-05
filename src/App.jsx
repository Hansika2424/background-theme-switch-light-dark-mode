import React from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA';
import { useState } from 'react';
import './App.css'
// step1 create context
const UserContext = createContext();
//step2 wrap all the child inside a provider
//step3 pass value
//step4 consumer k andar jaake consume krlo


const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"love"});
  const [theme, setTheme] = useState('light');
  
  return (
    // <div>
    //   <ChildA/>
    // </div>

    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA/>
    //   </UserContext.Provider>
    // </>

    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme, setTheme}}>
        
        <div  id='container' style={{backgroundColor:theme==='light' ? 'beige' : 'black', color:theme==='light' ? 'black' : 'beige'} }  >
          <ChildA/>
        </div>
      </ThemeContext.Provider>
      </UserContext.Provider>
      
    </>



    
  )
}

export default App
export {UserContext}

export {ThemeContext}
