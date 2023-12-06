import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import axios from "axios";
import Swal from "sweetalert2";

function AddMasterId() {
  let apiBaseURL = "http://13.48.18.24:5000";
  const sessionData = sessionStorage.getItem("token");
  const [values, setValues] = useState({
    full_name: "",
    password: "",
    email: "",
    
  });

  const [destriData, setDestriData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {  full_name, password, email } = values;
    const user = {
      password,
      full_name,
      email,
      role_id:3,

    };
    await axios({
      method: "post",
      url: `${apiBaseURL}/auth/adduserbyadmin1`,
      data: user,
      headers: { Authorization: `Bearer ${sessionData.token}` },
    })
      .then(function (response) {
        if (response.data.status === 200) {
          setValues({
            full_name: "",
            password: "",
            email: "",
            });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:`${response.data.message} !`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          if (response.data.status == 401) {
            sessionStorage.removeItem("token");
            window.location.reload();
          } else {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "Oops...",
              text:`${response.data.message} !`,
              showConfirmButton: false,
              timer: 1700,
            });
          }
        }
      })
      .catch(function (error) {
        Swal.fire(`Something went wrong!`, "error");
      });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  useEffect(() => {
  }, []);

  return (
      <div className="row">
        <div className="col-md-8">
          <div className="card card-outline card-info">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fa-solid fa-user-tie fa-2x" /> Add New Master Id
              </h3>
            </div>
            <div className="card-body">
              <form method="post" onSubmit={handleSubmit}>
         <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    MasterId Full Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      required
                      className="inputfield form-control"
                      name="full_name"
                      value={values.full_name}
                      onChange={handleChange("full_name")}
                    />
                  </div>
                </div>
                 <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label">
                    MasterId Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      required
                      className="inputfield form-control"
                      name="email"
                      value={values.email}
                      onChange={handleChange("email")}
                    />
                  </div>
                </div>
                       <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-3 col-form-label"
                  >
                    Enter Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      className="inputfield form-control"
                      placeholder="***********"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-3 "></div>
                  <div className="col-sm-9">
                    <div className="form-group row">
                      <div className="col-sm-3 ">
                        <button className=" btn-primary form-control">
                          Reset
                        </button>
                      </div>
                      <div className="col-sm-3 ">
                        <button
                          type="onSubmit"
                          className="btn-success form-control"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
export default AddMasterId;
