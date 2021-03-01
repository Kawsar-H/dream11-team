import React from 'react';

const Addplayer = (props) => {
    const addplayer=props.addplayer;
    let totalsalary=0;
    for (let i = 0; i < addplayer.length; i++) {
        const player = addplayer[i];
        totalsalary= totalsalary + player.salary;
        
    }
    const addboxStyle={border:"4px solid red", margin:"20px", padding:"20px", backgroundColor:"green", color:"white"}
    return (
        <div style={addboxStyle}>
            <h3>Total player added: {addplayer.length}</h3>
            <h4>Total Salary : {totalsalary}</h4>
        </div>
    );
};

export default Addplayer;
