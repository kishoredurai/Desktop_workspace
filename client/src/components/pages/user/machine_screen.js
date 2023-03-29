import React from "react";
import Header from "../../layout/header/header";
import { navigation } from '../../constants/credentails'
import Iframe from "react-iframe";
import { useEffect } from "react";
import { useState } from "react";
export  const Machine_screen = () => 
{
  const [port,setPort] = useState("https://localhost:");


  useEffect(() => {


    const getcredentails = (id) => {

      fetch("http://localhost:5000/api/user/containerpass", {
        method: "post",
        body: JSON.stringify( 	
        {
          "containerid": id
        }),
        headers: {
          "Content-type": "application/JSON",
        },
      })
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          alert("Unable to connect Backend");
        })
        .then((data) => {
          var link =
      "https://localhost:" +
      data.containerport +
      "?resize=remote";
          setPort(link);
          console.log(data);
        });
  
    };
    const params = new URLSearchParams(window.location.search);
    const myParamValue = params.get("id");
    getcredentails(myParamValue);
  }, []);


    navigation[0].current=false;
    return(
        <>
        <Header />
        <Iframe
          url={port}
          display="block"
          id="myId"
          className="min-h-[100vh] min-w-[100%]"
          width="100%"
          scrolling="auto"
          height="100%"
          position="absolute"
          allowFullScreen="fullscreen"
        />
        </>
    );

}