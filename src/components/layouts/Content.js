import React from 'react'
import "./Content.js"
import AppContents from './AppContents.js'
const Content = () => {
  return (
    <div className='container'>
       <div className='div1'>
     <div className='container1' style={{background:"#b3b3b3"}}>
    <AppContents/>
    
     <div class="bar-chart">
       <img src={require("../../image/login-bar-chart.png")} alt="Bar Chart"/>
      </div>
   
      </div>
    
     
     <footer style={{background:"#16b2c3"}}>
       <div class="copyright" >All rights reserved. © Copyright 2014.</div>
      </footer>
      </div> 
    </div>
    
  )
}

export default Content