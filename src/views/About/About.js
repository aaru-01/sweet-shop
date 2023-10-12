import React from 'react'
import config from './../../utils/config.json';
import "./About.css";

const FOOTER_NOTE = "Developed by Aaru"

function About() {
  return (
    <div className='container' style={{ backgroundColor: config.theme.accentColor }}>
      <h1 className='text-center' style={{ color: config.theme.primaryColor }}>{config.title}</h1>
 <br/>     <p className='text-center'>{config.description}</p>

      <h2 className='text-center'style={{color: config.theme.accentColor}}>Services</h2>
      <div style={{display: 'flex', flexDirection:config.serviceCardDirection}}>
      {
        config.services.map((serviceData, index) => {
          const { title, description, price } = serviceData
          return (
            <div className='card m-3' key={index} style={{maxWidth:config.serviceCardDirection==="row" ? "200px" : "100%"}}>
              <div className='card-body'>
                <h3 className='card-title' style={{color: config.theme.secondaryColor}}>{title}</h3>
                <p className='card-text'>{description}</p>
                <p className='card-text'>Price: {price}</p>
              </div>
            </div>
          )
        })
      }
    </div>
   <div>
    <p className='text-center'>{FOOTER_NOTE}</p>
   </div>
    </div>



  )
}

export default About