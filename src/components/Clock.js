import React, { useState } from 'react';






const Clock = ()=>{
     
    // const State = useState();
    let time = new Date().toLocaleTimeString();
    let [Time , setCount] = useState(time);
    // let count = 0;
    const uptime = ()=>{
        // console.log(time);
        let time = new Date().toLocaleTimeString();
        setCount(time)
    }
    setInterval(uptime , 1000);

    return(


        < >
          
            <span style={{color:'white'}}>{Time}</span>
             

        </>

    )
}


export default Clock;