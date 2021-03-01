import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Playerinfo from './components/Playerinfo/Playerinfo';
import Addplayer from './components/Addplayer/Addplayer';

function App() {
 const [players, setPlayers]= useState([]);
 const [addplayer, setAddplayer]=useState([]);
 useEffect(()=>{
   fetch('https://api.mocki.io/v1/c1404665')
   
   .then(res => res.json())
   .then(data =>setPlayers(data))
 }, [])
 const handleAddPlayer=(player)=>{
   const newPlayer = [...addplayer, player];
   setAddplayer(newPlayer)
 }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Total Player List: {players.length}</h1>
       
        <Addplayer addplayer={addplayer}></Addplayer>
        
          {
            
            players.map(player =><Playerinfo handleAddPlayer={handleAddPlayer} player={player}></Playerinfo>)
          }
          
      
       
      </header>
    </div>
  );
}

export default App;
