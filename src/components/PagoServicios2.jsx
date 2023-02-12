import { useState, useEffect } from "react";
import React from "react";
import { Navbar } from "../layouts/Navbar";
import "../styles/PagoServicios2.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PagoServicios2 = () => {
  const [referenceNumber, setReferenceNumber] = useState(0);
  const [monto, setMonto] = useState(0);
  const [descripcion, setDescripcion] = useState("");

  const leerInputRefe = (e) => {
    setReferenceNumber(e.target.value);
  }

  const leerInputMonto = (e) => {
    setMonto(e.target.value);
  }

  const leerInputDescrip = (e) => {
    setDescripcion(e.target.value);
  }

  const fetchData = async () => {
    try {
      const datos = await fetch('http://127.0.0.1:8000/mi_api/recaudos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monto: monto,
          descripcion: descripcion,
          referencia: referenceNumber,
          usuario: localStorage.getItem('usuario'),
          tipo_recaudo: localStorage.getItem('tipoServicio')
        }),
      });
      if (datos.ok) {
        const data = await datos.json();
        if (data.msg == 'Pago exitoso') {
          toast.success('Pago Realizado!', {
            position: toast.POSITION.TOP_RIGHT
          });
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error('Saldo insuficiente !', {
        position: toast.POSITION.TOP_CENTER
      });
      setMonto('')
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contenedor-servicios">
      <Navbar />
      <ToastContainer />
      <div className="servicios-publicos">
        <h2>PAGO DE SERVICIOS PUBLICOS</h2>
        <form className="formulario-servicios-publicos" onSubmit={handleSubmit}>
          <label htmlFor="reference">Número de Referencia:</label>
          <input
            type="number"
            required
            id="reference"
            onChange={leerInputRefe}
          />
          <label htmlFor="descripcion">Descripcion:</label>
          <input
            type="text"
            id="descripcion"
            onChange={leerInputDescrip}
          />
          <label htmlFor="amount">Monto a Pagar:</label>
          <input
            type="number"
            required
            id="amount"
            value={monto}
            onChange={leerInputMonto}
          />
          <button onClick={fetchData}>Pagar Servicio</button>
        </form>
      </div>
    </div >
  );
};
export default PagoServicios2;
