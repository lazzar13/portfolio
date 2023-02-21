import React from "react";
import Card from "./Card";

const Experience =({ExperienceData})=>{
    var i=0

    return(<div className='ExperienceWrapper'>
    { 
        ExperienceData.map(()=>{

        return(
            
        <Card
            key={i}
            name={ExperienceData[i].name}
            company={ExperienceData[i].company}
            par={ExperienceData[i].par}
            link={ExperienceData[i].link}
            year={ExperienceData[i].year}
            yearTo={ExperienceData[i].yearTo}>
            {i++}

        </Card>
            
            )
        }
        )
    }</div>)

    }
export default Experience;