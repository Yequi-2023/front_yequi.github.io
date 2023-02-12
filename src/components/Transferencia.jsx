import React from "react";
import { Navbar } from "../layouts/Navbar";
import "../styles/Transferencia.css";

const Transferencia = () => {
  const datos_formulario = (e) => {
    e.preventDefault();
    console.log(e.target.numero_cuenta.value);
    console.log(e.target.numero_identificacion.value);
    console.log(e.target.tipo_documento.value);
    console.log(e.target.valor.value);
  };

  return (
    <div className="contenedor_transferencia">
      <Navbar />
      <div className="transferencia">
        <h2>TRANSFERENCIA</h2>
        <form
          className="formulario_transferencia"
          onSubmit={(e) => datos_formulario(e)}
        >
          <div className="cont_input1">
            <label htmlFor="numero_cuenta">Numero de cuenta</label>
            <input type="number" name="numero_cuenta" required />
          </div>
          <div className="campo_identificacion_transferencia">
            <div className="cont_input2">
              <label htmlFor="numero_identificacion">
                N° de identificacion
              </label>
              <input type="number" name="numero_identificacion" required />
            </div>
            <div className="cont_input3">
              <label className="select" htmlFor="tipo_documento">
                Tipo de documento
              </label>
              <select name="tipo_documento">
                <option defaultValue="" disabled>
                  Escoger tipo de documento
                </option>
                <option defaultValue="cedula_ciudadania">
                  Cedula de ciudadanía
                </option>
                <option defaultValue="cedula_extranjera">
                  Cedula Extranjera
                </option>
                <option defaultValue="tarjeta_de_identidad">
                  Tarjeta de identidad
                </option>
              </select>
            </div>
          </div>
          <div className="cont_input4">
            <label htmlFor="valor">Valor</label>
            <input type="number" name="valor" required />
          </div>

          <button type="submit">Transferir</button>
        </form>
      </div>
    </div>
  );
};

export default Transferencia;
