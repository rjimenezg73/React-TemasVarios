import React, { useState } from 'react';
import './App.css';
import Hijo from './components/Hijo';

export const userContext = React.createContext();

function App() {

  const [ user, setUser ] = useState(null);

  const cambiaLogin = () => {
    if(user){
      setUser(null);
    }else{
      setUser({
        name: "Pedrito",
        email: "perico@delospalotes.com"
      });
    }
  }

  return (
    <userContext.Provider value={user}>
      <button onClick={cambiaLogin}>Cambia Login</button>
      <div className="App">
        <Hijo />
      </div>
    </userContext.Provider>
    
  );
}

export default App;
