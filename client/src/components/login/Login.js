import { React, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { navigation } from "../constants/credentails";
import logo from "../images/logo.png"

import jwt_decode from "jwt-decode";
import axios from "axios";
import "./login.css";
export const Login = () => {

const navigate = useNavigate();

// tokendata
const userprofile = {
  userid: '',
  email: '',
  name: '',
  picture: '',
  acc_status: '' ,
  acc_type:'',
};

const [username,setUsername] = useState('');
const [password,setPassword] = useState('');

  
// login form 
  function submitlogin(event){
      event.preventDefault();
      userprofile.userid='test';
      console.log("login:"+userprofile.userid+" "+password);
  }


  const login = useGoogleLogin({
    onSuccess: async (response) => {
      // console.log(response);
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        // console.log(data.data);
        userprofile.userid=data.data.sub;
        userprofile.email=data.data.email;
        userprofile.name=data.data.name;
        userprofile.picture=data.data.picture;
        userprofile.acc_status=data.data.email_verified;
        userprofile.acc_type='user';


        setdata(userprofile)
    
      } catch (error) {
        console.log(error);
      }
    },
  });


  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      // console.log(credentialResponse);
      var decoded = jwt_decode(credentialResponse.credential);
      console.log(decoded);



      userprofile.userid=decoded.sub;
      userprofile.email=decoded.email;
      userprofile.name=decoded.name;
      userprofile.picture=decoded.picture;
      userprofile.acc_status=decoded.email_verified;
      userprofile.acc_type='user';



      setdata(userprofile)
    },
    onError: () => {
      console.log("Login Failed");
    },
  });



  function setdata(request)
  {

    if(request.acc_type=='user')
    {

      sessionStorage.setItem("item_key", JSON.stringify(request));
      navigate("/dashboard")
    }
    else
    {
      sessionStorage.setItem("admin_key", JSON.stringify(request));
      navigate("/admin/dashboard")
    }
  }


  return (
    <>
       <section className="containers">
            <div className="forms">
                <div className="logos">
                    <img src={logo}  className="banner" />
                 </div>
                <div className="form-content">
                    
                    <header className="headers">Login</header>
                    <form className="loginform" onSubmit={submitlogin} >
                        <div className="input-fields">
                            <input type="text" name="username"
                            onChange={(e) =>  setUsername(e.target.value)}

required /> 
                            <label>Enter Username</label>
                          </div>
                          <br></br>
                          <div className="input-fields">
                            <input type="password"  className="password"
                                                        onChange={(e) =>  setPassword(e.target.value)}

                            required /> 
                            <label>Enter password</label>

                          </div>

                        

                      

                        <div className="field button-field">
                            <button type="submit">Login</button>
                        </div>
                    </form>

               
                </div>

                <div className="line"></div>

               
                <div className="media-options">
                    <a onClick={login} className="field google">
                        <img src="google.png" alt="" className="google-img" />
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>

        </section>
    </>
  );
};
