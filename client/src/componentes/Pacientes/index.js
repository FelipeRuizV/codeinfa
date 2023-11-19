import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Pacientes = () => {
    const [empleadosList, setEmpleados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [filtro, setFiltro] = useState('rut'); // Por defecto, filtrar por RUT
    const [filtermode, setFiltermode] = useState(true);

    const filtermodd = () => {
        setFiltermode(!filtermode);
    }
    const limpiarCampos = () => {
        setBusqueda('');
        getEmpleados(); // Cargar la lista completa
    };

    const deleteEmple = (val) => {
        Swal.fire({
            title: '¿Confirmar eliminación?',
            html: `<i>¿Realmente desea eliminar a <strong>${val.nombre}</strong> ?</i>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://localhost:3001/riesgo/${val.rut}`)
                Axios.delete(`http://localhost:3001/sesiones/${val.rut}`)
                Axios.delete(`http://localhost:3001/delete/${val.id}`).then(() => {
                    getEmpleados();
                    limpiarCampos();
                    Swal.fire({
                        icon: 'success',
                        title: `${val.nombre} fue eliminado`,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }).catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal.',
                        footer:
                            JSON.parse(JSON.stringify(error)).message === 'Network Error'
                                ? 'Intente más tarde'
                                : JSON.parse(JSON.stringify(error)).message,
                    });
                });
            }
        });
    };

    const recargar = () =>{
        window.location.reload();
    }

    const [usuarios, setUsuarios] = useState([]);
    const getEmpleados = () => {
        Axios.get('http://localhost:3001/usuarios').then((response) => {
            setEmpleados(response.data);
            setUsuarios(response.data);
        });
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        console.log('Buskksksk', e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = empleadosList.filter((elemento) => {
            if (elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.prioridad.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.rut.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.profesional.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }



    useEffect(() => {
        getEmpleados();
    }, []);

    return (
        <div className="todopacientes1">
            <div className="col-lg-7.5">
                <div className="todopacientes2">
                    <div className="titulopacientes">
                        <b>ADMINISTRACIÓN DE USUARIES</b>
                    </div>
                    <div className="todo123">
                        <Row>
                            <Col xs="auto">
                                <div className="buscarpacientesc">
                                    <Form.Control
                                        value={busqueda}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Buscar por RUT, empleado o prioridad"
                                        className="mr-sm-2"
                                    />
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="buscarpacientesb">
                                    <button
                                        className="btn btn"
                                        type="button"
                                        onClick={limpiarCampos} // Limpiar el campo de búsqueda
                                    >
                                        Limpiar
                                    </button>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="añadirpacientesb">
                                    <Link to="/añadirpacientes">
                                        <button className="btn btn" type="button">
                                            Añadir Usuarie
                                        </button>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="añadirpacientesb">
                                    {filtermode ? (
                                        <button className="btn btn" type="button" onClick={() => { filtermodd() }}>
                                            Mostrar lista de espera
                                        </button>
                                    ) : (
                                        <button className="btn btn" type="button" onClick={() => { filtermodd() }}>
                                            Salir lista de espera
                                        </button>
                                    )}


                                </div>
                            </Col>

                          
                        </Row>
                    </div>
                    <div className='table-container'>
                        <table className="table table">

                            {filtermode ? (
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col" >NOMBRE</th>
                                        <th scope="col">RUT</th>
                                        <th scope="col">ENCARGADO</th>
                                        <th scope="col">PRIORIDAD</th>
                                        <th scope="col">TELÉFONO</th>
                                        <th scope="col" length="70px"></th>
                                    </tr>
                                </thead>
                            ) : (
                              
                                <thead >
                                     
                                     <div> <Form.Label id="basic-addon1"  scope="col" colSpan="6"  style={{display:"flex", justifyContent:'center', background:'transparent'}}> <font size='4'> <b>Se encuentra en lista de espera: &nbsp;</b></font> </Form.Label></div>
                                    <tr>
                                        <th className="table-success" scope="col" >NOMBRE</th>
                                        <th className="table-success" scope="col">RUT</th>
                                        <th className="table-success" scope="col">ENCARGADO</th>
                                        <th className="table-success" scope="col">PRIORIDAD</th>
                                        <th className="table-success" scope="col">TELÉFONO</th>
                                        <th className="table-success" scope="col" length="50px"></th>
                                    </tr>
                                </thead>
                            )}
                            <tbody>
                                {usuarios.map((val, key) => {
                                    return (
                                        val.listaespera === 'NO' && filtermode ? (
                                            <tr key={val.id}>
                                                <td>{val.nombre.toUpperCase()}</td>
                                                <td>{val.rut}</td>
                                                <td>{val.profesional.toUpperCase()}</td>
                                                <td
                                                    style={{
                                                        color:
                                                            val.prioridad.toLowerCase() === 'urgente'
                                                                ? '#790dfc'
                                                                : val.prioridad.toLowerCase() === 'grave'
                                                                    ? 'red'
                                                                    : val.prioridad.toLowerCase() === 'medio'
                                                                        ? 'orange'
                                                                        : val.prioridad.toLowerCase() === 'leve'
                                                                            ? 'green'
                                                                            : 'black',
                                                    }}
                                                >
                                                    {val.prioridad.toUpperCase()}
                                                </td>
                                                <td>{val.telefono}</td>
                                                <td style={{ width: '13%' }}>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn"
                                                            type="button"
                                                            id="dropdownMenuButton1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <box-icon name="dots-horizontal-rounded"></box-icon>
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    type="button"
                                                                    onClick={() => {
                                                                        deleteEmple(val);
                                                                    }}
                                                                >
                                                                    <b>Eliminar</b>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to={`/infopacientes?id=${val.id}&rut=${val.rut}`}
                                                                    className="dropdown-item"
                                                                >
                                                                    <b> Ver Info</b>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            val.listaespera === 'SI' && !filtermode ? (
                                                <tr key={val.id}>
                                                    <td>{val.nombre.toUpperCase()}</td>
                                                    <td>{val.rut}</td>
                                                    <td>{val.profesional.toUpperCase()}</td>
                                                    <td
                                                        style={{
                                                            color:
                                                                val.prioridad.toLowerCase() === 'urgente'
                                                                    ? '#790dfc'
                                                                    : val.prioridad.toLowerCase() === 'grave'
                                                                        ? 'red'
                                                                        : val.prioridad.toLowerCase() === 'medio'
                                                                            ? 'orange'
                                                                            : val.prioridad.toLowerCase() === 'leve'
                                                                                ? 'green'
                                                                                : 'black',
                                                        }}
                                                    >
                                                        {val.prioridad.toUpperCase()}
                                                    </td>
                                                    <td>{val.telefono}</td>
                                                    <td style={{ width: '13%' }}>
                                                        <div className="dropdown">
                                                            <button
                                                                className="btn"
                                                                type="button"
                                                                id="dropdownMenuButton1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <box-icon name="dots-horizontal-rounded"></box-icon>
                                                            </button>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        type="button"
                                                                        onClick={() => {
                                                                            deleteEmple(val);
                                                                        }}
                                                                    >
                                                                        <b>Eliminar</b>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to={`/infopacientes?id=${val.id}&rut=${val.rut}`}
                                                                        className="dropdown-item"
                                                                    >
                                                                        <b> Ver Info</b>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ) : (
                                                null
                                            )

                                        )
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
