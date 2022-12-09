import { React } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./login.css";
export const Login = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log(response);
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(data.data);
        setdata(data.data)
      } catch (error) {
        console.log(error);
      }
    },
  });

  function setdata(request)
  {

    sessionStorage.setItem("item_key", JSON.stringify(request));

  }
  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
      var decoded = jwt_decode(credentialResponse.credential);
      console.log(decoded);
      setdata(decoded)
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <>
       <section className="containers">
            <div className="forms">
                <div className="logos">
                    <img src="logo.png"  className="banner" />
                 </div>
                <div className="form-content">
                    
                    <header className="headers">Login</header>
                    <form className="loginform" action="#">
                        <div className="input-fields">
                            <input type="text" required /> 
                            <label>Enter Username</label>
                          </div>
                          <br></br>
                          <div className="input-fields">
                            <input type="password"  className="password" required /> 
                            <label>Enter password</label>

                          </div>

                        

                      

                        <div className="field button-field">
                            <button>Login</button>
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
