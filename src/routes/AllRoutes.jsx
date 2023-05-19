/* eslint-disable no-unused-vars */
import React from "react";
import CancerModule from "../pages/CancerModule";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AllRoutes() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CancerModule />}/>
      {/* <Route path="/main" element={<Analytics/>}/> */}
      





     
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default AllRoutes;
