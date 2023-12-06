
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// function AppSideber() {
//   const tokenData = sessionStorage.getItem("token");
//   if (!tokenData) {
//     sessionStorage.removeItem("token");
//     window.location.reload();
//   }

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar/NavBot/NavBot.css'
import '../../views/points/game.css'
const AppSideber = () => {

 

  const [show, setShow] = useState(false);
 const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);


  const logoutUser = async () =>{
    localStorage.removeItem('token-info');
}

function playGame(){
  alert("Use Microsoft InternetExplorer to play Game")
}

  useEffect(() => {
     console.log("useEffect is called")
    const tokenData = sessionStorage.getItem('token');
    if (!tokenData) {
      sessionStorage.removeItem("token");
      window.location.reload();
    }


    //get email from localstorage
    const loginEmail = sessionStorage.getItem('loginEmail');
    const roleId = sessionStorage.getItem('roleId');
     
  if (roleId == 1) {

} else if (roleId == 2) {
    
    document.getElementById("pointtransfer").style.display = "none";
} else  {
  document.getElementById("usermanagement").style.display = "none";
    document.getElementById("viewsupermaster").style.display = "none";
    document.getElementById("addsupermaster").style.display = "none";
    document.getElementById("addMasterId").style.display = "none";
    document.getElementById("viewmasterid").style.display = "none";
    document.getElementById("addplayers").style.display = "none";
    document.getElementById("playerlist").style.display = "none";
}


  }, []);


 


  /* const [role, setRole] = useState(tokenData.user.role_id);
 */  return (
  
  <div >
  <div className="navigation1">
  <ul>
    <li>
    <Link to="/" className="nav-link active" >
                
                <p >Manage My Points   </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link to="/ChildRegistration" className="nav-link active" >
                
                <p >Child Registration   </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link to="/ResetUserPassword" className="nav-link active" >
                
                <p >Change Password   </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link to="/ChangePin" className="nav-link active" >
                
                <p >PIN  </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link to="/UpdateProfile" className="nav-link active" >
                
                <p >Update Profile   </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link to="/Gamerecords" className="nav-link active" onClick={() => setLgShow(true)}  >
                
                <p style={{color:"black",fontWeight:"bold"}}>Draw Details   </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link to="#" className="nav-link active" >
                
                <p >Download Patch   </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link onClick={() => playGame()} className="nav-link active" >
                
                <p >Play Games    </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link to="/PinPassword" className="nav-link active" >
                
                <p >pin & password   </p>
              </Link>
    </li>
    <span style={{color:"#444040"}}>&nbsp;|&nbsp;</span> 
    <li>
    <Link  to="/LogOut" onClick={() => logoutUser()}  className="nav-link active" > 
                                <span  >  Logout </span>
                            </Link>
    </li>
  </ul>
</div>
<>
      
<Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{background:"blue"}}>
          <Modal.Title >
          <div class="row" id="titl">
    <div class="col-6" id="titl1">
      <h6>MESSAGE FROM FUNREP</h6>
        
    </div>
    <div class="col-6 " id="titl2">
      <h6>फनरेप की तरफ से सन्देश</h6>
      
    </div>
  </div>
         
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
  <div class="row">
    <div class="col-6 border-end" id="titl3">
      <h5 style={{color:"#800000"}}>Dearest Customer,</h5>
      <h6>It has come to our attention that there are many duplicate versions of our software running in the market.
        <br/> 
        <br/> 
        
        Many innocent players have been cheated by them. So Kindly

remember the url : <a href="funreep.vip">"www.funreep.vip/results.aspx"</a> & always check the last 5 Draw No's on this site from the one which is shown on the actual game.
<br/>
<br/>

If the Numbers do not match then you would know that you are not playing on the original funrep Website.Please be alert and do this check everytime.
<br/>
</h6>
<h6 style={{color:"black"}}>Regards funreep</h6>
    </div>
    <div class="col-6" id="tit4">
      <h5 style={{color:"#800000"}}>प्रिय ग्राह्क</h5>
      
    <h6>हमे यह पता चला हे की बाजार मे हमारे जैसे नकली गेम चल रहे हे । <br/>
    
    <br/>इन नकली गेम की वजह बहुत सारे लोगों के साथ धोखा हो रहा हे। इस समस्या के समाधान के लिए हमारे दिए हुए इस लिंक: <a href="funreep.vip">"www.funreep.vip/results.aspx"</a> पे जाकर आखिरी ५ ड्रा नम्बर को मिला ले जो आपके द्वारा खेले जा रहे हे।यदि ये नम्बर ना मिले तो समझ जाये की आप फनरेप के गेम नही खेल रहे है। 
    <br/>
    <br/>और आपके साथ धोखा हो रहा है।
    कृपया सावधान रहे और गेम के नम्बर मिला ले। <br/><br/>आभारी फनरेप <br/><a href="" variant="secondary" id="cl" onClick={handleClose} >
            Close
          </a></h6>
    
    </div>
  </div>
      
        </Modal.Body>
      </Modal>
      
    </>
</div>
   
 
      
           
            
            
           

                        
        
    
    
    
  );
}
export default AppSideber;
