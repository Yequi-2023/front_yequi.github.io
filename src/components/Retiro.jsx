import React from 'react'
import { Navbar } from '../layouts/Navbar'
import '../styles/Retiro.css'

const Retiro = () => {

    const datos_formulario = (e) => {
        e.preventDefault()
        alert(e.target.valor_retirar.value)
        e.target.valor_retirar.value=''
    }

  return (
    <div className='contenedor-retiro' >
        < Navbar/>
        <div className='retiro'>
            <h2>RETIRAR</h2>
            <form className='formulario-retiro' onSubmit={e=>(datos_formulario(e))}>
                <label htmlFor="valor-retirar">Valor a retirar</label>
                <input type="number" name='valor_retirar' required/>
                <button type='submit'>Generar Codigo</button>
            </form>
        </div>
    </div>
  )
}

export default Retiro