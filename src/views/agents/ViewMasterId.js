import React, { useState, useEffect } from "react";
import MaterialTable from "material-table"; 
import "../../style/Contact.css";
import axios from "axios";
import moment from "moment"
import Swal from 'sweetalert2'  

function ViewMasterId() {
 // let apiBaseURL  = "http://13.48.18.24:5000"
  let apiBaseURL  = "http://13.48.18.24:5000"

  const [data, setData] = useState([]);

  //get Agents
  const getPlayers = async () => {
    await axios
      .get(`${apiBaseURL}/user/getMasterIdData`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data, "data");
          setData(response.data.data);
        }
      })
      .catch(function (error) {
        // history.push("/login")
      });
  };
 
  //get Agents
  const changeStatus = async (distributor,status,message) => { 
     
    Swal.fire({
        title: `Are you sure? Want to ${message}`,
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Yes, ${message} it!`
      }).then((result) => {
        if (result.isConfirmed) {  
            let statusCode;
            if(status ===1){
              statusCode =0
            }else{
              statusCode =0
            }
            let updateData = {
                active:statusCode,
                distributor_id:distributor
            }
            axios.put(`${apiBaseURL}/api/users/changeStatusDistributor`,updateData)
            .then(function (response) { 
              if (response.data.status === 200) {
                  getPlayers();
                  Swal.fire(
                    `${response.data.message}!`,
                    `User status have been ${response.data.message}`,
                    'success'
                  )
              }else{
                Swal.fire(
                    `${response.data.message}!`, 
                    'error'
                  )
              }
            })
            .catch(function (error) {
                Swal.fire(
                    `Something Went wrong!`, 
                    'error'
                  )
            }); 
        }
      })
  };

  //get Agents
  const deleteUser = async (distributor) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {  
            axios.delete(`${apiBaseURL}/api/users/deleteDistributor/${distributor}`)
            .then(function (response) {
                console.log(response )
              if (response.data.status === 200) {
                  getPlayers();
                  Swal.fire(
                    `${response.data.message}!`,
                    `User have been ${response.data.message}`,
                    'success'
                  )
              }else{
                Swal.fire(
                    `${response.data.message}!`, 
                    'error'
                  )
              }
            })
            .catch(function (error) {
                Swal.fire(
                    `Something Went wrong!`, 
                    'error'
                  )
            }); 
        }
      })
};
  const columns = [
    { title: "Sl No.", field: "id" },
    { title: "Fullname", field: "full_name" },
    { title: "Email", field: "email" },
    { title: "Point", field: "point" },

    { title: "Password", field: "password" }, // { title: "Status", field: "status" }
  ];

  useEffect(() => {
    getPlayers();
    // fetch("/api/transaction")
    //     .then((response) => response.json())
    //     .then(json => setData(json))
  }, []);

  return ( 
    <div className="card card-outline card-info"  >
      <MaterialTable
        title="Master Id List"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }}
    /*     actions={[
          (rowData) => {
            return {
              icon: rowData.active == 1 ? "adminpanelsettings" : "accessibilitynow",
              tooltip: rowData.active == 1 ? "Blocked" : "Active",
              onClick: (event, row) => changeStatus(row.distributor_id,row.active,`${row.active == 0 ? "block" : "unblock"}`),
            };
          },
          {
            icon: "delete",
            tooltip: "Remove Distributor",
            onClick: (event, rowData) => deleteUser(rowData.distributor_id),
          },
        ]}
     */  />
    </div> 
  );
}
export default ViewMasterId;
