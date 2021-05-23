import React from 'react'
import covidata from './covidata';

// console.log(responseJson);
// const response = fetch('https://api.rootnet.in/covid19-in/stats/latest');
// // const responseJson = response.json();
// var jsonData = JSON.stringify(response);

// var fs = require('fs');
// var express = require("express")

// fs.writeFile("data.txt", jsonData, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });

// console.log(jsonData);


// console.log(jsonData);




   
  
   
//   console.log(response);
// const covi = [coviddata]




const totalCase = covidata.data.summary.total

function covid(){
   
    
    
    
    
        
    return(
        <>
        <h1>hy i am covid-19 is  {totalCase}</h1>
        </>
    )
}
export default covid