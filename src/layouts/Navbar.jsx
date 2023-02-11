import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/inicio' className='logo'></Link>
            <div className='saldo-navbar'>
                <h2>SALDO</h2>
                <h3>2.000.000.0</h3>
            </div>
            <div className='logo-usuario'>
                <img src="/logo-usuario.png" alt="" />
                <h2 className='nombre-usuario'>Juan torres{/*aqui va el nombre de usuario*/}</h2>
            </div>
        </nav>
    )
}
