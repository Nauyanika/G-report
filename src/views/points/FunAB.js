import React, { useState, useEffect } from "react";
import MaterialTable, {
  MTableToolbar,
  MTableHeader,
  MTablePagination,
  MTableBodyRow,
  MTableBody,
} from "material-table";
import "../../style/Contact.css";
import "../points/style/game.css";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
// import { apiBaseURL } from "../../config";
import moment from "moment";
let apiBaseURL = "http://13.48.18.24:5000";

// import { authToken } from "../../authToken";

function FunAB() {
  const [data, setData] = useState([]);

  // get Agents
  const gameReports = async () => {
    await axios
      .get(`${apiBaseURL}/user/AndarBaharGamePlayHistory`)
      .then(function (response) {
        if (response.data.status === 200) {
          setData(response.data.data);
        }
      })
      .catch(function (error) {});
  };

  //get Agents

  const columns = [
    { title: "Sr.No.", render: (rowData) => rowData.tableData.id + 1 },
    { title: "Winning Cards.", field: "finalresult" },

    {
      title: "Draw Time",
      render: (rowData) =>
        moment(rowData.created).format("DD-MMM-YYYY h:mm:ss A"),
    },
  ];

  useEffect(() => {
    gameReports();
  }, []);
  return (
    <>
      <div className="card card-outline ">
        <MaterialTable
          title="Fun AB"
          data={data}
          columns={columns}
          options={{
            pageSize: 20,
            search: false,

            toolbar: true,
            header: true,
            thirdSortClick: false,

            headerStyle: {
              background: "red",
              position: "sticky",
              top: "0",
            },
            tableLayout: "fixed",
            maxBodyHeight: "300px",

            headerStyle: {
              background: "rgb(179 179 179)",
              fontStyle: "italic",
              border: "1px solid black",
            },
            tollbarStyle: { width: "1000%" },
            headerStyle: {
              textAlign: "center",
              whiteSpace: "nowrap",
              height: 20,
              maxHeight: 20,
              padding: 0,
              background: "#20b7c9",
              border: "1px solid black",
              borderTop: "6px solid white",
              borderBottom: "6px solid white",
            },

            rowStyle: {
              width: 20,
              maxWidth: 20,
              height: 20,
              maxHeight: 20,
              padding: 0,
            },
            toolbarStyle: {
              height: 10,
              maxHeight: 10,
            },

            rowStyle: { border: "1px solid black" },
            rowStyle: (data, index) =>
              index % 2 == 0 ? { background: "#cfe2ff" } : null,
            cellStyle: { border: "1px solid black", alignItems: "center" },
            paging: true,
          }}
          components={{
            Toolbar: (props) => (
              <div
                style={{ background: "rgb(179 179 179)", borderSpacing: "5px" }}
              >
                <MTableToolbar {...props} />
              </div>
            ),
            // Pagination: props => (
            //     <div style={{ backgroundColor: '#b2994e' , }}>
            //         <MTablePagination {...props} />
            //     </div>
            // ),
            Row: (props) => (
              <div style={{}}>
                <MTableBodyRow {...props} />
              </div>
            ),

            Header: (props) => (
              <div>
                <MTableHeader {...props} />
              </div>
            ),
            Body: (props) => (
              <div style={{}}>
                <MTableBody {...props} />
              </div>
            ),
          }}
        />
      </div>
    </>
  );
}

export default FunAB;
