import React from 'react';

const Playerinfo = (props) => {
    console.log(props);
    const{name, salary, image , national_team}=props.player;
    const playerStyle={color:"white",border:"1px solid green", margin:"10px", padding:"10px", width:"100%", backgroundColor:"gray", textAlign:"center"}
    const handleAddPlayer =props.handleAddPlayer;
    const buttunStyle={width:"150px", height:"50px", fontSize:"20px", backgroundColor:"orange", color:"white"}
    return (
        <div style={playerStyle}>
             <img src={image} alt=""/>
             <h2>Name: {name}</h2>
             <h2>National-Team: {national_team}</h2>
             <h3>Salary: {salary}</h3>
             <button style={buttunStyle} onClick={()=>handleAddPlayer(props.player)}>Buy Player</button>
            
        </div>
    );
};

export default Playerinfo;