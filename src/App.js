import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './LOGIN/Login'
import Register from './LOGIN/Register'
import SnowflakeHeader from "./Header/SnowflakeHeader";

const App = () => {
  return (
    <div>
     <SnowflakeHeader />
    </div>
  );
};

export default App;


{/* <Router>
<Routes>
<Route path="/" element={<Login />} />
 <Route path="/register" element={<Register />} />
 <Route path="/snowflake" element={<Register />} />
</Routes>
</Router> */}