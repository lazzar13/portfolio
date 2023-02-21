import React, {useEffect, useState } from "react";
import Navbar from "../containers/navbar";
import './App.css';
import Content from "../containers/Content";
import Profile from "../containers/Profile";
import Education from "../containers/Education";
import Experience from "../containers/Experience";
import {SchoolData} from "../containers/SchoolData.js"
import { ExperienceData } from "../containers/ExperienceData";
import 'tachyons'
import { Skills } from "../containers/Skills";
import Projects from "../containers/Projects";
import { project } from "../containers/project";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import react from '../containers/src/background.png'
import education from '../containers/src/education.png'
import skills from '../containers/src/skills.png'
import experience from '../containers/src/experience.png'
import background2 from '../containers/src/background2.png'
import exp from '../containers/src/background2experiment.png'
import layeriza from '../containers/src/layeriza.png'

function App(){
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3500)
    
    
  },[])
  
    document.title='{Lazar Banic}'
  return (<div className="App">
    {
      loading?
      /*<CircleLoader color="#a09edd" loading={loading} size={180} className='lod'/>*/
      <div className="bgrclass"><div className="planet"></div></div>
    :<Parallax pages={4.5}>
    
   <ParallaxLayer className='layerIza' offset={1} speed={1} factor={1} style={{backgroundImage:`url(${layeriza})`, backgroundSize:'cover'}} >
    </ParallaxLayer><ParallaxLayer className='paraMedia' offset={1.999999} speed={2.3} factor={4} style={{backgroundImage:`url(${experience})`, backgroundSize:'cover'}}>
    </ParallaxLayer>
    <ParallaxLayer className='paraMedia' offset={2.999}  speed={-2.999} factor={3} style={{backgroundImage:`url(${education})`, backgroundSize:'cover'}}>
    </ParallaxLayer>
    
     <ParallaxLayer className='zvezde' speed={8} offset={0} factor={3}></ParallaxLayer>
    
    <ParallaxLayer className='paraSkills' offset={0.9} speed={3.7} factor={3} style={{backgroundSize:'cover'}}>
    </ParallaxLayer>
    <ParallaxLayer className='paraMedia' offset={0.9999} speed={0.5}>
      <Content Skills={Skills}></Content>
    </ParallaxLayer>
    
    <ParallaxLayer className='planine' speed={2} offset={0} factor={1.6} > 
    <Profile></Profile>
    </ParallaxLayer>
    
    <ParallaxLayer className='paraMedia' offset={1.5} speed={2} >
    <Education SchoolData={SchoolData}></Education>
    </ParallaxLayer>
    <ParallaxLayer className='paraMedia' offset={2.1} speed={0.5}>
      <Experience ExperienceData={ExperienceData}></Experience>

    </ParallaxLayer>
    <ParallaxLayer className='paraMedia' offset={3} speed={0.5}>
    <Projects project={project}></Projects>
    </ParallaxLayer>
    </Parallax>
    
    
    
    
    
    }
    <Navbar></Navbar></div>
  ) 
}

export default App;
