import React , {useState} from 'react'

const OnlyData = (props) => {
    const {id,title,desc} = props.data;
    
    const [toggle , settoggle] = useState(false);
  return (
    <div key={id} style={{backgroundColor:"orange"}}>
     <p>{title}</p>
     <button onClick={()=>settoggle(!toggle)}>{toggle?"-":"+"}</button>
     <p>{toggle && desc}</p>
    </div>
  )
}

export default OnlyData
