import React from 'react'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'></div>
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
