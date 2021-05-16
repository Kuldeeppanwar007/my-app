import React from 'react'
// import {Route} from 'react-router-dom'

// import { NavLink } from 'react-router-dom'

   const time = new Date().getHours().toLocaleString();
//    time = 10;

   
   var great = "hy";
   var color = {};

   if(time >= 1 && time <= 11 )
   {
       great = "good morning";
       color= "green";
    }
    else if(time >=12 && time <20)
    {
        great = "good afternoon";

        color = "orange"; 
       
    }
    else{
       great = "good night (shubhratri)";  
       color = "black";

   }






function Greating() {
  return (
    <>
    <div className="grate">
      <h1 style={{backgroundColor:"lightblue",display:"inline"}}> hey dear, <span style={{color}}>{great}</span></h1>
      </div>
    </>
  )
}

export default Greating
