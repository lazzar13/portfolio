import React from "react";
import Card from "./Card";
const Education =({SchoolData})=>{
    var i=0
   return(<div className='schoolWrapper'>
            { 
                SchoolData.map(()=>{

                return(
                    
                <Card
                    key={i}
                    school={SchoolData[i].school}
                    year={SchoolData[i].year}
                    par={SchoolData[i].par}>
                    {i++}

                </Card>
                    
                    )
                }
                )
            }</div>)
   
   
        
            
                
           
            
       

    
}

export default Education;