
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import moment from "moment"

function GameReport() {
  let apiBaseURL = "http://13.48.18.24:5000";
  const [data, setData] = useState([]); 
  const columns = [
    { title: "Room id", render: (rowData) => rowData.tableData.id + 1 },
    { title: "Joker Card no.", field: "user_id" },
    { title: "Created", field: "amount",filtering:true }
  ];
  //get Agents
  const getReports = async () => {
    await axios({
      method: "GET",
      url: `${apiBaseURL}/user/GameReport`,
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

  return ( 
      <><div className="card card-outline card-info">
      <MaterialTable
        title="Game Report"
        data={data}
        columns={columns} 
      />
    </div> 
      </>
  );
}
export default GameReport;
