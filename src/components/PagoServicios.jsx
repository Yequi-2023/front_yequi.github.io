import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { Link } from 'react-router-dom'
import '../styles/pagoServicios.css'

const PagoServicios = () => {

    const datos_formulario = (e) => {
        e.preventDefault()
        console.log(e.target.numero_cuenta.value)
        console.log(e.target.numero_identificacion.value)
        console.log(e.target.tipo_documento.value)
        console.log(e.target.valor.value)
    }

    return (
        <div className='contenedor_pago_servicios' >
            < Navbar />
            <div className='pago_servicios'>
                <h2>PAGO DE SERVICIOS PUBLICOS</h2>
                <div className='contenedor_servicios'>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img src="/logo-agua.png" alt="logo-retiro" />
                        </Link>
                        <h4>AGUA</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img src="/logo-energia.png" alt="logo-retiro" />
                        </Link>
                        <h4>ENERGIA</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img src="/logo-gas.png" alt="logo-retiro" />
                        </Link>
                        <h4>GAS</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img src="/logo-claro.png" alt="logo-retiro" />
                        </Link>
                        <h4>CLARO</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img src="/logo-tigo.png" alt="logo-retiro" />
                        </Link>
                        <h4>TIGO</h4>
                    </div>
                    <div className='card_servicio' >
                        <Link to="/pagoserviciospublicos" className='card_img_servicio'>
                            <img src="/logo-etb.png" alt="logo-retiro" />
                        </Link>
                        <h4>ETB</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagoServicios