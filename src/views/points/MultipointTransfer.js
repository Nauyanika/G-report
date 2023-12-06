import React, { useState, useEffect } from "react";
import MomentUtils from "@date-io/moment";
import DatePicker from "react-datepicker";
import {
  CAccordionItem,
  CAccordion,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import MaterialTable from "material-table";
import axios from "axios";
import "../Dashboard/Home.css";
import moment from "moment";
// import "./style/date.css"
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Table,
  TableBody,
  TableRow,
} from "@material-ui/core";
function MultipointTransfer() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tableData1, setTableData1] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  const [tableData3, setTableData3] = useState([]);
  const [tableData4, setTableData4] = useState([]);
  const [tableData5, setTableData5] = useState([]);

  const [error1, setError1] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const handleFromDateChange = (date) => {
    setStartDate(date);
  };
  const handleToDateChange = (date) => {
    setEndDate(date);
  };

  const handleFetchData = async () => {
    try {
      const response1 = await axios.post(
        "http://13.48.18.24:5000/user/PointTransferfilterData",
        {
          fromDate,
          toDate,
        }
      );
      if (response1.data.length === 0) {
        setError1("No Record Found");
        setTableData1(!response1.data);
      } else {
        setTableData1(response1.data);
        setError1("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response3 = await axios.post(
        "http://13.48.18.24:5000/user/PointTransferfilterData",
        {
          fromDate,
          toDate,
        }
      );
      if (response3.data.length === 0) {
        setError3("No Record Found");
        setTableData3(!response3.data);
      } else {
        setTableData3(response3.data);
        setError3("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response4 = await axios.post(
        "http://13.48.18.24:5000/user/PointRejectedfilterData",
        {
          fromDate,
          toDate,
        }
      );
      if (response4.data.length === 0) {
        setError4("No Record Found");
        setTableData4(!response4.data);
      } else {
        setTableData4(response4.data);
        setError4("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response5 = await axios.post(
        "http://13.48.18.24:5000/user/PointCancelfilterData",
        {
          fromDate,
          toDate,
        }
      );
      if (response5.data.length === 0) {
        setError5("No Record Found");
        setTableData5(!response5.data);
      } else {
        setTableData5(response5.data);
        setError5("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const filterData = async () => {
  //   const response1 = await fetch(
  //     "http://13.48.18.24:5000/user/PointTransferfilterData"
  //   );
  //   const data1 = await response1.json();
  //   setTableData1(data1);

  //   const response2 = await fetch(
  //     "http://13.48.18.24:5000/user/PointReceivefilterData"
  //   );
  //   const data2 = await response2.json();
  //   setTableData1(data2);
  // };
  return (
    <>
      <div className="div1">
        <h2>Multiplayer Point Transfer</h2>

        <div className="row">
          <div>
            <form action="" method="post">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <div className="row-left">
                        <lable>From Date:</lable>
                        <DatePicker
                          selected={fromDate}
                          onChange={(date) => setFromDate(date)}
                          dateFormat="dd MMM yyyy"
                          calendarClassName="custom-datrpicker"
                          selectsFrom
                          fromDate={fromDate}
                          toDate={toDate}
                        />
                        {/* <DatePicker selected={startDate} 
        dateFormat="dd MMM yyyy"             
 onChange={handleFromDateChange}
 calendarClassName="custom-datrpicker"
 selectsStart
        startDate={startDate}
        endDate={endDate}
        
 />   */}
                        {/* <input
 type="date"
 value={fromDate}
 onChange={(e) => setFromDate(e.target.value)}
/> */}
                      </div>
                      <div className="row-mid">
                        <lable>To Date:</lable>
                        {/* <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      /> */}
                        {/* <DatePicker selected={endDate} 
 onChange={handleToDateChange}
 dateFormat="dd MMM yyyy"  
 calendarClassName="custom-datrpicker"
 selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
       
 />  */}
                        <DatePicker
                          selectsTo
                          selected={toDate}
                          fromDate={fromDate}
                          toDate={toDate}
                          minDate={fromDate}
                          onChange={(date) => setToDate(date)}
                          dateFormat="dd MMM yyyy"
                          calendarClassName="custom-datrpicker"
                        />
                      </div>
                      <div className="row-mid">
                        <lable>MemberID</lable>
                        <input type="text" />
                      </div>
                      <div class="row-right show-details-button">
                        <input
                          type="button"
                          onClick={handleFetchData}
                          name="btnShowDetails"
                          id="btnShowDetails"
                          value="Show Details"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="row" id="accor">
                        <CAccordion>
                          <CAccordionItem itemKey={1}>
                            <CAccordionHeader>
                              Multiplayer Point Transfer
                            </CAccordionHeader>
                            <CAccordionBody>
                              {error1 && (
                                <div style={{ color: "black" }}>{error1}</div>
                              )}
                              {tableData1.length > 0 && (
                                <TableContainer component={Paper}>
                                  <Table>
                                    <TableHead>
                                      <TableRow
                                        style={{
                                          backgroundColor: "rgb(32 183 201)",
                                          color: "white",
                                          textAlign: "center",
                                        }}
                                      >
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          FromUser
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          ToUser
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Amount
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          TransactionData
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {tableData1.map((row, index) => (
                                        <TableRow
                                          key={index}
                                          style={{
                                            backgroundColor:
                                              index === 0 || index === 2
                                                ? "#cfe2ff"
                                                : "white",
                                            padding: "0px",
                                          }}
                                        >
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.FromUser}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.ToUser}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.Amount}
                                          </TableCell>

                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.TransactionData}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              )}
                            </CAccordionBody>
                          </CAccordionItem>
                          <CAccordionItem itemKey={2}>
                            <CAccordionHeader>
                              Multiplayer Points Transferred But yet to be
                              Received
                            </CAccordionHeader>
                            <CAccordionBody></CAccordionBody>
                          </CAccordionItem>
                          <CAccordionItem itemKey={3}>
                            <CAccordionHeader>
                              Mulitiplayer Points Received
                            </CAccordionHeader>
                            <CAccordionBody>
                              {error3 && (
                                <div style={{ color: "black" }}>{error3}</div>
                              )}

                              {tableData3.length > 0 && (
                                <TableContainer component={Paper}>
                                  <Table>
                                    <TableHead>
                                      <TableRow
                                        style={{
                                          backgroundColor: "rgb(32 183 201)",
                                          color: "white",
                                          textAlign: "center",
                                        }}
                                      >
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          FromUser
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          ToUser
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Amount
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          TransactionData
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {error3 && (
                                        <div style={{ color: "black" }}>
                                          {error3}
                                        </div>
                                      )}
                                      {tableData3.map((row, index) => (
                                        <TableRow
                                          key={index}
                                          style={{
                                            backgroundColor:
                                              index === 0 || index === 2
                                                ? "#cfe2ff"
                                                : "white",
                                            padding: "0px",
                                          }}
                                        >
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.FromUser}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.ToUser}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.Amount}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.TransactionData}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              )}
                            </CAccordionBody>
                          </CAccordionItem>
                          <CAccordionItem itemKey={4}>
                            <CAccordionHeader>
                              Mulitiplayer Points Rejected
                            </CAccordionHeader>
                            <CAccordionBody>
                              {error4 && (
                                <div style={{ color: "black" }}>{error4}</div>
                              )}
                              {tableData4.length > 0 && (
                                <TableContainer component={Paper}>
                                  <Table>
                                    <TableHead>
                                      <TableRow
                                        style={{
                                          backgroundColor: "rgb(32 183 201)",
                                          color: "white",
                                          textAlign: "center",
                                        }}
                                      >
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Amount
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          date
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>

                                    <TableBody>
                                      {tableData4.map((row, index) => (
                                        <TableRow
                                          key={index}
                                          style={{
                                            backgroundColor:
                                              index === 0 || index === 2
                                                ? "#cfe2ff"
                                                : "white",
                                            padding: "0px",
                                          }}
                                        >
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.Amount}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.date}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              )}
                            </CAccordionBody>
                          </CAccordionItem>
                          <CAccordionItem itemKey={5}>
                            <CAccordionHeader>
                              Mulitiplayer Points Cancelled
                            </CAccordionHeader>
                            <CAccordionBody>
                              {error5 && (
                                <div style={{ color: "black" }}>{error5}</div>
                              )}
                              {tableData5.length > 0 && (
                                <TableContainer component={Paper}>
                                  <Table>
                                    <TableHead>
                                      <TableRow
                                        style={{
                                          backgroundColor: "rgb(32 183 201)",
                                          color: "white",
                                          textAlign: "center",
                                        }}
                                      >
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Tranferred_to
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Type
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Amount
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Cancel_time
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {tableData5.map((row, index) => (
                                        <TableRow
                                          key={index}
                                          style={{
                                            backgroundColor:
                                              index === 0 || index === 2
                                                ? "#cfe2ff"
                                                : "white",
                                            padding: "0px",
                                          }}
                                        >
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.Tranferred_to}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.Type}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.Amount}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.Cancel_time}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              )}
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
export default MultipointTransfer;
