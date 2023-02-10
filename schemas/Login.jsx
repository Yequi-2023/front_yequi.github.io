import React from 'react'
import { useEffect, useState } from 'react'
import md5 from 'md5'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography
} from '@mui/material';
// import Inicio from '../src/components/Inicio';

const URL = 'http://127.0.0.1:8000/mi_api/'

function Login() {
    const [inputValida, setInputValida] = useState([""]);
    const [loginData, setLoginData] = useState({
        usuario: '',
        contrasena: '',
    });

    const fetchData = async () => {
        try {
            const datos = await fetch(URL + 'login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 'usuario': loginData.usuario, 'contrasena': md5(loginData.contrasena) })
            });
            if (datos.ok) {
                const data = await datos.json()
                setInputValida(data)
                if (data == 'error') {
                    alert("Credenciales incorrectas")
                    window.location.reload(true)
                }
                else {
                    alert("Bienvenida " + data)
                }
            }
        } catch (error) {
            console.log("El error es", error);
        }
    }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('credenciales', loginData);
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
                                <Box /*component="form"*/ className='caja-login' onSubmit={handleSubmit}>
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
                                        onClick={fetchData} >
                                        Iniciar sesión
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}
export default Login
