import DashboardPage from "../pages/dashboard/index";
import React from "react";
import { Route,Routes } from "react-router-dom";
import CustomerPage from "../pages/customer/index"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<DashboardPage/>}/>
      <Route exact path="/customer" element={<CustomerPage/>}/>
    </Routes>
  );
}

export default App;

