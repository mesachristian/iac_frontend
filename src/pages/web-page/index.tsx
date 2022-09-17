import React, { useRef } from "react";
import { BrowserRouter } from 'react-router-dom'
import Body from "./components/body";
import Navbar from "./components/navbar";

type BodyRef = {
  handleScroll: () => void,
}

const WebPage = () => {
  
  const bodyRef = useRef<BodyRef>(null);

  function handleScroll(){
    bodyRef.current?.handleScroll();
  }

  return (
    <div onScroll={handleScroll} className="absolute top-0 left-0 w-screen h-screen overflow-x-hidden overflow-y-visible">
      <BrowserRouter>
        <Navbar isHome={true}/>
        <Body ref={bodyRef}/>
      </BrowserRouter>
    </div>
  );
};

export default WebPage;
