import React, { useEffect, useState } from 'react'
import '../styles/Inicio.css'
import { Link } from 'react-router-dom'

export const Inicio = () => {

    const [usuario, setUsuario] = useState("")

  return (
    <div className='contenedor-inicio'>
        <nav className='navbar-inicio'>
            <div className='logo'></div>
            <div className='logo-usuario'>
                <img src="/logo-usuario.png" alt="" />
                <h2 className='nombre-usuario'>Juan torres{/*aqui va el nombre de usuario*/}</h2>
            </div>
        </nav>
        <div className='inicio'>
            <div className='contenedor-inicio-historial'>
                <img src="/logo-historial.png" alt="logo-historial" />
                <h3>historial</h3>
            </div>
            <div className='contenedor-inicio-saldo'>
                <div className='circulo-saldo'>
                    <h2>SALDO</h2>
                    <h3>2.000.000.00{/*aqui va el saldo*/}</h3>
                </div>
            </div>
            <div className='contenedor-inicio-transacciones'>
                <Link to="/retiro" className='card' >
                    <div className='card-img'>
                        <img src="/logo-retiro.png" alt="logo-retiro" />
                    </div>
                    <h4>RETIRO</h4>
                </Link>
                <Link to="/transferencia" className='card'>
                    <div className='card-img'>
                        <img src="/logo-transferencia.png" alt="logo-transferencia" />
                    </div>
                    <h4>TRANSFERENCIA</h4>
                </Link>
                <Link to="/pagoservicios" className='card'>
                    <div className='card-img'>
                        <img src="/logo-servicios-publicos.png" alt="logo-servicios-publicos" />
                    </div>
                    <h4>PAGO DE SERVICIOS <br></br>PUBLICOS</h4>
                </Link>
                <Link to="/pago_obligaciones" className='card'>
                    <div className='card-img'>
                        <img src="/logo-creditos.png" alt="logo-creditos" />
                    </div>
                    <h4>TARJETA DE CREDITO <br></br>Y CREDITOS</h4>
                </Link>
            </div>
        </div>
    </div>
  )
}
