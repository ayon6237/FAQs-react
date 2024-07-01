import React from 'react'
import Data from './Data'
import OnlyData from './OnlyData';

const Toggle = () => {
  

    
  return (
    <div style={{margin:"1rem" , textAlign:"center", padding:"20px"}}>
     {Data.map((data)=> <OnlyData key={data.id} data={data}/>)}
        
      
    </div>
  )
}

export default Toggle
