import { useEffect, useState } from "react";
import { Inicio } from "./components/Inicio";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../schemas/Login";
import md5 from "md5";
import "./App.css";
import Retiro from "./components/Retiro";
import PagoServicios2 from "./components/PagoServicios2";
import TarjetasDeCredito from "./components/TarjetasDeCredito";
import Transferencia from "./components/Transferencia";
import PagoServicios from "./components/PagoServicios";
import FormNuevaCuenta from "./components/FormNuevaCuenta";
import { Historial } from "./components/Historial";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [login, setLogin] = useState(true);

  const navigate = useNavigate();
  const URL = "http://127.0.0.1:8000/mi_api/";

  const getLogin = async (credenciales) => {
    try {
      const datos = await fetch(URL + "login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: credenciales.usuario,
          contrasena: md5(credenciales.contrasena),
        }),
      });
      if (datos.ok) {
        const data = await datos.json();
        if (data == "error") {
          toast.error("Credenciales incorrectas", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setLogin(false);
        } else {
          setLogin(true);
          navigate("/inicio");
          localStorage.setItem("userLogin", true);
          localStorage.setItem("usuario", credenciales.usuario);
        }
      }
    } catch (error) {
      console.log("El error es", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userLogin") == "true") {
      navigate("/inicio");
      setLogin(true);
    } else {
      navigate("/");
      setLogin(false);
    }
  }, []);

  return (
    <>
    <ToastContainer />
      {login ? (
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/retiro" element={<Retiro />} />
            <Route path="/tarjetasdecredito" element={<TarjetasDeCredito />} />
            <Route path="/pagoserviciospublicos" element={<PagoServicios2 />} />
            <Route path="/transferencia" element={<Transferencia />} />
            <Route path="/pagoservicios" element={<PagoServicios />} />
            <Route path="/historial" element={<Historial />} />
          </Routes>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login getLogin={getLogin} />} />
            <Route path="/crear_usuario" element={<FormNuevaCuenta />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
