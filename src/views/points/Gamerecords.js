import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import '../../style/Contact.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
 
import axios from "axios";
// import { apiBaseURL } from "../../config";
import moment from 'moment'
let apiBaseURL  = "http://13.48.18.24:5000"
// import { authToken } from "../../authToken";


function RoulletGameRecords() {
  const [data, setData] = useState([]);

  // get Agents
  const gameReports = async () => {
    await axios
      .get(`${apiBaseURL}/user/RoulletGameRecords`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setData(response.data.data);
        }
      })
      .catch(function (error) { 
      });
  };
 

  //get Agents
 
  const columns = [
          { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
          { title: "Room ID", field: "room_id" },
          { title: "Win Spot", field: "spot" },
          { title: "Win No.1", field:"winNo1" },

          { title: "Win No.2",field:"winNo2" },
          { title: "Date & Time", render: rowData => moment(rowData.created).format("DD-MM-YYYY h:mm:ss ") }, 

  ];

  useEffect(() => {
    gameReports(); 
  }, []);
  return (
      <>
      <div  className="card card-outline card-info">
    <MaterialTable
      title="RoulletGame Records"
      data={data}
      columns={columns}
      options={{ actionsColumnIndex: -1 }} 
    />
  </div>
      </>
  )
}

function Gamerecords() {
    const [data, setData] = useState([]);

    // get Agents
    const gameReports = async () => {
      await axios
        .get(`${apiBaseURL}/user/Gamerecords`)
        .then(function (response) {
          if (response.data.status === 200) { 
            setData(response.data.data);
          }
        })
        .catch(function (error) { 
        });
    };
   
 
    //get Agents
   
    const columns = [
            { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
            { title: "Room ID", field: "room_id" },
            { title: "JokerCard", field: "joker_card_no" },
            { title: "Date & Time", render: rowData => moment(rowData.created).format("DD-MM-YYYY h:mm:ss ") }, 

    ];
  
    useEffect(() => {
      gameReports(); 
    }, []);
    return (
        <>
        <div  className="card card-outline card-info">
      <MaterialTable
        title="AndarBahar Record"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }} 
      />
    </div>
        </>
    )
}
///
function FunTargetRecords() {
  const [data, setData] = useState([]);

  // get Agents
  const gameReports = async () => {
    await axios
    .get(`${apiBaseURL}/user/FunTargetRecords`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setData(response.data.data);
        }
      })
      .catch(function (error) { 
      });
  };
 

  //get Agents
 
  const columns = [
          { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
          { title: "Room ID", field: "room_id" },
          { title: "Win No.1", field:"winNo1" },
          { title: "Win No.2",field:"winNo2" },
          { title: "Date & Time", render: rowData => moment(rowData.created).format("DD-MM-YYYY h:mm:ss ") }, 

  ];

  useEffect(() => {
    gameReports(); 
  }, []);
  return (
      <>
      <div  className="card card-outline card-info">
    <MaterialTable
      title="FunTarget Records"
      data={data}
      columns={columns}
      options={{ actionsColumnIndex: -1 }} 
    />
  </div>
      </>
  )
}




function SevenUpGameRecords() {
  const [data, setData] = useState([]);

  // get Agents
  const gameReports = async () => {
    await axios
      .get(`${apiBaseURL}/user/SevenUpGameRecords`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setData(response.data.data);
        }
      })
      .catch(function (error) { 
      });
  };
 

  //get Agents
 
  const columns = [
          { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
          { title: "Room ID", field: "room_id" },
  
          { title: "Win Spot", field: "spot" },
          { title: "Win No.", field:"win_no" },

          { title: "Date & Time", render: rowData => moment(rowData.created).format("DD-MM-YYYY h:mm:ss ") }, 

  ];

  useEffect(() => {
    gameReports(); 
  }, []);
  return (
      <>
      <div  className="card card-outline card-info">
    <MaterialTable
      title="SevenUpGame Records"
      data={data}
      columns={columns}
      options={{ actionsColumnIndex: -1 }} 
    />
  </div>
      </>
  )
}

function TripleChanceGameRecords() {
  const [data, setData] = useState([]);

  // get Agents
  const gameReports = async () => {
    await axios
      .get(`${apiBaseURL}/user/TripleChanceGameRecords`)
      .then(function (response) {
        if (response.data.status === 200) { 
          setData(response.data.data);
        }
      })
      .catch(function (error) { 
      });
  };
 

  //get Agents
 
  const columns = [
          { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
          { title: "Room ID", field: "room_id" },
          { title: "Win No.1", field:"winNo1" },

          { title: "Win No.2",field:"winNo2" },
          { title: "Date & Time", render: rowData => moment(rowData.created).format("DD-MM-YYYY h:mm:ss ") }, 

  ];

  useEffect(() => {
    gameReports(); 
  }, []);
  return (
      <>
      <div  className="card card-outline card-info">
    <MaterialTable
      title="TripleChanceGame Records"
      data={data}
      columns={columns}
      options={{ actionsColumnIndex: -1 }} 
    />
  </div>
      </>
  )
}

export { Gamerecords, FunTargetRecords, RoulletGameRecords, SevenUpGameRecords ,TripleChanceGameRecords };
