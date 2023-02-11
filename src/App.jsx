import React from "react";
import { Inicio } from "./components/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../schemas/Login";

import "./App.css";
import Retiro from "./components/Retiro";
import PagoServicios2 from "./components/PagoServicios2";
import Transferencia from "./components/Transferencia";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/retiro" element={<Retiro />} />
          <Route exact path="/pagoserviciospublicos" element={<PagoServicios2 />}/>
          <Route exact path="/transferencia" element={<Transferencia />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
