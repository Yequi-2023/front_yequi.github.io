import { useState, useEffect } from "react";
import React from "react";
import { Navbar } from "../layouts/Navbar";
import "../styles/PagoServicios2.css";

const PagoServicios2 = () => {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [infoServicios, setInforServicios] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos a un servidor, procesar el pago, etc.
  };
  const fetchData = async () => {
    try {
      const datos = await fetch('http://127.0.0.1:8000/mi_api/mostrar_servicios_publicos', {
        method: 'POST',
        headers: { "Content-Type": "application/json" }
      });
      if (datos.ok) {
        const data = await datos.json()
        setInforServicios(data)
        console.log(data)
      }
    } catch (error) {
      console.log("El error es", error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

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
