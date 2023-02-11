import React from 'react'
import { useEffect, useState } from 'react'

import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import '../src/styles/Login.css'
// import Inicio from '../src/components/Inicio';
import { Link } from "react-router-dom"



const Login = ({ getLogin }) => {
    const [loginData, setLoginData] = useState({
        usuario: '',
        contrasena: '',
    });
    // const navigate = useNavigate()


    const dataLogin = (e) => {
        let value = e.target.value;
        if (e.target.name === 'usuario') {
            value = e.target.value.replace(/\D/g, '');
        }
        if (e.target.name === 'contrasena') {
            value = e.target.value.replace(/\D/g, '');
        }
        setLoginData({ ...loginData, [e.target.name]: value });
    };

    return (
        <div className="contenedor-general-login" >
            <img className='logo' src="/logo.png" alt="logo" />
            <div className='contenido-login'>
                <div className='decoracion'>
                    {/* <img src="/equipo-logo.png" alt="" /> */}
                </div>
                <Container className='login' /*maxWidth="sm"*/>
                    <div className='contenedor-imagen-logo-usuario'>
                        <img src="/logo-usuario.png" alt="" />
                    </div>
                    <Grid /*
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: '100vh' }}*/>
                        <Grid /*item*/>
                            <Paper className='contenedor-inputs' /*sx={{ padding: '1.2em', borderRadius: '0.5em' }}*/>
                                {/* <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
                                    Iniciar sesión
                                </Typography> */}
                                <Box /*component="form"*/ className='caja-login'>
                                    <label htmlFor="usuario"> Usuario *</label>
                                    <TextField
                                        type="text"
                                        name="usuario"
                                        // fullWidth
                                        // label="Usuario"
                                        inputProps={{ maxLength: 10 }}
                                        /*sx={{ mt: 2, mb: 1.5 }}*/
                                        onChange={dataLogin}
                                        value={loginData.usuario}
                                        className='input-login'
                                        required
                                    />
                                    <label htmlFor="contrasena"> Contrasena *</label>
                                    <TextField
                                        type="password"
                                        name="contrasena"
                                        // fullWidth
                                        // label="Contraseña"
                                        inputProps={{ maxLength: 4 }}
                                        /*sx={{ mt: 1.5, mb: 1.5 }}*/
                                        onChange={dataLogin}
                                        value={loginData.contrasena}
                                        className='input-login'
                                        required
                                    />
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        /*sx={{ mt: 1.5, mb: 3 }}*/
                                        className='boton-iniciar-sesion'
                                        onClick={(e) => getLogin(loginData)} >
                                        Iniciar sesión
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                <Link to="/crear_usuario">Crear usuario</Link>
                </Container>
            </div>
        </div>
    )
}
export default Login
