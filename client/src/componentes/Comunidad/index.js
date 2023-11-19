import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import jb from "../../images/jb.png";
import Axios from "axios";

export const Comunidad = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [empleadosList, setEmpleados] = useState([]);
  const storedNombreUsuario = localStorage.getItem("nombreUsuario");

  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados").then((response) => {
      setEmpleados(response.data);
    });
  }

  useEffect(() => {
    getEmpleados();
  }, []);

  return (
    <div className='todocomunidad'>
      <div className='titulocomunidad'><b>NUESTRA COMUNIDAD</b></div>
      <div className='mapp'>
        <div className='comunidad-container'>
          {empleadosList.map((val, key) => (
            <div key={val.id} className='com' style={{ marginRight: '20px' }}>
              <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={jb} className="w-60" />
                <Card.Body>
                  <Card.Title style={{ textAlign: 'center' }}>{val.cargo}</Card.Title>
                  <Card.Text style={{ textAlign: 'center' }}>
                    {val.nombre}<br></br>
                    {val.correo}<br></br>
                    {val.telefono}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comunidad;

