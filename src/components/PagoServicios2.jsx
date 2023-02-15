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
  const [verificacion, setVerificacion] = useState(false);

  const leerInputRefe = (e) => {
    setReferenceNumber(e.target.value);
  }

  const leerInputMonto = (e) => {
    setMonto(e.target.value);
  }

  const leerInputDescrip = (e) => {
    setDescripcion(e.target.value);
  }
  const verificarData = async () => {
    try {
      if (referenceNumber <= 0) {
        toast.error('El Número Referencia no puede estar vacio', {
          position: toast.POSITION.TOP_RIGHT
        });
        setMonto('')
      } else {

        const datos = await fetch('http://127.0.0.1:8000/mi_api/recibo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            referencia: referenceNumber,
            convenio: localStorage.getItem('tipoServicio')
          }),
        });
        if (datos.ok) {
          const data = await datos.json();
          // console.log(typeof(data))
          if (data == 'Referencia no existe' ) {
            toast.error('No existe este servicio con esa referencia', {
              position: toast.POSITION.TOP_RIGHT
            });
          }
          
          if (data.length > 0) {
            toast.success('Verificacion exitosa', {
              position: toast.POSITION.TOP_RIGHT
            });
            setVerificacion(true)
            let datos1 = data[0][0].replace("$","")
            let newMonto = datos1.replace(".","")
            setMonto(parseInt(newMonto))
          }
        }

      }
    } catch (error) {
      toast.error('Referencia no existe', {
        position: toast.POSITION.TOP_CENTER
      });
      setMonto('')
    }
  }

  const fetchData = async () => {
    
    try {
      if (referenceNumber <= 0) {
        toast.error('El Número Referencia no puede estar vacio', {
          position: toast.POSITION.TOP_RIGHT
        });
        setMonto('')
      } else {
        if (monto <= 0) {
          toast.error('El monto debe ser mayor a 0', {
            position: toast.POSITION.TOP_RIGHT
          });
        } else {
          
          const datos = await fetch('http://127.0.0.1:8000/mi_api/recaudos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              monto: monto,
              descripcion: (descripcion == '' ? 'Pago Servicio Publico' : descripcion),
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
          {
            verificacion == true ?
              (<>
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
                  defaultValue={monto}
                  placeholder={monto}
                  readOnly
                  // onChange={leerInputMonto}
                />
                <button onClick={fetchData}>Pagar Servicio</button>
              </>) :
              (<>
                <button onClick={verificarData}>Verificar</button>
              </>)
          }
        </form>
      </div>
    </div >
  );
};
export default PagoServicios2;
