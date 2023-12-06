import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import "../../style/Contact.css";
import axios from "axios";
 
import Swal from "sweetalert2";


function PointTransferred() 
{
   let apiBaseURL = "http://13.48.18.24:5000";
   // let apiBaseURL = "http://13.48.18.24:5000";
  
    const [destriData, setDestriData] = useState([]);
    const [values, setValues] = useState({
      distributor_id: "",
      points: "",
      passcode: "1234",
    });
   
    const TokenData = sessionStorage.getItem("token");
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { distributor_id, points, passcode } = values;
      const data = { distributor_id, points, pin: passcode };
      await fetch(`${apiBaseURL}/api/users/sendPoints`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenData}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) { 
            setValues({
              distributor_id: "",
              points: "",
              passcode: "",
            });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Points transfered",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            if (data.status == 401) {
              sessionStorage.removeItem("token");
              window.location.reload();
            } else {
              Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Oops...",
                text: `${data.message} !`,
                showConfirmButton: false,
                timer: 1700,
              });
            }
          }
        })
        .catch((error) => {
          Swal.fire(`Something Went wrong!`, "error");
        });
    };
  
    //get Agents
    const getAgents = async () => {
      await axios
        .get(`${apiBaseURL}/api/users/agents`)
        .then(function (response) {
          if (response.data.status === 200) {
            setDestriData(response.data.data);
          }
        })
        .catch(function (error) {
          Swal.fire(`Something Went wrong!`, "error");
        });
    };
  
    const handleChange = (name) => (e) => {
      setValues({ ...values, [name]: e.target.value });
    };
    useEffect(() => {
     // getAgents();
    }, []);
  
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedDate1, handleDateChange1] = useState(new Date());
  return (
    <>
    <div class="row">
      <div class="col-md-8">
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
                   
                    <DatePicker selected={startDate} 
        dateFormat="dd/MMM/yyyy"             
 onChange={handleFromDateChange}
 calendarClassName="custom-datrpicker"
 selectsStart
        startDate={startDate}
        endDate={endDate}
 />
                   
                  </div>
                  <div className='row-mid'>
                    <lable>To Date:</lable>
                    <DatePicker selected={endDate} 
 onChange={handleToDateChange}
 dateFormat="dd/MMM/yyyy"  
 calendarClassName="custom-datrpicker"
 selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
 />
    
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
       <img src={require("../image/login-bar-chart.png")} alt="Bar Chart"/>
      </div>
     <footer style={{background:"#16b2c3"}}>
       <div class="copyright" >All rights reserved. © Copyright 2014.</div>
      </footer>
      </div>
        </div></div>
    </>
   
  )
}
  
export default PointTransferred
