import React, { useState} from 'react';
import { CAccordionItem ,CAccordion,CAccordionHeader,CAccordionBody,} from '@coreui/react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"; 
import { Link } from "react-router-dom"
 function AppHeader() {
  const logoutUser = async () =>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("loginEmail");
    sessionStorage.removeItem("roleId");
    window.location.href='/';
}
const [selectedDate, handleDateChange] = useState(new Date());
const [selectedDate1, handleDateChange1] = useState(new Date());
return (
<>
<div className='container'>
<div class="header">
 
  <div class="logo">
  
     <img src={require("../../image/logo.png")} alt="Logo"/>
 
  </div>
 

  <div class="user-details" style={{	background:'#fff'}}>            	
   <span style={{	background:'#fff'}}>Welcome</span>
   <strong id="logout" style={{	background:'#fff'}}><em style={{	background:'#fff'}}>GIFT ID</em>&nbsp;</strong>
  </div>
  <div class="panel">
   <a href="/" title="Logout"><i class="fa-power-off">&nbsp; Logout</i></a>
  </div>
 
  
<nav><ul className="responsive_menu" id="menu4">
<li><a href="#" class="active">Reports</a><ul><li>
<a href="">Point Transfer</a></li><li>
  <a href="">Multiplayer Point Transfer</a></li></ul></li><li>
    <a href="#">Draw Details</a><ul><li><a href="">Fun Target</a></li><li>
      <a href="/Gamerecords">Fun Roullet</a></li>
      <li><a href="">Triple Fun</a></li>
      <li><a href="">Fun AB</a></li></ul></li>
      <li><a href="/">LogOut</a><ul></ul></li></ul></nav>

 
 </div>
<div className='div1'>
 <div className='container1' >
 <h2>Point Transfer</h2>
<div className='row'>
  <div>
    <form action="" method="post">
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <td>
              <div className='row-left'>
                <lable>From Date:</lable>
                {/* <DatePicker
suffixIcon={null} 
bordered={false} 
format="MMM Do, YYYY" 
defaultValue={new moment()} 
allowClear={false} 
/> */} <MuiPickersUtilsProvider utils={DateFnsUtils}>
<DatePicker id="Datepicker" value={selectedDate} onChange={handleDateChange}  style={{background:'white',padding:"1px"}}/>
   
</MuiPickersUtilsProvider>
                {/* <input type="date" data-calendar="false" /> */}
               
              </div>
              <div className='row-mid'>
                <lable>To Date:</lable>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
<DatePicker id="Datepicker" value={selectedDate1} onChange={handleDateChange1}  style={{background:'white',padding:"1px"}}/>
   
</MuiPickersUtilsProvider>
              </div>
              <div className='row-mid'>
                <lable>MemberID</lable>
                <input type="text" />
              </div>
              <div class="row-right show-details-button">
 <input type="button" name="btnShowDetails" id="btnShowDetails" value="Show Details" />
</div>

            </td>
          </tr>
          <tr>
<td>
<div className="row" id="accor" >

<CAccordion activeItemKey={2} >
<CAccordionItem itemKey={1}>
<CAccordionHeader >Point Transferred</CAccordionHeader>
<CAccordionBody >
No Record Found
</CAccordionBody>
</CAccordionItem>
<CAccordionItem itemKey={2}>
<CAccordionHeader>Points Transferred but yet to be Received</CAccordionHeader>
<CAccordionBody >
No Record Found
</CAccordionBody >
</CAccordionItem>
<CAccordionItem itemKey={3}>
<CAccordionHeader>Points Received</CAccordionHeader>
<CAccordionBody >
No Record Found
</CAccordionBody>
</CAccordionItem>
<CAccordionItem itemKey={4}>
<CAccordionHeader>Points Rejected</CAccordionHeader>
<CAccordionBody >
No Record Found
</CAccordionBody>
</CAccordionItem>
<CAccordionItem itemKey={5}>
<CAccordionHeader>Points Cancelled</CAccordionHeader>
<CAccordionBody >
  No Record Found
</CAccordionBody>
</CAccordionItem>
</CAccordion>
</div>
</td>
</tr>
        </tbody>
      </table>
    </form>
  </div>
</div>

  </div>

  <div class="bar-chart">
   <img src={require("../../image/login-bar-chart.png")} alt="Bar Chart"/>
  </div>
 <footer style={{background:"#16b2c3"}}>
   <div class="copyright" >All rights reserved. © Copyright 2014.</div>
  </footer>
  </div>
 </div>
</>
);
}
export default AppHeader