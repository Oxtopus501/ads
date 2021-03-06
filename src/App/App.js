import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../vendor/normalize.css";
import "./App.css";
import Applications from "../components/Applications/Applications";
import AuthForm from "../components/AuthForm/AuthForm";
import LocalApi from "../components/LocalApi/LocalApi";
import NewApplication from "../components/NewApplication/NewApplication";
import routes from "../utils/routesConfig";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<AuthForm />} />
          <Route path="/appl" element={<Applications />} />
          <Route path="/new-appl" element={<NewApplication />} />
          <Route
            path={routes.applicationsDetails.mask}
            element={<NewApplication />}
          />
          <Route path="local-api" element={<LocalApi />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
