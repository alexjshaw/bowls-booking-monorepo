import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import classes from "./App.module.css";
import { Box } from "@mantine/core";
// import Router from "./routes";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ForgotPassword } from "./components/ForgotPassword";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Box className={classes.fullViewportContainer}>
      <Box className={classes.contentBox}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="/forgotpassword" element={<ForgotPassword />}></Route> */}
          <Route path="/forgotpassword" element={
            <ProtectedRoute>
              <ForgotPassword />
            </ProtectedRoute>
          }/>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
