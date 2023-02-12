import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { Link } from 'react-router-dom'
import '../styles/pagoServicios.css'
import { useState, useEffect } from "react";

const PagoServicios = () => {

    const guardarEven = (e) => {
        let evento = e.target.name;
        localStorage.setItem("tipoServicio", evento)
    };
    
    return (
        <div className='contenedor_pago_servicios' >
            < Navbar />
            <div className='pago_servicios'>
                <h2>PAGO DE SERVICIOS PUBLICOS</h2>
                <div className='contenedor_servicios'>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img name='agua' onClick={guardarEven} src="/logo-agua.png" alt="logo-retiro" />
                        </Link>
                        <h4>AGUA</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img name='energia' onClick={guardarEven} src="/logo-energia.png" alt="logo-retiro" />
                        </Link>
                        <h4>ENERGIA</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img name='gas' onClick={guardarEven} src="/logo-gas.png" alt="logo-retiro" />
                        </Link>
                        <h4>GAS</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img name='claro' onClick={guardarEven} src="/logo-claro.png" alt="logo-retiro" />
                        </Link>
                        <h4>CLARO</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img name='tigo' onClick={guardarEven} src="/logo-tigo.png" alt="logo-retiro" />
                        </Link>
                        <h4>TIGO</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img name='etb' onClick={guardarEven} src="/logo-etb.png" alt="logo-retiro" />
                        </Link>
                        <h4>ETB</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagoServicios