import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import SignUp from "./pages/SignUpPage";
// import SignIn from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar/Navbar";

// Create root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} /> */}
          <Route path="" element={<p>Route not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();