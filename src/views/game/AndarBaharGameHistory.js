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



function AndarBaharGameHistory() {
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
        .catch(function (error) { 
        });
    };
   
 
    //get Agents
   
    const columns = [
      { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
      { title: "Round count", field: "RoundCount" },
      { title: "CardName", field: "Cardresult" },
      { title: "FinalResult", field: "finalresult" },
      { title: "Date & Time", render: rowData => moment(rowData.playedtime).format("DD-MM-YYYY h:mm:ss ") }, 

    ];
  
    useEffect(() => {
      gameReports(); 
    }, []);
    return (
        <>
        <div  className="card card-outline card-info">
      <MaterialTable
        title="Game Plays History"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }} 
      />
    </div>
        </>
    )
}
export default AndarBaharGameHistory;
