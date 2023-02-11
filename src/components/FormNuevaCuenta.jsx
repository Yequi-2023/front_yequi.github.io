import { useState } from "react";

//import './App.css'
import "../styles/formNuevaCuenta.css";

function FormNuevaCuenta() {
  const [form, setForm] = useState([]);

  return (
    <div className="FormNuevaCuenta">
      <section className="nuevaCuenta">
        <div className="CNuevaCuenta">
          <h2>Creación nueva cuenta</h2>
          <hr />
          <div className="CFormulario">
            <h2>Formulario de creación cuenta</h2>
            <form
              className="formulario"
              onSubmit={(ev) => {
                ev.preventDefault();
                let nombre = ev.target.nombres.value;
                let apellido = ev.target.apellidos.value;
                let documento = ev.target.documento.value;
                let email = ev.target.correo.value;
                let celular = ev.target.celular.value;
                let contraseña = ev.target.contraseña.value;
                let contraseña2 = ev.target.verificar.value;
                setForm([
                  nombre,
                  apellido,
                  documento,
                  email,
                  celular,
                  contraseña,
                  contraseña2,
                ]);
              }}
            >
              <div className="contenedorFormulario">
                <div>
                  <label for="nombres">Nombres</label>
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Ingrese nombres completos"
                    required
                  />
                </div>
                <div>
                  <label for="apellidos">Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Ingrese apellidos completos"
                    required
                  />
                </div>
                <div>
                  <label for="tipoDocumento">Tipo de documento</label>
                  <select name="tipoDocumento">
                    <option value="value1">Cedula ciudadania</option>
                    <option value="value2">Cedula extranjeria</option>
                    <option value="value3">Tarjeta de identidad</option>
                  </select>
                </div>
                <div>
                  <label for="documento">Numero de documento</label>
                  <input
                    type="text"
                    name="documento"
                    placeholder="Ingrese numero de documento"
                    required
                  />
                </div>
                <div>
                  <label for="correo">Correo electrónico</label>
                  <input
                    type="email"
                    name="correo"
                    placeholder="Ingrese correo electrónico"
                    required
                  />
                </div>
                <div>
                  <label for="celular">Celular</label>
                  <input
                    type="number"
                    name="celular"
                    placeholder="Ingrese número celular"
                    maxlength={"10"}
                    minlength={"10"}
                    required
                  />
                </div>
                <div>
                  <label for="contraseña">Contraseña</label>
                  <input
                    type="password"
                    name="contraseña"
                    placeholder="Ingrese contraseña"
                    maxlength={"4"}
                    minlength={"4"}
                    required
                  />
                </div>
                <div>
                  <label for="verificar">Verificar contraseña</label>
                  <input
                    type="password"
                    name="verificar"
                    placeholder="Ingrese contraseña"
                    maxlength={"4"}
                    minlength={"4"}
                    required
                  />
                </div>
              </div>

              <button type="submit">Aceptar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormNuevaCuenta;
