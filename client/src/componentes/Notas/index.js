import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import axios from 'axios';
import Anuncios from "../anuncios";
import Carousel from 'react-bootstrap/Carousel';

export const Notas = () => {

  const storedNombreUsuario = localStorage.getItem("nombreUsuario");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [rutUsuario, setRut] = useState("");

  const [notas, setNotas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [notaEditando, setNotaEditando] = useState(null);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState("");
  const [userId, setuUserId] = useState(null);

  const [excedioLimite, setExcedioLimite] = useState(false);

  const coloresPredefinidos = [
    { nombre: "🔴", valor: "#ffb6b1" },
    { nombre: "🟠", valor: "#ffd699" },
    { nombre: "🟡", valor: "#fff8db" },
    { nombre: "🟢", valor: "#d9ead3" },
    { nombre: "🔵", valor: "#b3d9ff" },
    { nombre: "🟣", valor: "#e6ccff" }
  ];

  useEffect(() => {
    const storedCorreo = localStorage.getItem("nombreUsuario");

    if (storedCorreo) {
      axios.get(`http://localhost:3001/empleados?correo=${storedCorreo}`)
        .then((response) => {
          // Tu lógica para obtener el nombre y otros datos del usuario
          const empleadosFiltrados = response.data.filter((empleado) =>
            empleado.correo === storedCorreo
          );
          const empleadoEncontrado = empleadosFiltrados[0];

          if (empleadoEncontrado) {
            const { nombre, rut } = empleadoEncontrado;
            setNombreUsuario(nombre);
            setRut(rut);
          }
        })
        .catch((error) => {
          console.error("Error al obtener detalles del usuario:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (nombreUsuario) {
      getNotas();
    }
  }, [nombreUsuario]);


  const getNotas = () => {
    // Realiza una solicitud GET al cargar el componente para obtener las notas desde el servidor
    axios.get(`http://localhost:3001/notas?nombre_empleado=${nombreUsuario}`).then(response => {
      setNotas(response.data);
    });
  };


  const limpiarnota = () => {
    setColor("");
    setNombre("");
    setDescripcion("");
  }
  const agregarNota = () => {

    if (nombre.trim() !== "") {
      if (nombre.trim() !== "" && descripcion.trim() !== "" && color.trim() !== "") {
        const MAX_CONTENT_LENGTH = 200;
        if (descripcion.length <= MAX_CONTENT_LENGTH) {
          const nuevaNota = { nombre, descripcion, color, nombre_empleado: nombreUsuario.toUpperCase() };
          axios.post('http://localhost:3001/notas', nuevaNota) // Cambia la URL de acuerdo a tu servidor
            .then(response => {
              // Actualiza el estado de las notas con la nueva nota
              setNotas([...notas, response.data]);
              limpiarnota();

              setShowModal(false);
              setModoEdicion(false);
              setNotaEditando(null);
              Swal.fire("Éxito", "La nota se ha creado con éxito.", "success");

              /*window.location.reload();*/

              getNotas();
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          // Muestra un SweetAlert de error si el contenido excede el límite
          Swal.fire("Error", "El contenido del anuncio excede el límite de 200 caracteres.", "error");
          setExcedioLimite(true); // Establecer el estado para mostrar la alerta de exceder límite
        }
      } else {
        // Muestra un SweetAlert de error si falta información
        Swal.fire("Error", "Por favor, complete todos los campos obligatorios.", "error");
      }
    }
  };


  const editarNota = (index) => {
    const notaAEditar = notas[index];
    setNombre(notaAEditar.nombre);
    setDescripcion(notaAEditar.descripcion);
    setColor(notaAEditar.color);

    setNotaEditando(index);
    setModoEdicion(true);
    setShowModal(true);
  };


  const actualizarNota = () => {
    if (notaEditando !== null && nombre.trim() !== "") {
      const notaId = notas[notaEditando].id;
      const notaActualizada = { id: notaId, nombre, descripcion, color };
      axios.put(`http://localhost:3001/notas/${notaId}`, notaActualizada) // Cambia la URL de acuerdo a tu servidor
        .then(response => {
          const nuevasNotas = [...notas];
          nuevasNotas[notaEditando] = response.data;
          setNotas(nuevasNotas);
          getNotas();
        })
        .catch(error => {
          console.error(error);
        });
      setNombre("");
      setDescripcion("");
      setColor("");
      setShowModal(false);
      setModoEdicion(false);
      setNotaEditando(null);
    }
  };


  const confirmarEliminar = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarNota(index);
        Swal.fire(
          'Eliminado',
          'La nota ha sido eliminada',
          'success'
        );
      }
    });
  };

  const eliminarNota = (index) => {
    const notaId = notas[index].id;
    axios.delete(`http://localhost:3001/notas/${notaId}`) // Cambia la URL de acuerdo a tu servidor
      .then(response => {
        const nuevasNotas = [...notas];
        nuevasNotas.splice(index, 1);
        setNotas(nuevasNotas);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const notasPorPestaña = 4;
  const gruposDeNotas = [];

  for (let i = 0; i < notas.length; i += notasPorPestaña) {
    gruposDeNotas.push(notas.slice(i, i + notasPorPestaña));
  }

  return (
    <div className="main-container">
      <div className="anuncios-container"><Anuncios /></div>
      <div className="notas">
        <div className="hacernota">
          <h2 className="notas-title">Notas y Recordatorios</h2>
          <div className="notabutton">          
          <Button variant="primary" onClick={() => { setShowModal(true); setModoEdicion(false); limpiarnota() }}>
            Agregar Nota
          </Button>
          </div>
        </div>
        <Modal show={showModal} onHide={() => { setShowModal(false); setModoEdicion(false); setNotaEditando(null); }}>
          <Modal.Header closeButton className="custom-modal-header">
            <Modal.Title>{modoEdicion ? "Editar Nota" : "Agregar Nota"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label>Nombre de la nota:</label>
              <input
                type="text"
                class="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>Descripción (máx 200):</label>
              <textarea
                class="form-control"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>Color:</label>
              <div className="color-options-container">
                {coloresPredefinidos.map((colorOption, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="colorOptions"
                      id={`colorOption${index}`}
                      value={colorOption.valor}
                      checked={color === colorOption.valor}
                      onChange={(e) => setColor(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor={`colorOption${index}`}>
                      {colorOption.nombre}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="custom-modal-footer">
            <div className="custom-botones-cancelar"> 
            <Button variant="secondary" onClick={() => { setShowModal(false); setModoEdicion(false); setNotaEditando(null); }}>
              Cancelar
            </Button>
            </div>

            <div className="custom-botones-guardar">
            <Button variant="primary" onClick={modoEdicion ? actualizarNota : agregarNota}>
              {modoEdicion ? "Actualizar" : "Agregar"}
            </Button>
            </div>
            
          </Modal.Footer>
        </Modal>


        <div className='todonotas'>
          <div className='mapp'>
            <div className='notas-container' style={{marginTop: '15px'}}> 
              {notas.map((val, key) => (
                <div key={val.id} className='com' style={{ marginRight: '4px' }}>
                  <Card style={{height:'300px',width: '230px', backgroundColor: val.color, border:'none', textAlign: 'center',margin: '20px'}}>
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Card.Title style={{ textAlign: 'center' }}>{val.nombre}</Card.Title>
                      <Card.Text style={{ textAlign: 'center' }}>
                        {val.descripcion}<br></br>
                      </Card.Text>
                      <div className="buttons-container">
                        <Button style={{ backgroundColor: 'transparent', border: 'none', alignItems:'center'}} variant="warning" onClick={() => editarNota(key)}>
                          <box-icon name='edit' type='solid' size='30px'></box-icon>
                        </Button>
                        <Button style={{ backgroundColor: 'transparent', border: 'none', alignItems:'center' }} variant="danger" onClick={() => confirmarEliminar(key)}>
                          <box-icon name='trash' size='30px'></box-icon>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};