import Logout from "@mui/icons-material/Logout";
import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Inicio.css";

export const Inicio = () => {
  const [inputValida, setInputValida] = useState([""]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("usuario");
    localStorage.removeItem("tipoServicio");
    window.location.reload(true);
  };

  const fetchData = async () => {
    try {
      const datos = await fetch("http://127.0.0.1:8000/mi_api/mostrar_datos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario: localStorage.getItem("usuario") }),
      });
      if (datos.ok) {
        const data = await datos.json();
        setInputValida(data[0]);
      }
    } catch (error) {
      console.log("El error es", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="contenedor-inicio">
      <nav className="navbar-inicio">
        <div className="logo"></div>
        <div className="logo-usuario">
          <h2 className="nombre-usuario">{inputValida.nombre}</h2>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 80, height: 80 }}
                src="/logo-usuario.png"
              ></Avatar>
            </IconButton>
          </Tooltip>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </nav>
      <div className="inicio">
        <div className="contenedor-inicio-historial">
          <img src="/logo-historial.png" alt="logo-historial" />
          <h3>historial</h3>
        </div>
        <div className="contenedor-inicio-saldo">
          <div className="circulo-saldo">
            <h2>SALDO</h2>
            <h3>{inputValida.saldo}</h3>
          </div>
        </div>
        <div className="contenedor-inicio-transacciones">
          <Link to="/retiro" className="card">
            <div className="card-img">
              <img src="/logo-retiro.png" alt="logo-retiro" />
            </div>
            <h4>RETIRO</h4>
          </Link>
          <Link to="/transferencia" className="card">
            <div className="card-img">
              <img src="/logo-transferencia.png" alt="logo-transferencia" />
            </div>
            <h4>TRANSFERENCIA</h4>
          </Link>
          <Link to="/pagoservicios" className="card">
            <div className="card-img">
              <img
                src="/logo-servicios-publicos.png"
                alt="logo-servicios-publicos"
              />
            </div>
            <h4>
              PAGO DE SERVICIOS <br></br>PUBLICOS
            </h4>
          </Link>
          <Link to="/tarjetasdecredito" className="card">
            <div className="card-img">
              <img src="/logo-creditos.png" alt="logo-creditos" />
            </div>
            <h4>
              TARJETA DE CREDITO <br></br>Y CREDITOS
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
