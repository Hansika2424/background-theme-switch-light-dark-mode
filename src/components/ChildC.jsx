import React from 'react'
import { useContext } from 'react'
import { ThemeContext, UserContext  } from '../App'


function ChildC() {
  const user = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);
  function handleClick() {
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  return (
    <div>
      {/* The best teacher name : {user.name} */}
     

      <button onClick={handleClick} >
        Change theme
      </button>
      <div>
        By {user.name}
      </div>
    </div>
  )
}

export default ChildC
