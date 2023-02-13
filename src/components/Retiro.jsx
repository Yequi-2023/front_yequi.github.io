import React from 'react'
import { Navbar } from '../layouts/Navbar'
import '../styles/Retiro.css'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import md5 from "md5";

const Retiro = () => {
    const [contrasenaInput, setContrasena] = useState("");
    const leerInputContrasena = (e) => {
        setContrasena(e.target.value);
    };
    const datos_formulario = (e) => {
        e.preventDefault()
    }
    let codigo_aleatorio=(Math.floor(Math.random() * (999999 - 99999 + 1)) + 99999);
    
    const fetchData = async () => {
        try {
            if (contrasenaInput <= 0) {
                toast.error('La contraseña no puede estar vacia', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                const datos = await fetch('http://127.0.0.1:8000/mi_api/Codigo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        usuario: localStorage.getItem("usuario"),
                        codigo: codigo_aleatorio,
                        contrasena: md5(contrasenaInput)
                    }),
                });
                const data = await datos.json();
                if (data == 'Codigo generado'){
                    toast.success('Codigo: '+codigo_aleatorio, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }else{
                    toast.error('Contraseña incorrecta !', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setContrasena('')
                }
            }
        } catch (error) {
            toast.error('Algo salio mal', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };
    
    return (
        <div className='contenedor-retiro' >
            < Navbar />
            <ToastContainer />
            <div className='retiro'>
                <h2>RETIRAR</h2>
                <form className='formulario-retiro' onSubmit={datos_formulario}>
                    <label htmlFor="valor-retirar">Confirmar Contraseña</label>
                    <input type="password" value={contrasenaInput} onChange={leerInputContrasena} required />
                    <button onClick={fetchData}>Generar Codigo</button>
                </form>
            </div>
        </div>
    )
}
export default Retiro