import React,{useState, Navigate} from "react";
import cer from './src/certificate.png'


const Card=({school,year,par,name,yearTo,link,company,certificate,img,imgP,opis,technology,type})=>{
    //skills
    if(img){
      if(certificate){
       return(<div className="skillsCard" >
            <span><h3 className="skillsText">{name}</h3></span>
            <span><img src={img} className='schoolImg'></img></span>
            <span><img src={cer} className='cerImg'></img></span>
        </div>)}
        else{
            return(<div className="skillsCard">
            <span><h3 className="skillsText">{name}</h3></span>
            <span><img src={img} className='schoolImg'></img></span>
        </div>) 
        }
    }
    //school
    else if(school){
    return(
            <div className='schoolCard'>
            <span><h2 style={{textAlign:'center'}}>{school}</h2></span>
            <p style={{textAlign:'center'}} id="skills" >{'('}{year}{')'}</p>
            <p >{par}</p>
            </div>
            
            
    )}
    //projects
    else if(type){
        return(
            <div id='ProjectsCard'>
            <div style={{}}>
            <img src={imgP} style={{maxHeight:'120px',MaxWidth:'100%',borderRadius:'14px'}}></img>
            <div style={{textAlign:'center',marginTop:'5px'}}><span><img src={type} style={{maxHeight:'30px',MaxWidth:'100%'}}></img></span>
            <span><img src={technology} style={{maxHeight:'30px',MaxWidth:'100%',paddingLeft:'5px'}}></img></span></div>
            </div>
            <div>
            <span><h3 style={{height:'35px',marginTop:'0px',paddingLeft:'5px'}}>{name}</h3></span>
            <span><p style={{height:'50px',marginTop:'10px',paddingLeft:'5px'}}>{opis}</p></span></div>
            
            
            </div>
        )
    }
    //experience
    else{
        return(
        <div className="ExperienceCard"><span className="exp">
        <span><p className="exp1">{'function '+name+'(){'}</p>
        <p className="exp2">{'const company= "'+company+'";'}</p></span>
        <span><p className="exp3">{'cont year=["'+year+'","'+yearTo+'"];'}</p></span>
        <p className="exp4">{"return(<div> "}</p>
        <p className="exp5">{"<p>"+par+"<p>"}</p> 
        <p className="exp4">{"</div>)}"}</p></span></div>)
    }
}

export default Card;