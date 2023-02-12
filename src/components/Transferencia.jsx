import React from "react";
import { useState } from "react";
import { Navbar } from "../layouts/Navbar";
import "../styles/Transferencia.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transferencia = () => {
  const [cuentaDestino, setCuentaDestino] = useState(0);
  const [monto, setMonto] = useState(0);
  const [descripcion, setDescripcion] = useState("");

  const leerCuenta = (e) => {
    setCuentaDestino(e.target.value);
  };

  const leerInputMonto = (e) => {
    setMonto(e.target.value);
  };

  const leerInputDescrip = (e) => {
    setDescripcion(e.target.value);
  };

  const fetchData = async () => {
    try {
      const datos = await fetch("http://127.0.0.1:8000/mi_api/transferencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          monto: monto,
          descripcion: descripcion == "" ? "Transferencia" : descripcion,
          usuario_origen: localStorage.getItem("usuario"),
          usuario_destino: cuentaDestino,
        }),
      });
      if (datos.ok) {
        const data = await datos.json();
        if (data.msg == "Transaccion exitosa") {
          toast.success("Transferencia Realizada!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          window.location.reload();
        }
        if (data == "Cuenta destino no existe") {
          toast.error("Cuenta destino no existe!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    } catch (error) {
      toast.error("Saldo insuficiente !", {
        position: toast.POSITION.TOP_CENTER,
      });
      setMonto("");
    }
  };
  const datos_formulario = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contenedor_transferencia">
      <Navbar />
      <ToastContainer />
      <div className="transferencia">
        <h2>TRANSFERENCIA</h2>
        <form
          className="formulario_transferencia"
          onSubmit={(e) => datos_formulario(e)}
        >
          <div className="cont_input1">
            <label htmlFor="numero_cuenta">Numero de cuenta</label>
            <input type="number" onChange={leerCuenta} required />
          </div>
          <div className="campo_identificacion_transferencia">
            <div className="cont_input2">
              <label htmlFor="descripcion">Descripcion</label>
              <input type="text" onChange={leerInputDescrip} />
            </div>
          </div>
          <div className="cont_input4">
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              value={monto}
              onChange={leerInputMonto}
              required
            />
          </div>
          <button onClick={fetchData}>Transferir</button>
        </form>
      </div>
    </div>
  );
};
export default Transferencia;
