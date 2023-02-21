import React from "react";
import Card from "./Card";

const Content=({Skills})=>{
    var i=0

    return(<div className='skillsWrapper'>
    { 
        Skills.map(()=>{

        return(
         
        <Card
            key={i}
            name={Skills[i].name}
            certificate={Skills[i].certificate}
            img={Skills[i].img}
            >
            {i++}

        </Card>
            
            )
        }
        )
        
    }</div>)

}

export default Content;