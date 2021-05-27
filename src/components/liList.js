import React from 'react';

const liList = (props)=>{



return (

    <li >{props.text}<span className="icon" ><i className="fas fa-trash"  onClick={()=>{props.onSelect(props.id)}} ></i></span></li> 
)

}


export default liList;