import React from "react";
import Card from "./Card";

const Projects=({project})=>{
    var i=0

    return(<div id='ProjectsWrapper'>
    { 
        project.map(()=>{

        return(
         
        <Card
            key={i}
            link={project[i].link}
            name={project[i].name}
            opis={project[i].opis}
            imgP={project[i].imgP}
            technology={project[i].technology}
            type={project[i].type}
            
            >
            {i++}

        </Card>
            
            )
        }
        )
        
    }</div>)

}

export default Projects;