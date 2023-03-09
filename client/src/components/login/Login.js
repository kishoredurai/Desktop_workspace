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
import { Navigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Login = () => {



// toastfy notification




const showToastMessage = () => {
  toast.error('🦄 Please Check Your Internet Connection!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
};





// end of toastify



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

        UserLogin(data.data)
    
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

      UserLogin(decoded)

    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // Admin login request 

  const AdminLogin = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/JSON",
      },
    })
    .catch((error) => {
      showToastMessage();
    //  alert("Unable to connect Backend")
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then((data) => {
        if (data["message"]==="success") {
          
          userprofile.userid=data["userid"];
          userprofile.email=username;
          userprofile.name=data["name"];
          userprofile.picture="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fadmin-user-icon%2Fadmin-user-icon-4.jpg&f=1&nofb=1&ipt=bca1b2326761978556b2dfe13d68a535683a33106b752897834f08553cbb8a1a&ipo=images";
          userprofile.acc_status=data["acc_status"];
          userprofile.acc_type='admin';

          setdata(userprofile);

        } else {

          alert("no");
        }
      });

      
  }



  //  User Login  request

  const UserLogin = (event) => {


    fetch("http://localhost:5000/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: event.email,
       
      }),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then((data) => {
        if (data["message"]==="success" && data["acc_status"]===true) {
          
          userprofile.userid=data["userid"];
          userprofile.email=event.email;
          userprofile.name=event.name;
          userprofile.picture=event.picture;
          userprofile.acc_status=data["acc_status"];
          userprofile.acc_type='user';

          if(data["activated"]===true)
          {
            setdata(userprofile); 
          }
          else
          {
            sessionStorage.setItem("activation_key", JSON.stringify(userprofile));
            navigate("/user/activation")
          }

        } else {

          alert("account is blocked");
        }
      });


  }





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
  if (sessionStorage.getItem("admin_key")) return <Navigate to="/admin/dashboard" />;
  if (sessionStorage.getItem("item_key")) return <Navigate to="/dashboard" />;


  return (
    <>
                <ToastContainer />

       <section className="containers">
            <div className="forms">
                <div className="logos">
                    <img src={logo}  className="banner" />
                 </div>
                <div className="form-content">
                    
                    <header className="headers">Login</header>
                    <form className="loginform" onSubmit={AdminLogin} >
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
