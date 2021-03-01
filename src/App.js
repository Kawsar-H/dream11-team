import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Playerinfo from './components/Playerinfo/Playerinfo';
import Addplayer from './components/Addplayer/Addplayer';

function App() {
 const [players, setPlayers]= useState([]);
 const [addplayer, setAddplayer]=useState([]);
 useEffect(()=>{
  
   fetch('https://api.mocki.io/v1/a29fa76f')
   
   .then(res => res.json())
   .then(data =>setPlayers(data))
 }, [])
 const handleAddPlayer=(player)=>{
   const newPlayer = [...addplayer, player];
   setAddplayer(newPlayer)
 }
  return (
    <div className="App" className="container mt-5" className="justify-content-md-center">
      <header className="App-header">
        <div>
        <h1 style={{color:"red", textAlign:"center"}}>Make Your Dream-11 Team</h1>
        <h1 style={{color:"red", textAlign:"center"}}>Total Player List: {players.length}</h1>
        </div>
       
        <Addplayer addplayer={addplayer}></Addplayer>
        
          {
            
            players.map(player =><Playerinfo handleAddPlayer={handleAddPlayer} player={player}></Playerinfo>)
          }
          
      
       
      </header>
    </div>
  );
}

export default App;
