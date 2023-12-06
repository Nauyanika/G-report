import React, { useState} from 'react';
import { CAccordionItem ,CAccordion,CAccordionHeader,CAccordionBody,} from '@coreui/react'
import DateFnsUtils from "@date-io/date-fns"; 
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
const TrasnferPoints = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedDate1, handleDateChange1] = useState(new Date());
  return (
    <div>
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
 <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
  )
}

export default TrasnferPoints