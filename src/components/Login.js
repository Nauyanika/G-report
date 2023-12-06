import React, {  useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/Login.css";
import axios from "axios";
import { apiBaseURL } from "../config";
import PropTypes from "prop-types";







const Login = ({ setToken }) => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    captcha: "",
  });
const [error, seterrorMsg] = useState(false);
  const [captchaNumber, setCaptchaNumber] = useState(generateRandomCaptcha());
  const [captchaText, setCaptchaText] = useState("");
  // const [words, setWords] = useState([]);
  const [captcha, setCaptcha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [captchaImage, setCaptchaImage] = useState('');
  const [expectedCaptchaAnswer, setExpectedCaptchaAnswer] = useState("");
  // const [loginMessage, setLoginMessage] = useState('');
  function generateRandomCaptcha() {
    const min = 100000; 
    const max = 899999; 
    let randomNumber = Math.floor(min + Math.random() * (max - min + 1));

    return randomNumber;
}
const history = useHistory();
const handleSubmit = async (e) => {
      
      
  e.preventDefault();
  
 
  const { email, password } = values;
  const user = { email, password };
 

  
  
  if ( captchaText !== captchaNumber.toString()) {
    seterrorMsg('captcha verification failed');
    return;
  }
  
  if (!email ||  !password || !captchaText ) {
    // Successful login
    console.log('Login successful!'); 
    // Redirect the user to the desired page
    // You can use React Router for page navigation
  } else {
    // Failed login
    setErrorMessage('Please provide both Email and Password and captcha');
  }
  try {
      const roleIdResponse = await axios.post(`${apiBaseURL}/auth/getRoleId`, { email });
      const roleId = roleIdResponse.data.roleId;
       console.log("this is login.js rollID    " + roleId )
      sessionStorage.setItem("roleId", roleId);
      
      // Continue with the rest of your logic using the roleId if needed
    } catch (error) {
      console.log("Error retrieving roleId:", error);
    }



  try {
    const response = await axios.post(`${apiBaseURL}/auth/login`, user);
    sessionStorage.setItem("loginEmail", response.data.data.user_id);
    
   // sessionStorage.setItem("loginEmail", email);
    if (response.data.status === 200) {
      setToken(response.data.token);
      seterrorMsg(response.data.message);
    } else {
      seterrorMsg(response.data.message);
      sessionStorage.removeItem("loginEmail");
    }
  } catch (error) {
    // history.push("/login");
    console.log("Error occurred:", error);
    sessionStorage.removeItem("loginEmail");
  }
};

  // const [email, setEmail] = React.useState("GK");
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    //   const { value } = e.target;
    //  if (value.startsWith("GK")) {
    //   setEmail(value);
    // }
  };

  return (
    <div>
      <div>
        <div className="top-bar">
          <div className="gridContainer clearfix">
            <div id="LayoutDiv1">
              <div className="header">
                <div className="logo">
                  <img src={require("../image/logo.png")} alt="Logo" />
                </div>
              </div>

              <div className="container2" style={{ background: "#bbb" }}>
                <div className="login-div">
                  <div className="login-row login-row-width">
                    <h2>Login</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="login-row fields">
                      <div className="login-label">
                        <i className="fa fa-user"></i>
                      </div>
                      <div className="login-fields">
                        <input
                          className="txt-login"
                          id="txtemail"
                          maxLength="20"
                          placeholder="User Name"
                          value={values.email}
                          onChange={handleChange("email")}
                          name="email"
                          type="text"
                        />
                        <span
                          id="reqUserID"
                          style={{ color: "Red", visibility: "hidden" }}
                        ></span>
                      </div>
                    </div>
                    <div className="login-row fields">
                      <div className="login-label">
                        <i className="fa fa-lock"></i>
                      </div>
                      <div className="login-fields">
                        <input
                          className="txt-login"
                          id="txtPassword"
                          placeholder="Password "
                          name="password"
                          value={values.password}
                          onChange={handleChange("password")}
                          type="password"
                        />
                      </div>
                      <span
                        id="reqPassword"
                        style={{ color: "Red", visibility: "hidden" }}
                      ></span>
                    </div>
                    <div className="login-row fields">
                      <div className="login-label">
                        <i className="fa fa-lock"></i>
                      </div>
                      <div className="login-fields">
                        <input
                          name="txtCaptcha"
                          type="text"
                          id="textinput1"
                          className="txt-login"
                          maxLength="8"
                          value={captchaText}
                          onChange={(e) => setCaptchaText(e.target.value)}
                          placeholder="Enter Image Text -> "
                        />
                        {/* <input
                        type="image"
                        name="imgBtnRefreshCaptcha"
                        id="imgBtnRefreshCaptcha"
                        src={img2}
                        alt="Refresh Captcha"
                        className='button-point'
                        onClick={handleRefreshCaptcha}
                      /> */}
                        <div></div>
                      </div>

                      <span>
                        <input
                          type="text"
                          className="imgCaptcha"
                          id="imgCaptcha"
                          disabled
                          value={captchaNumber}

                          // value={expectedCaptchaAnswer}
                        />
                      </span>
                    </div>

                    <div></div>
                    {/* <div>
        <span class="field-validation-error" data-valmsg-for="strLoginID" data-valmsg-replace="true">Please Provide Login ID</span>
        <span class="field-validation-error" data-valmsg-for="strLoginPassword" data-valmsg-replace="true">Please Provide Password</span>
        <span class="field-validation-error" data-valmsg-for="strCaptcha" data-valmsg-replace="true">Please Provide Captcha Text from Image</span>
             <span class="field-validation-error">Invalid Captcha</span>
       </div> */}
                    <div className="login-row login-submit">
                      <div className="login-fields">
                        <input type="checkbox" /> Remember Me{" "}
                        <span style={{ float: "right" }}></span>&nbsp;
                      </div>
                      <div className="btn">
                        <input
                          type="submit"
                          name="btnLogin"
                          id="btnLogin"
                          value="login"
                        />
                      </div>
                    </div>
                    <span className="field-validation-error">
                      {error ? (
                        <div className="alert " id="alert" role="alert">
                          {error ? error : ""}
                        </div>
                      ) : (
                        ""
                      )}
                    </span>
                  </form>
                </div>

                <div className="bar-chart" style={{ opacity: ".5" }}>
                  <img
                    src={require("../image/login-bar-chart.png")}
                    alt="Bar Chart"
                  />
                </div>
              </div>

              <footer>
                <div className="copyright">
                  All rights reserved. © Copyright 2014.
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
