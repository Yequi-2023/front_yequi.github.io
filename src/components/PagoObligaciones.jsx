import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { Link } from 'react-router-dom'
import '../styles/PagoObligaciones.css'

const PagoObligaciones = () => {

  return (
    <div className='contenedor-pago-obligaciones' >
      < Navbar />
      <div className='pago-obligaciones'>
        <h2>PAGO DE OBLIGACIONES</h2>
        <div className='contenedor-obligaciones' >
          <div className='card_obligaciones' >
            <Link to="/tarjetasdecredito" className='card_img_obligaciones'>
              <img src="/tarjetas-de-credito.png" alt="tarjetas-de-credito" />
            </Link>
            <h4>TARJETA DE CREDITO</h4>
          </div>
          <div className='card_obligaciones' >
            <Link to="/tarjetasdecredito" className='card_img_obligaciones'>
              <img src="/creditos.png" alt="creditos" />
            </Link>
            <h4>CREDTOS</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PagoObligaciones