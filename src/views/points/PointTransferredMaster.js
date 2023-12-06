import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CAccordionItem ,CAccordion,CAccordionHeader,CAccordionBody,} from '@coreui/react'
import "../../style/Contact.css";
import axios from "axios";
import DateFnsUtils from "@date-io/date-fns"; 
import Swal from "sweetalert2";


function PointTransferredMaster() 
{
    let apiBaseURL = "http://13.48.18.24:5000";
  // let apiBaseURL = "http://13.48.18.24:5000";
  
    const [destriData, setDestriData] = useState([]);
    const [values, setValues] = useState({
      id: "",
      points: 0,
      
    });
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedDate1, handleDateChange1] = useState(new Date());

    const TokenData = (sessionStorage.getItem("token"));
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { id, points, passcode } = values;
      const data = { id, points, pin: passcode };
      await fetch(`${apiBaseURL}/user/sendMasterIdPoints`, {
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
              id: "",
              points: 0,
              
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
        .get(`${apiBaseURL}/user/getMasterIdData`)
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
      getAgents();
    }, []);
  
    return (
        <div>
        const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedDate1, handleDateChange1] = useState(new Date());
  return (
    <div>
     
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
   

          </div>
    );
  }
  
export default PointTransferredMaster
