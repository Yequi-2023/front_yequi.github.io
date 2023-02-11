import React from "react";
import { Inicio } from "./components/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../schemas/Login";

import "./App.css";
import Retiro from "./components/Retiro";
import PagoServicios2 from "./components/PagoServicios2";
import TarjetasDeCredito from "./components/TarjetasDeCredito";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/retiro" element={<Retiro />} />
          <Route
            exact
            path="/tarjetasdecredito"
            element={<TarjetasDeCredito />}
          />

          <Route
            exact
            path="/pagoserviciospublicos"
            element={<PagoServicios2 />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
