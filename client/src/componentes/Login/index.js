// Login.js

import React, { useState } from "react";
import fondo from "../../images/fondologin.png";
import Logo2 from "../../images/logo2.png";
import { Link } from "react-router-dom";


export const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = () => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario, contrasena }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Inicio de sesión exitoso") {
          const nombreUsuario = usuario;
          onLogin();
          setMensaje("Ingreso correcto");

          localStorage.setItem("nombreUsuario", nombreUsuario);
          localStorage.setItem("isLoggedIn", "true");
        } else {
          setMensaje("Credenciales incorrectas");
        }
      })
      .catch((error) => {
        console.error(error);
        setMensaje("Error en el servidor");
      });
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <div className="login-container">
    <div className="login">
      <div
        className="fondologin"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="loginnn ">
          <div className="mr-auto">
            <img src={Logo2} alt="logo2" style={{ width: "100%", height: "100%" }} />
          </div>
          <form className="container">
            <fieldset className={`form-group ${usuario ? "active" : ""}`}>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={usuario}
                style={{ boxShadow: "none" }}
                onChange={(e) => handleInputChange(e, setUsuario)}
              />
              <label htmlFor="exampleInputEmail1">Email</label>
              <br />
            </fieldset>
            <fieldset className={`form-group ${contrasena ? "active" : ""}`}>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={contrasena}
                style={{ boxShadow: "none" }}
                onChange={(e) => handleInputChange(e, setContrasena)}
              />
              <label htmlFor="exampleInputPassword1">Password</label>
            </fieldset>
          </form>

          {mensaje && (
            <div
              className={`text ${mensaje === "Ingreso correcto" ? "text-success" : "text-danger"}`}
              style={{ marginLeft: "14px", marginTop: '5px'}}
            >
              {mensaje}
            </div>
          )}
          <br/>

          <div className="d-flex justify-content-center">

           
            
            <Link to='/' type="button" className="btn btn-success w-50 rounded-5 my-auto" onClick={handleLogin}>
              INGRESAR
            </Link>
         

          </div>
        </div>
      </div>
    </div>
    </div>
  );
  
};