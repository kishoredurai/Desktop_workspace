import React from "react";
import Header from "../../layout/header/header";
import { navigation } from '../../constants/credentails'
import Iframe from "react-iframe";
export  const Machine_screen = () => 
{
    navigation[0].current=false;
    return(
        <>
        <Header />
        <Iframe
          url="http://61.1.180.254/remote/638648bd5f2125b5f893b882?resize=remote&path=638648bd5f2125b5f893b882/websockify"
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