import React from 'react'
import "../../../style/Login.css"
const Nav = () => {
  const agentLogin = sessionStorage.getItem("loginEmail");
        const log = async () =>{
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("loginEmail");
          sessionStorage.removeItem("roleId");
          window.location.href='/';
      }
  return (
    <>
    <div className='container'>
    <div class="header">
      
       <div class="logo">
       
            <img src={require("../../../image/logo.png")} alt="Logo"/>
      
       </div>
      
 
       <div class="user-details" style={{	background:'#fff'}}>            	
        <span style={{	background:'#fff'}}>Welcome</span> <></>
        <strong id="logout" style={{	background:'#fff'}}><em style={{	background:'#fff'}}>{agentLogin}</em>&nbsp;</strong>
       </div>
       <div class="panel">
        <a href="/" title="Logout"><i class="fa-power-off">&nbsp; Logout</i></a>
       </div>
      
       
  <nav><ul className="responsive_menu" id="menu4">
   <li><a href="#" class="active">Reports</a><ul><li>
     <a href="/">Point Transfer</a></li><li>
       <a href="/MultipointTransfer">Multiplayer Point Transfer</a></li></ul></li>
       <li>
         <a href="#">Draw Details</a>
         <ul>
            <li><a href="/FunTarget">Fun Target</a></li>
            <li>
           <a href="/FunRoullet">Fun Roullet</a></li>
           <li><a href="/TripleFun">Triple Fun</a></li>
           <li><a href="/FunAB">Fun AB</a></li></ul></li>
           <li><a href="/" onClick={() => log()}  >LogOut</a><ul></ul></li></ul></nav>
 
      
      </div>
      </div>
      
    </>
    
  )
}

export default Nav