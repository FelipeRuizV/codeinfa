import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from 'sweetalert2';

import Carousel from 'react-bootstrap/Carousel';
import Logo from "../../images/logoletras.png";
import Alert from "react-bootstrap/Alert";
// ... (estado y funciones anteriores)

const Anuncios = () => {
    const [anuncios, setAnuncios] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const [fechaCaducidad, setFechaCaducidad] = useState("");

    const [nombreAnuncio, setNombreAnuncio] = useState("");
    const [contenidoAnuncio, setContenidoAnuncio] = useState("");
    const [anuncioEditando, setAnuncioEditando] = useState(null);
    const [asuntoAnuncio, setAsuntoAnuncio] = useState("");
    const [fechaAnuncio, setFechaAnuncio] = useState("");
    const [excedioLimite, setExcedioLimite] = useState(false);


    const [triggerRender, setTriggerRender] = useState(false);

    const ordenarAnuncios = (anuncios) => {
        const anuncioFinal = anuncios.find(anuncio => anuncio.nombre === 'anunciofinal');
        const otrosAnuncios = anuncios.filter(anuncio => anuncio.nombre !== 'anunciofinal');
        if (anuncioFinal) {
            return [...otrosAnuncios, anuncioFinal];
        } else {
            return anuncios; // El anuncio 'anunciofinal' no se encontró en el array
        }
    };
    // Resto de tu código para cargar, editar y eliminar anuncios.
    // Función para confirmar la eliminación de un anuncio

    const cargarAnunciosDesdeServidor = () => {
        axios
            .get("http://localhost:3001/anuncios")
            .then((response) => {
                // Filtrar los anuncios que aún no han caducado
                const anunciosFiltrados = response.data.filter((anuncio) => {
                    return new Date(anuncio.fecha_caducidad) > new Date();
                });
                setAnuncios(anunciosFiltrados);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Llama a la función para cargar los anuncios cuando el componente se monte
    const confirmarEliminarAnuncio = (anuncioId) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarAnuncio(anuncioId);
            }
        });
    };
    const limpiarCamposAnuncio = () => {
        setNombreAnuncio("");
        setAsuntoAnuncio("");
        setFechaAnuncio("");
        setContenidoAnuncio("");
        setFechaCaducidad("");
    };
    // Función para eliminar un anuncio
    const eliminarAnuncio = (anuncioId) => {
        axios
            .delete(`http://localhost:3001/anuncios/${anuncioId}`)
            .then((response) => {
                // Actualiza el estado de 'anuncios' eliminando el anuncio con el ID correspondiente
                const nuevosAnuncios = anuncios.filter((anuncio) => anuncio.id !== anuncioId);
                setAnuncios(nuevosAnuncios);

                // Cambia el valor de triggerRender para forzar un re-render
                setTriggerRender(!triggerRender);

                // Muestra un SweetAlert de éxito después de eliminar el anuncio
                Swal.fire("Éxito", "El anuncio se ha eliminado con éxito.", "success");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const confirmarGuardarAnuncio = () => {
        if (nombreAnuncio.trim() !== "" && contenidoAnuncio.trim() !== "") {
            const MAX_CONTENT_LENGTH = 285; // Define la longitud máxima del contenido del anuncio
            if (contenidoAnuncio.length <= MAX_CONTENT_LENGTH) {
                const nuevoAnuncio = {
                    nombre: nombreAnuncio,
                    asunto: asuntoAnuncio,
                    fecha: fechaAnuncio,
                    cuerpo: contenidoAnuncio,
                    fecha_caducidad: fechaCaducidad,
                };

                // Realiza una solicitud al servidor para guardar el anuncio
                axios
                    .post("http://localhost:3001/anuncios", nuevoAnuncio)
                    .then((response) => {
                        setAnuncios([...anuncios, response.data]);
                        limpiarCamposAnuncio();
                        setShowModal(false);
                        setExcedioLimite(false); // Reiniciar el estado de exceder límite

                        // Después de agregar el anuncio, muestra un SweetAlert de éxito
                        Swal.fire("Éxito", "El anuncio se ha creado con éxito.", "success");
                        // Después de mostrar el SweetAlert, actualiza la lista
                        cargarAnunciosDesdeServidor();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                // Muestra un SweetAlert de error si el contenido excede el límite
                Swal.fire("Error", "El contenido del anuncio excede el límite de 285 caracteres.", "error");
                setExcedioLimite(true); // Establecer el estado para mostrar la alerta de exceder límite
            }
        } else {
            // Muestra un SweetAlert de error si falta información
            Swal.fire("Error", "Por favor, complete todos los campos obligatorios.", "error");
        }
    };

    function formatDate(date) {
        const formattedDate = new Date(date);
        const dia = (formattedDate.getDate()).toString().padStart(2, '0');
        const mes = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
        const año = formattedDate.getFullYear();
        return `${dia}/${mes}/${año}`;
    }

    useEffect(() => {
        cargarAnunciosDesdeServidor(); // Agrega esta línea
    }, []);


    return (
        <div className="anuncios-container">
            <div className="boton-redactar">
                <h2>Anuncios</h2>
                <Button variant="primary" onClick={() => setShowModal(true)}>
                    Redactar Anuncio
                </Button>

            </div>
            <br />

            <Modal
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                    setAnuncioEditando(null);
                    limpiarCamposAnuncio();
                    setExcedioLimite(false);

                }}
            >
                <Modal.Header closeButton className="custom-modal-header">
                    <Modal.Title>{"Redactar Anuncio"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="custom-modal-body">
                    <div>
                        <label>Nombre del Anuncio:</label>
                        <input
                            type="text"
                            class="form-control"
                            value={nombreAnuncio}
                            onChange={(e) => setNombreAnuncio(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label>Asunto:</label>
                        <input
                            type="text"
                            class="form-control"
                            value={asuntoAnuncio}
                            onChange={(e) => setAsuntoAnuncio(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label>Fecha:</label>
                        <input
                            type="date"
                            class="form-control"
                            value={fechaAnuncio}
                            onChange={(e) => setFechaAnuncio(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label>Contenido del Anuncio: (máximo 285)</label>
                        <textarea
                            class="form-control"
                            value={contenidoAnuncio}
                            onChange={(e) => setContenidoAnuncio(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label>Fecha de Caducidad:</label>
                        <input
                            type="date"
                            class="form-control"
                            value={fechaCaducidad}
                            onChange={(e) => setFechaCaducidad(e.target.value)}
                        />
                        <br></br>
                    </div>


                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                    <div className="custom-botones-cancelar">
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancelar
                        </Button>
                    </div>
                    <div className="custom-botones-guardar">
                        <Button variant="primary" onClick={confirmarGuardarAnuncio}>
                            {anuncioEditando !== null ? "Actualizar" : "Guardar"}
                        </Button>
                    </div>
                </Modal.Footer>

            </Modal>
            {/* Lista de anuncios */}
            <div class="carousel-container">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        {anuncios.map((anuncio, index) => (
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                key={index}
                                className={index === 0 ? "active" : ""}
                                style={{ backgroundColor: 'black' }}
                            ></button>
                        ))}
                    </div>
                    <div class="carousel-inner ">
                        {ordenarAnuncios(anuncios).map((anuncio, index) => {
                            if (anuncio.nombre !== 'anunciofinal') {
                                return (
                                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                        <Card className="anuncio-card" style={{ textAlign: 'center', height: '310px' }}>
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: '25px' }}><b>{anuncio.nombre}</b> </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{anuncio.asunto}</Card.Subtitle>
                                                <Card.Text style={{ height: '125px' }}>{anuncio.cuerpo}</Card.Text>
                                                <br></br>
                                                <Card.Text className="mt-2" style={{ display: 'flex', justifyContent: 'space-between', height: '10px' }}>
                                                    <span>
                                                        Creado: {anuncio.fecha ? formatDate(anuncio.fecha) : "Sin fecha"}
                                                    </span>
                                                    <span>
                                                        Vence: {anuncio.fecha_caducidad ? formatDate(anuncio.fecha_caducidad) : "Sin fecha"}
                                                    </span>
                                                </Card.Text>
                                                <Button style={{ backgroundColor: 'transparent', border: 'none', marginTop: '-20px' }} variant="danger" onClick={() => confirmarEliminarAnuncio(anuncio.id)}>
                                                    <box-icon name='trash' size='30px'></box-icon>
                                                </Button>
                                            </Card.Body >
                                        </Card>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                        <Card className="anuncio-card" style={{ textAlign: "center", height: '310px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <Card.Body>
                                                <Card.Text style={{ height: '125px' }}>
                                                    <h1>Ups...</h1>
                                                    <h2 style={{ marginTop: '80px' }}>Nos hemos quedado sin anuncios por mostrarte ☹.</h2>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ left: "-50px" }}>
                        <span class="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br /><br />
        </div>

    );
};

export default Anuncios;


