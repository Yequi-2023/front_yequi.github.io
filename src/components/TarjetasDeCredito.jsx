import React, { useState } from "react";
import { Navbar } from "../layouts/Navbar";
import "../styles/TarjetasDeCredito.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TarjetasDeCredito() {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState(0);
  const [referencia, setReferencia] = useState(0);

  const leerInputDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const leerInputMonto = (e) => {
    setMonto(e.target.value);
  };

  const leerInputReferencia = (e) => {
    setReferencia(e.target.value);
  };

  const fetchData = async () => {
    try {
      if (monto <= 0) {
        toast.error("El monto debe ser mayor a 0", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setMonto("");
      } else {
        if (referencia <= 0) {
          toast.error(
            "El Número de Tarjeta o Referencia de credito no puede estar vacio",
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        } else {
          const datos = await fetch("http://127.0.0.1:8000/mi_api/pagos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              monto: monto,
              descripcion:
                descripcion == "" ? "Pago Obligaciones" : descripcion,
              referencia: referencia,
              usuario: localStorage.getItem("usuario"),
            }),
          });
          const data = await datos.json();
          if (datos.ok) {
            if (data.msg == "Pago exitoso") {
              toast.success("Transferencia Realizada!", {
                position: toast.POSITION.TOP_RIGHT,
              });
              window.location.reload();
            } else {
              toast.error("Saldo Insuficiente!", {
                position: toast.POSITION.TOP_RIGHT,
              });
              setMonto("");
            }
          }
        }
      }
    } catch (error) {
      toast.error("Algún dato esta incorrecto. !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contenedor-info">
      <Navbar />
      <ToastContainer />
      <div className="usuario-tarjeta-credito">
        <div>
          <form className="formulario-tarjeta-credito" onSubmit={handleSubmit}>
            <div>
              <label className="usuario-titular" htmlFor="holderName">
                Monto: <br />
              </label>
              <input
                type="text"
                id="holderName"
                value={monto}
                onChange={leerInputMonto}
                required
              />
            </div>
            <div>
              <label className="wrapper" htmlFor="securityCode">
                Descripción: <br />
              </label>
              <input
                type="number"
                id="securityCode"
                onChange={leerInputDescripcion}
              />
            </div>
            <div>
              <label htmlFor="cardNumber">
                Numero Tarjeta o Referencia Crédito: <br />
              </label>
              <input
                type="number"
                id="cardNumber"
                onChange={leerInputReferencia}
                required
              />
            </div>
            <br />
            <div></div>
            <img
              className="img-cards"
              src="/logos-avance-tarjeta-credito-min.png"
              alt="logo-tarjeta-credito"
            />
            <br />
            <button onClick={fetchData} className="consultar">
              Pagar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TarjetasDeCredito;
