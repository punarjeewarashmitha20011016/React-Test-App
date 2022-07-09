
import React from "react";
import { Route,Routes } from "react-router-dom";
import ItemPage from "../pages/item/index";
import CustomerPage from "../pages/customer/index";
import DashBoardPage from "../pages/dashboard/index";
import NavBar from "../components/navBar/index"

function App() {
  return (
    <div className=".container">
          <div className="navBarContainer">
            <NavBar/>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<DashBoardPage/>}/>
              <Route exact path="/customer" element={<CustomerPage/>}/>
              <Route exact path="/item" element={<ItemPage/>}/>
            </Routes>
          </div>
    </div>
  );
}

export default App;

