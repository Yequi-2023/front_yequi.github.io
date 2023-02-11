import { useState, useEffect } from "react";
import React from "react";
import { Navbar } from "../layouts/Navbar";
import "../styles/PagoServicios2.css";

const PagoServicios2 = () => {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos a un servidor, procesar el pago, etc.
  };
  
  return (
    <div className="contenedor-servicios">
      <Navbar />
      <div className="servicios-publicos">
        <h2>PAGO DE SERVICIOS PUBLICOS</h2>
        <form className="formulario-servicios-publicos" onSubmit={handleSubmit}>
          <label htmlFor="reference">Número de Referencia:</label>
          <input
            type="text"
            id="reference"
            value={referenceNumber}
            onChange={(event) => setReferenceNumber(event.target.value)}
          />
          <label htmlFor="amount">Monto a Pagar:</label>
          <input
            type="number"
            id="amount"
            value={paymentAmount}
            onChange={(event) => setPaymentAmount(event.target.value)}
          />
          <button type="submit">Pagar Servicio</button>
        </form>
      </div>
    </div >
  );
};
export default PagoServicios2;
