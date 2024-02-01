import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
