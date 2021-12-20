import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Applications from "../components/Applications/Applications";
import AuthForm from "../components/AuthForm/AuthForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<AuthForm />} />
          <Route path="/appl" element={<Applications />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
