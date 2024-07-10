import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AgregarUsuario } from "./agregaruser/index";
import { Pacientes } from "./Pacientes/index";
import { InfoPacientes } from "./info/index";
import Comunidad from "./Comunidad";
import {Calendario} from "./Calendario";
import { Notas } from "./Notas";



export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Notas />} />
        <Route path="/infopacientes" exact element={<InfoPacientes />} />
        <Route path="/todopacientes" exact element={<Pacientes />} />
        <Route path="/añadirpacientes" exact element={<AgregarUsuario />} />
        <Route path="/calendario" exact element={<Calendario/>} />
        <Route path="/comunidad" exact element={<Comunidad />} />
        <Route path="/agregarusuario" exact element={<AgregarUsuario/>}  />
      </Routes>
    </section>
  );
};
