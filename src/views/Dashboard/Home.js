import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import {
  CAccordionItem,
  CAccordion,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import axios from "axios";
import "./Home.css";
import moment from "moment";
// import "./style/date.css"
import {
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Table,
  TableBody,
  TableRow,
} from "@material-ui/core";

function TransactionReport() {
  let apiBaseURL = "http://13.48.18.24:5000";
  const [data, setData] = useState(null)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tableData1, setTableData1] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  const [tableData3, setTableData3] = useState([]);
  const [tableData4, setTableData4] = useState([]);
  const [tableData5, setTableData5] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const handleFromDateChange = (date) => {
    setStartDate(date);
  };
  const handleToDateChange = (date) => {
    setEndDate(date);
  };
  const agentLogin = sessionStorage.getItem("loginEmail");



  const handleFetchData = async () => {
    let emailId = sessionStorage.getItem("loginEmail");

    try {
      const response1 = await axios.post(
        `${apiBaseURL}/user/PointTransferData`,
        {
          ToUser: emailId,
          fromDate: fromDate,
          toDate: toDate,
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
      const response2 = await axios.post(
        `${apiBaseURL}/user/pendingReceive`,
        {
          ToUser: emailId,
          fromDate: fromDate,
          toDate: toDate,
        }
      );

      if (response2.data.length === 0) {
        setError1("No Record Found");
        setTableData2(!response2.data);
      } else {
        setTableData2(response2.data);
        setError2("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }



    try {
      const response3 = await axios.post(
        `${apiBaseURL}/user/PointReceiveData`,
        {
          ToUser: emailId,
          fromDate: fromDate,
          toDate: toDate,
        }
      );
      if (response3.data.length === 0) {
        setError3("No Record Found");
        setTableData3([]);
      } else {
        setTableData3(response3.data);
        setError3("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }


    try {
      const response4 = await axios.post(
        `${apiBaseURL}/user/rejectedPoint`,
        {
          ToUser: emailId,
          fromDate: fromDate,
          toDate: toDate,
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
        `${apiBaseURL}/user/PointCancelData`,
        {
          ToUser: emailId,
          fromDate: fromDate,
          toDate: toDate,
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


  return (
    <>
      <div className="div1">
        <h2>Point Transfer</h2>

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
                      </div>
                      <div className="row-mid">
                        <lable>To Date:</lable>

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
                              Point Transferred
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
                                          Sr.No.
                                        </TableCell>


                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Transferred To
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
                                          Transfer Time
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
                                            {index + 1}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.ToAccountName}
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
                                            {row.Date}
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
                              Points Transferred but yet to be Received
                            </CAccordionHeader>
                            <CAccordionBody>
                              {error2 && (
                                <div style={{ color: "black" }}>{error2}</div>
                              )}
                              {tableData2.length > 0 && (
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
                                          Transfer Time
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {tableData2.map((row, index) => (
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
                                            {row.FromAccountName}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.ToAccountName}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.point}
                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.createdat}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              )}
                            </CAccordionBody>
                          </CAccordionItem>
                          <CAccordionItem itemKey={3}>
                            <CAccordionHeader>Points Received</CAccordionHeader>
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

                                          Sr.No.

                                        </TableCell>


                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Received From
                                        </TableCell>
                                        {/* <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          ToUser
                                        </TableCell> */}
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
                                          Received Date
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
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

                                            {index + 1}

                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.FromAccountName}
                                          </TableCell>
                                          {/* <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.ToAccountName}
                                          </TableCell> */}
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
                                            {row.Date}
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
                            <CAccordionHeader>Points Rejected</CAccordionHeader>
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

                                          Sr.No.

                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Rejected To
                                        </TableCell>
                                        {/* <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          ToUser
                                        </TableCell> */}
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
                                          Rejected Date
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

                                            {index + 1}

                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.FromAccountName}
                                          </TableCell>
                                          {/* <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.ToAccountName}
                                          </TableCell> */}
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
                                            {row.RejectionDate}
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
                              Points Cancelled
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
                                        {/* <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          FromUser
                                        </TableCell> */}
                                        <TableCell

                                          style={{

                                            color: "white",

                                            textAlign: "center",

                                          }}

                                        >

                                          Sr.No.

                                        </TableCell>
                                        <TableCell
                                          style={{
                                            color: "white",
                                            textAlign: "center",
                                          }}
                                        >
                                          Cancelled To
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
                                          Cancelled Date
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
                                          {/* <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.FromAccountName}
                                          </TableCell> */}
                                          <TableCell

                                            style={{

                                              padding: "0px",

                                              textAlign: "center",

                                            }}

                                          >

                                            {index + 1}

                                          </TableCell>
                                          <TableCell
                                            style={{
                                              padding: "0px",
                                              textAlign: "center",
                                            }}
                                          >
                                            {row.ToAccountName}
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
                                            {row.CancellationDate}
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
export default TransactionReport;
