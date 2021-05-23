import React from "react"
// import ReactDOM from "react-dom"
import "./cards.css";
import datax from "./data1";


function cards()
{
 
  const rdata=datax.map((val)=>{
      
    
return(<>
          <tr>
            <td>{val.sname}</td>
            <td>{val.phone}</td>
          </tr>
  </>)
  })

 
return(
  <div className="table-div">
  <table style={{border:"2px solid black", borderCollapse:"collapse"}}>
    <tr>
         <td>name</td>
         <td>phone</td>

    </tr>
         {rdata}
  </table>
</div>

)

}

export default cards;


