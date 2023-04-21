import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./componenets/shop";
import Home from "./componenets/home";
import './App.css';

const RouteSwitch = () => {
  return(
    <BrowserRouter>
      <h1>Hello</h1>
        <Routes>
          <Route path= "/home" element={<Home/>}/>
          <Route path= "/shop" element={<Shop/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
