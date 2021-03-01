import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Playerinfo = (props) => {
    console.log(props);
    const{name, salary, image , national_team}=props.player;
    const playerStyle={color:"white",border:"1px solid green", margin:"10px", padding:"10px", backgroundColor:"gray", textAlign:"center"}
    const handleAddPlayer =props.handleAddPlayer;
    const buttunStyle={width:"150px", height:"50px", fontSize:"20px", backgroundColor:"orange", color:"white", borderRadius:"5px"}
    return (
        <div style={playerStyle} >
             <img src={image} className="img-thumbnail" alt=""/>
             <h2>Name: {name}</h2>
             <h2>National-Team: {national_team}</h2>
             <h3>Salary: ${salary}</h3>
             <button className="btn btn-warning" style={buttunStyle} onClick={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserAlt} /> Buy Player</button>
            
        </div>
    );
};

export default Playerinfo;