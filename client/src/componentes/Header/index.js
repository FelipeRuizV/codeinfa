import React, { useState, useEffect } from "react";
import Logo from "../../images/logoletras.png";
import { Link } from "react-router-dom";
import 'boxicons';
import Axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = ({ onLogout }) => {
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [rutUsuario, setRut] = useState("");
    const [empleadosList, setEmpleados] = useState([]);
    const storedNombreUsuario = localStorage.getItem("nombreUsuario");

    const handleLogout = () => {
        // Realiza cualquier acción de cierre de sesión necesaria
        // Luego, llama a la función onLogout para cambiar el estado de autenticación
        onLogout();
    };

    useEffect(() => {
        // Obtener el nombre de usuario almacenado en el localStorage
        const storedCorreo = localStorage.getItem("nombreUsuario");

        // Realizar una solicitud al servidor para obtener los detalles del usuario
        if (storedCorreo) {
            Axios.get(`http://localhost:3001/empleados?correo=${storedCorreo}`)
                .then((response) => {
                    const empleadosFiltrados = response.data.filter((empleado) =>
                        empleado.correo === storedCorreo
                    );
                    const empleadoEncontrado = empleadosFiltrados[0]; // Tomar el primer empleado encontrado

                    if (empleadoEncontrado) {
                        // Establecer los datos del usuario, aquí asumo que tienes propiedades como "nombre" y "rut"
                        const { nombre, rut } = empleadoEncontrado;

                        setNombreUsuario(nombre); // Establecer el nombre de usuario
                        setRut(rut);
                        // Puedes establecer otros datos del usuario aquí si es necesario
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener detalles del usuario:", error);
                });
        }

    }, [storedNombreUsuario]);


    return (
        <Navbar expand="lg" className="navbar1">
            <div className="mr-auto"> {/* Esto coloca el logo a la izquierda */}
                <img src={Logo} alt="logo" style={{ width: '100%', height: '100%' }} />
            </div>
            <Container>
                <Navbar.Brand className="mx-auto custom-brand">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/todopacientes">Usuaries</Nav.Link>
                        <Nav.Link href="/calendario">Calendario</Nav.Link>
                        <Nav.Link href="/comunidad">Comunidad</Nav.Link>
                    </Nav>
                </Navbar.Brand>
            </Container>
            <div className="session-info" style={{ marginRight: '30px', fontWeight: '500', fontSize:'13px'  }}>SESIÓN DE:  {nombreUsuario.toUpperCase()}</div>
            <Nav.Link to="/" onClick={handleLogout} style={{ marginRight: '20px' }}> {/* Ejecuta handleLogout en clic */}        
                <box-icon name='log-out' size='30px' color='white'  ></box-icon>
            </Nav.Link>
        </Navbar>
    )
}
