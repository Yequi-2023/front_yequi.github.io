import React, { useState } from "react";
import { Navbar } from "../layouts/Navbar";
import "../styles/TarjetasDeCredito.css";

function TarjetasDeCredito() {
  const [holderName, setHolderName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos a un servidor, realizar la consulta, etc.
  };

  return (
    <div className="contenedor-info">
      <Navbar />
      <div className="usuario-tarjeta-credito">
        <div>
          <form className="formulario-tarjeta-credito" onSubmit={handleSubmit}>
            <div>
              <label className="usuario-titular" htmlFor="holderName">
                Nombre del Titular:
              </label>
              <input
                type="text"
                id="holderName"
                value={holderName}
                onChange={(event) => setHolderName(event.target.value)}
              />
            </div>
            <div>
              <label className="wrapper" htmlFor="securityCode">
                Código de Seguridad:
              </label>
              <input
                type="text"
                id="securityCode"
                value={securityCode}
                onChange={(event) => setSecurityCode(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="cardNumber">Número de Tarjeta:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
            </div>
            <div></div>
            <img
              className="img-cards"
              src="/logos-avance-tarjeta-credito-min.png"
              alt="logo-tarjeta-credito"
            />

            <button type="submit" className="consultar">
              Consultar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TarjetasDeCredito;
