import React, { useState, useEffect } from "react";
import MomentUtils from '@date-io/moment';
import DatePicker from "react-datepicker";
import { CAccordionItem ,CAccordion,CAccordionHeader,CAccordionBody,} from '@coreui/react'
import MaterialTable from "material-table";
import axios from "axios";
import moment from "moment"
import "./style/date.css"
import DateFnsUtils from "@date-io/date-fns"; 
import {  MuiPickersUtilsProvider } from '@material-ui/pickers';
function TransactionReport() {
  let apiBaseURL = "http://13.48.18.24:5000";
  const [startDate,setStartDate]=useState(null);
  const [endDate,setEndDate]=useState(null);
  const handleFromDateChange=(date)=>{
    setStartDate(date);
  }
  const handleToDateChange =(date)=>{
    setEndDate(date)
    
  }
  const handleSubmit=()=>{
    console.log('From Date:',startDate)
    console.log('To Date:',endDate)
    
  }
  const [data, setData] = useState([]); 
  const columns = [
    { title: "Serial No", render: (rowData) => rowData.tableData.id + 1 },
    { title: "UserName", field: "username" },
    { title: "User ID", field: "distributor_id" },
    { title: "Balance", field: "points",filtering:true },
    {
      title: "Transaction Date",
      render: rowData => rowData.created_at?moment(rowData.created_at).format('YYYY-M-D h:mm:ss'):'Not login yet',
      filtering:true,
    }, 
  ];
 
 
  //get Agents
  const getReports = async () => {
    await axios({
      method: "GET",
      url: `${apiBaseURL}/user/Transaction`,
      // data: user,
      // headers: {"Authorization" : `Bearer ${authToken}`}
    })
      .then(function (response) {
        if (response.data.status === 200) {
          setData(response.data.data);
        } else {
         
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getReports();
  }, []);
const datePickerStyles={
header:{
  backgroundColor:"red"
}
}
  return ( 
      <>
      
     
      <div className='div1'>
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
        dateFormat="dd MMM yyyy"             
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
 dateFormat="dd MMM yyyy"  
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
     <input type="button" onClick={handleSubmit} name="btnShowDetails"  id="btnShowDetails" value="Show Details" />
    </div>
   
                </td>
              </tr>
              <tr>
   <td>
    <div className="row" id="accor" >
   
    <CAccordion  >
  <CAccordionItem itemKey={1}>
    <CAccordionHeader >Point Transferred</CAccordionHeader>
    <CAccordionBody >
   
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Points Transferred but yet to be Received</CAccordionHeader>
    <CAccordionBody >
   
    </CAccordionBody >
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Points Received</CAccordionHeader>
    <CAccordionBody >
  
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={4}>
    <CAccordionHeader>Points Rejected</CAccordionHeader>
    <CAccordionBody >
    
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={5}>
    <CAccordionHeader>Points Cancelled</CAccordionHeader>
    <CAccordionBody >
      
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
    
      {/* <MaterialTable
        title="Points Transactions Report"
        data={data}
        columns={columns} 
      /> */}
   
      </>
  );
}
export default TransactionReport;
