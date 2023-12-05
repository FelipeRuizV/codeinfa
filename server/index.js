const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port= 443;

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"usuarios_db"
});

// Ruta para obtener todos los eventos
app.get("/calendario", (req, res) => {
    db.query("SELECT * FROM calendario", (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error en el servidor" });
      } else {
        res.json(result);
      }
    });
  });
  
  app.delete("/calendario/:id", (req, res) => {
    const eventId = req.params.id;
  
    // Realiza una consulta para eliminar el evento por su ID en la tabla "calendario"
    db.query("DELETE FROM calendario WHERE id = ?", [eventId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error en el servidor" });
      } else {
        res.json({ message: "Evento eliminado exitosamente" });
      }
    });
  });
  // Ruta para crear un nuevo evento
  app.post("/calendario", (req, res) => {
    const { titulo, color, fecha_inicio, fecha_fin } = req.body;
    db.query(
      "INSERT INTO calendario (titulo, color, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)",
      [titulo, color, fecha_inicio, fecha_fin],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Error en el servidor" });
        } else {
          res.json(result);
        }
      }
    );
  });
  
  // Otras rutas para actualizar y eliminar eventos
  
app.post("/login", (req, res) => {
    const { usuario, contrasena } = req.body; // Recibe el nombre de usuario o correo y la contraseña desde la solicitud POST
    // Consulta la base de datos para buscar un usuario con las credenciales proporcionadas
    db.query(
      "SELECT * FROM empleados WHERE correo = ? AND contrasena = ?",
      [usuario, contrasena],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error en el servidor" });
        } else {
          if (result.length === 1) {
            // Si se encuentra un usuario con las credenciales correctas, el inicio de sesión es exitoso
            res.json({ message: "Inicio de sesión exitoso" });
          } else {
            // Si no se encuentra un usuario con las credenciales correctas, el inicio de sesión falla
            res.status(401).json({ message: "Credenciales incorrectas" });
          }
        }
      }
    );
  });


app.post("/create",(req,res)=>{
  const{id,nombre,rut,profesional,prioridad,edad,nacionalidad,nacimiento,civil,direccion,educacion,telefono,correo,pareja,vinculoagresor,sistemasalud,sistemasaludDOS,fisica,saludmental,tratamiento,farmaco,cualfarmaco,drogas,intentoS,ideasS,profesion,remunerado,trabaja,dondetrabaja,horarios,ingresossalario,ingresosjubilacion,ingresossubsidio,ingresospension,ingresosotros,ingresostotales,dependeeco,dependequien, dependedelagresor,viffamilia,vifniñez,vifporotro,otroquien,tipoviolencia,primerviolencia,ultimoviolencia,personashogar,canthijes,hijesagresor,cantnna,vivienda,pertenecejunta,perteneceadultomayor,pertenecemujer,pertenecereligion,pertenecedeportiva,pertenececultural,perteneceotra,psicologica,legal,social,listaespera, familia}=req.body;

    db.query('INSERT INTO usuarios(nombre,rut,profesional,prioridad,edad,nacionalidad,nacimiento,civil,direccion,educacion,telefono,correo,pareja,vinculoagresor,sistemasalud,sistemasaludDOS,fisica,saludmental,tratamiento,farmaco,cualfarmaco,drogas,intentoS,ideasS,profesion,remunerado,trabaja,dondetrabaja,horarios,ingresossalario,ingresosjubilacion,ingresossubsidio,ingresospension,ingresosotros,ingresostotales,dependeeco,dependequien, dependedelagresor,viffamilia,vifniñez,vifporotro,otroquien,tipoviolencia,primerviolencia,ultimoviolencia,personashogar,canthijes,hijesagresor,cantnna,vivienda,pertenecejunta,perteneceadultomayor,pertenecemujer,pertenecereligion,pertenecedeportiva,pertenececultural,perteneceotra,psicologica,legal,social,listaespera,familia) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[nombre,rut,profesional,prioridad,edad,nacionalidad,nacimiento,civil,direccion,educacion,telefono,correo,pareja,vinculoagresor,sistemasalud,sistemasaludDOS,fisica,saludmental,tratamiento,farmaco,cualfarmaco,drogas,intentoS,ideasS,profesion,remunerado,trabaja,dondetrabaja,horarios,ingresossalario,ingresosjubilacion,ingresossubsidio,ingresospension,ingresosotros,ingresostotales,dependeeco,dependequien, dependedelagresor,viffamilia,vifniñez,vifporotro,otroquien,tipoviolencia,primerviolencia,ultimoviolencia,personashogar,canthijes,hijesagresor,cantnna,vivienda,pertenecejunta,perteneceadultomayor,pertenecemujer,pertenecereligion,pertenecedeportiva,pertenececultural,perteneceotra,psicologica,legal,social, listaespera,familia],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.get("/usuarios", (req, res) => {
  db.query('SELECT * FROM usuarios', (err, result) => {
      if (err) {
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

app.get("/usuarios/:id", (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM usuarios WHERE id = ?', userId, (err, result) => {
      if (err) {
          console.log(err);
          res.status(500).send('Error al obtener el usuario por ID');
      } else {
          if (result.length > 0) {
              res.send(result[0]); // Envía el primer resultado (debería ser un solo usuario)
          } else {
              res.status(404).send('Usuario no encontrado');
          }
      }
  });
});


app.get("/empleados",(req,res)=>{
    db.query('SELECT * FROM empleados',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.put("/update",(req,res)=>{
  const id = req.body.id;
  const nombre = req.body.nombre;
  const rut = req.body.rut;
  const profesional = req.body.profesional;
  const prioridad = req.body.prioridad;
  const edad = req.body.edad;
  const nacionalidad = req.body.nacionalidad;
  const nacimiento = req.body.nacimiento;
  const civil = req.body.civil;
  const direccion = req.body.direccion;
  const educacion = req.body.educacion;
  const telefono = req.body.telefono;
  const correo = req.body.correo;
  const pareja = req.body.pareja;
  const vinculoagresor = req.body.vinculoagresor;
  const sistemasalud = req.body.sistemasalud;
  const sistemasaludDOS = req.body.sistemasaludDOS;
  const fisica = req.body.fisica;
  const saludmental = req.body.saludmental;
  const tratamiento = req.body.tratamiento;
  const farmaco = req.body.farmaco;
  const cualfarmaco = req.body.cualfarmaco;
  const drogas = req.body.drogas;
  const intentoS = req.body.intentoS;
  const ideasS = req.body.ideasS;
  const profesion = req.body.profesion;
  const remunerado = req.body.remunerado;
  const trabaja = req.body.trabaja;
  const dondetrabaja = req.body.dondetrabaja;
  const horarios = req.body.horarios;
  const ingresossalario = req.body.ingresossalario;
  const ingresosjubilacion = req.body.ingresosjubilacion;
  const ingresossubsidio = req.body.ingresossubsidio;
  const ingresospension = req.body.ingresospension;
  const ingresosotros = req.body.ingresosotros;
  const ingresostotales = req.body.ingresostotales;
  const dependeeco = req.body.dependeeco;
  const dependequien = req.body.dependequien;
  const dependedelagresor = req.body.dependedelagresor;
  const viffamilia = req.body.viffamilia;
  const vifniñez = req.body.vifniñez;
  const vifporotro = req.body.vifporotro;
  const otroquien = req.body.otroquien;
  const tipoviolencia = req.body.tipoviolencia;
  const primerviolencia = req.body.primerviolencia;
  const ultimoviolencia = req.body.ultimoviolencia;
  const personashogar = req.body.personashogar;
  const canthijes = req.body.canthijes;
  const hijesagresor = req.body.hijesagresor;
  const cantnna = req.body.cantnna;
  const vivienda = req.body.vivienda;
  const pertenecejunta = req.body.pertenecejunta;
  const perteneceadultomayor = req.body.perteneceadultomayor;
  const pertenecemujer = req.body.pertenecemujer;
  const pertenecereligion = req.body.pertenecereligion;
  const pertenecedeportiva = req.body.pertenecedeportiva;
  const pertenececultural = req.body.pertenececultural;
  const perteneceotra = req.body.perteneceotra;
  const psicologica = req.body.psicologica;
  const legal = req.body.legal;
  const social = req.body.social;
  const listaespera = req.body.listaespera;
  const familia = req.body.familia;
  
  db.query('UPDATE usuarios SET nombre=?,rut=?,profesional=?,prioridad=?,edad=?,nacionalidad=?,nacimiento=?,civil=?,direccion=?,educacion=?,telefono=?,correo=?, pareja=?,vinculoagresor=?,sistemasalud=?,sistemasaludDOS=?,fisica=?,saludmental=?,tratamiento=?,farmaco=?,cualfarmaco=?,drogas=?,intentoS=?,ideasS=?,profesion=?,remunerado=?,trabaja=?,dondetrabaja=?,horarios=?,ingresossalario=?,ingresosjubilacion=?,ingresossubsidio=?,ingresospension=?,ingresosotros=?,ingresostotales=?,dependeeco=?,dependequien=?, dependedelagresor=?,viffamilia=?,vifniñez=?,vifporotro=?,otroquien=?,tipoviolencia=?,primerviolencia=?,ultimoviolencia=?,personashogar=?,canthijes=?,hijesagresor=?,cantnna=?,vivienda=?,pertenecejunta=?,perteneceadultomayor=?,pertenecemujer=?,pertenecereligion=?,pertenecedeportiva=?,pertenececultural=?,perteneceotra=?,psicologica=?,legal=?,social=?, listaespera=?, familia=? WHERE id=?',[nombre,rut,profesional,prioridad,edad,nacionalidad,nacimiento,civil,direccion,educacion,telefono,correo,pareja,vinculoagresor,sistemasalud,sistemasaludDOS,fisica,saludmental,tratamiento,farmaco,cualfarmaco,drogas,intentoS,ideasS,profesion,remunerado,trabaja,dondetrabaja,horarios,ingresossalario,ingresosjubilacion,ingresossubsidio,ingresospension,ingresosotros,ingresostotales,dependeeco,dependequien, dependedelagresor,viffamilia,vifniñez,vifporotro,otroquien,tipoviolencia,primerviolencia,ultimoviolencia,personashogar,canthijes,hijesagresor,cantnna,vivienda,pertenecejunta,perteneceadultomayor,pertenecemujer,pertenecereligion,pertenecedeportiva,pertenececultural,perteneceotra,psicologica,legal,social, listaespera,familia, id],
  
  (err,result)=>{
      if(err){
          console.log(err);
      }else{
          res.send(result);
      }
  }
  );
});

app.put("/updatecalendar",(req,res)=>{
  const { id, titulo, color, fecha_inicio, fecha_fin } = req.body;

  db.query('UPDATE calendario SET titulo=?, color=?, fecha_inicio=?, fecha_fin=? WHERE id=?', [titulo, color, fecha_inicio, fecha_fin, id], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Se logró actualizar");
        res.send(result);
    }
});

});

app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;

    db.query('DELETE FROM usuarios WHERE id=?',id,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.post("/notas", (req, res) => {
  const { nombre, descripcion, color, nombre_empleado} = req.body;
  const query = "INSERT INTO notas (nombre, descripcion, color, nombre_empleado) VALUES (?, ?, ?, ?)";
  db.query(query, [nombre, descripcion, color, nombre_empleado], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al crear la nota" });
    } else {
      res.json({ message: "Nota creada exitosamente" });
    }
  });
});

app.get("/notas", (req, res) => {
  const nombre_empleado = req.query.nombre_empleado; // Obtiene el nombre del empleado de la solicitud
  
  const query = "SELECT * FROM notas WHERE nombre_empleado = ?";
  db.query(query, [nombre_empleado], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener las notas" });
    } else {
      res.json(result);
    }
  });
});

app.put("/notas/:id", (req, res) => {
  const notaId = req.params.id;
  const { nombre, descripcion, color} = req.body;
  const query = "UPDATE notas SET nombre = ?, descripcion = ?, color = ? WHERE id = ?";
  db.query(query, [nombre, descripcion, color, notaId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al actualizar la nota" });
    } else {
      res.json({ message: "Nota actualizada exitosamente" });
    }
  });
});

app.delete("/notas/:id", (req, res) => {
  const notaId = req.params.id;
  const query = "DELETE FROM notas WHERE id = ?";
  db.query(query, [notaId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al eliminar la nota" });
    } else {
      res.json({ message: "Nota eliminada exitosamente" });
    }
  });
});

// Ruta para crear un nuevo anuncio
app.post("/anuncios", (req, res) => {
  const { nombre, asunto, fecha, cuerpo, fecha_caducidad } = req.body;
  const insertQuery = `INSERT INTO anuncios (nombre, asunto, fecha, cuerpo, fecha_caducidad) VALUES (?, ?, ?, ?, ?)`;
  db.query(insertQuery, [nombre, asunto, fecha, cuerpo, fecha_caducidad], (err, result) => {
    if (err) {
      console.error("Error al crear el anuncio: " + err);
      res.status(500).json({ error: "Error al crear el anuncio" });
      return;
    }
    res.status(201).json({ message: "Anuncio creado con éxito" });
  });
});

// Ruta para obtener todos los anuncios
app.get("/anuncios", (req, res) => {
  const selectQuery = "SELECT * FROM anuncios";
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error("Error al obtener los anuncios: " + err);
      res.status(500).json({ error: "Error al obtener los anuncios" });
      return;
    }
    res.status(200).json(results);
  });
});

// Ruta para eliminar anuncios caducados
app.delete("/anuncios/:anuncioId", (req, res) => {
  const anuncioId = req.params.anuncioId;
  
  // Verificar que anuncioId sea un número válido
  if (isNaN(anuncioId)) {
    res.status(400).json({ error: "ID de anuncio no válido" });
    return;
  }

  const deleteQuery = "DELETE FROM anuncios WHERE id = ?";
  db.query(deleteQuery, [anuncioId], (err, result) => {
    if (err) {
      console.error("Error al eliminar el anuncio: " + err);
      res.status(500).json({ error: "Error al eliminar el anuncio" });
      return;
    }

    // Comprobar si se eliminó un registro
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Anuncio no encontrado" });
      return;
    }

    res.status(200).json({ message: "Anuncio eliminado con éxito" });
  });
});

//sesiones
app.post("/sesiones", (req, res) => {
  const { fecha, descripcion, rut_usuario} = req.body;
  const query = "INSERT INTO sesiones (fecha, descripcion, rut_usuario) VALUES (?, ?,?)";
  db.query(query, [fecha, descripcion,rut_usuario], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al crear la sesión" });
    } else {
      res.json({ message: "Sesión creada exitosamente" });
    }
  });
});

app.get("/sesiones", (req, res) => {
  const rut_usuario = req.query.rut_usuario; // Obtiene el nombre del empleado de la solicitud

  const query = "SELECT * FROM sesiones WHERE rut_usuario = ?";
  db.query(query, [rut_usuario], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener las sesiones" });
    } else {
      res.json(result);
    }
  });
});

app.put("/sesiones/:id", (req, res) => {
  const sesionesId = req.params.id;
  const fecha = req.body.fechaSesiones;
  const descripcion = req.body.descripcionSesiones;
  const query = "UPDATE sesiones SET fecha = ?, descripcion = ? WHERE id = ?";
  db.query(query, [fecha, descripcion, sesionesId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al actualizar la nota" });
    } else {
      res.json({ message: "Nota actualizada exitosamente" });
    }
  });
});

app.delete("/sesiones/:rut_usuario", (req, res) => {
  const rut_usuario = req.params.rut_usuario;
  const query = "DELETE FROM sesiones WHERE rut_usuario = ?";
  db.query(query, [rut_usuario], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al eliminar la sesion" });
    } else {
      res.json({ message: "sesiones eliminada exitosamente" });
    }
  });
});

app.post("/riesgo", (req, res) => {

  const migrante = req.body.migrante;
  const barreralinguistica = req.body.barreralinguistica;
  const indocumentado = req.body.indocumentado;
  const sinredapoyo = req.body.sinredapoyo;
  const sinredamigues = req.body.sinredamigues;
  const novisibilidad = req.body.novisibilidad;
  const sintrabajo = req.body.sintrabajo;
  const viveconagresor = req.body.viveconagresor;
  const sindispositivos = req.body.sindispositivos;
  const aislamiento = req.body.aislamiento;
  const dependeeconomicamente = req.body.dependeeconomicamente;
  const nohogar = req.body.nohogar;
  const hijesencomun = req.body.hijesencomun;
  const niñesacargo = req.body.niñesacargo;
  const totalsocial = req.body.totalsocial;
  const enfermedadbase = req.body.enfermedadbase;
  const intentoss = req.body.intentoss;
  const planeacions = req.body.planeacions;
  const ideacions = req.body.ideacions;
  const abusosustancia = req.body.abusosustancia;
  const crisisansiosa = req.body.crisisansiosa;
  const insomnio = req.body.insomnio;
  const tca = req.body.tca;
  const sintomatologiatrauma = req.body.sintomatologiatrauma;
  const sintratamiento = req.body.sintratamiento;
  const psicosomatizacion = req.body.psicosomatizacion;
  const agresorconsumidor = req.body.agresorconsumidor;
  const trastornoagresor = req.body.trastornoagresor;
  const totalpsicologico = req.body.totalpsicologico;
  const habitualidadagresion = req.body.habitualidadagresion;
  const realizodenuncia = req.body.realizodenuncia;
  const nodenuncia = req.body.nodenuncia;
  const desistimientodenuncia = req.body.desistimientodenuncia;
  const sinabogade = req.body.sinabogade;
  const antecedentesagresor = req.body.antecedentesagresor;
  const agresorarmas = req.body.agresorarmas;
  const sincautelares = req.body.sincautelares;
  const desinstitucional = req.body.desinstitucional;
  const violenciainst = req.body.violenciainst;
  const causavif = req.body.causavif;
  const desacato = req.body.desacato;
  const totallegal = req.body.totallegal;
  const embarazo = req.body.embarazo;
  const amenazasactuales = req.body.amenazasactuales;
  const nnavictimasvif = req.body.nnavictimasvif;
  const violenciapsicologica = req.body.violenciapsicologica;
  const violenciafisica = req.body.violenciafisica;
  const violenciasexual = req.body.violenciasexual;
  const violenciaeco = req.body.violenciaeco;
  const masagresores = req.body.masagresores;
  const terceraedad = req.body.terceraedad;
  const adolescente = req.body.adolescente;
  const situaciondiscapacidad = req.body.situaciondiscapacidad;
  const autopercepcion = req.body.autopercepcion;
  const totaltransversal = req.body.totaltransversal;
  const totalpauta = req.body.totalpauta;
  const rut_usuario = req.body.rut_usuario;

  const query = "INSERT INTO riesgo (migrante, barreralinguistica, indocumentado, sinredapoyo, sinredamigues, novisibilidad, sintrabajo, viveconagresor, sindispositivos, aislamiento, dependeeconomicamente, nohogar, hijesencomun, niñesacargo, totalsocial, enfermedadbase, intentoss, planeacions, ideacions, abusosustancia, crisisansiosa, insomnio, tca, sintomatologiatrauma, sintratamiento, psicosomatizacion, agresorconsumidor, trastornoagresor, totalpsicologico, habitualidadagresion, realizodenuncia, nodenuncia, desistimientodenuncia, sinabogade, antecedentesagresor, agresorarmas, sincautelares, desinstitucional, violenciainst, causavif, desacato, totallegal, embarazo, amenazasactuales, nnavictimasvif, violenciapsicologica, violenciafisica, violenciasexual, violenciaeco, masagresores, terceraedad, adolescente, situaciondiscapacidad, autopercepcion, totaltransversal, totalpauta,  rut_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(query, [migrante, barreralinguistica, indocumentado, sinredapoyo, sinredamigues, novisibilidad, sintrabajo, viveconagresor, sindispositivos, aislamiento, dependeeconomicamente, nohogar, hijesencomun, niñesacargo, totalsocial, enfermedadbase, intentoss, planeacions, ideacions, abusosustancia, crisisansiosa, insomnio, tca, sintomatologiatrauma, sintratamiento, psicosomatizacion, agresorconsumidor, trastornoagresor, totalpsicologico, habitualidadagresion, realizodenuncia, nodenuncia, desistimientodenuncia, sinabogade, antecedentesagresor, agresorarmas, sincautelares, desinstitucional, violenciainst,causavif, desacato, totallegal, embarazo, amenazasactuales, nnavictimasvif, violenciapsicologica, violenciafisica, violenciasexual, violenciaeco, masagresores, terceraedad, adolescente, situaciondiscapacidad, autopercepcion, totaltransversal, totalpauta, rut_usuario], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al crear la pauta" });
    } else {
      res.json({ message: "Pauta creada exitosamente" });
    }
  });
});

app.get("/riesgo", (req, res) => {
  const rut_usuario = req.query.rut_usuario; // Obtiene el nombre del empleado de la solicitud

  const query = "SELECT * FROM riesgo WHERE rut_usuario = ?";
  db.query(query, [rut_usuario], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener los riesgos" });
    } else {
      res.json(result);
    }
  });
});


app.put("/riesgo/:id", (req, res) => {
  const riesgoId = req.body.id;
  const migrante = req.body.migrante;
  const barreralinguistica = req.body.barreralinguistica;
  const indocumentado = req.body.indocumentado;
  const sinredapoyo = req.body.sinredapoyo;
  const sinredamigues =req.body.sinredamigues;
  const novisibilidad = req.body.novisibilidad;
  const sintrabajo = req.body.sintrabajo;
  const viveconagresor = req.body.viveconagresor;
  const sindispositivos = req.body.sindispositivos;
  const aislamiento = req.body.aislamiento;
  const dependeeconomicamente = req.body.dependeeconomicamente;
  const nohogar = req.body.nohogar;
  const hijesencomun = req.body.hijesencomun;
  const niñesacargo = req.body.niñesacargo;
  const totalsocial = req.body.totalsocial;
  const enfermedadbase = req.body.enfermedadbase;
  const intentoss = req.body.intentoss;
  const planeacions = req.body.planeacions;
  const ideacions = req.body.ideacions;
  const abusosustancia = req.body.abusosustancia;
  const crisisansiosa = req.body.crisisansiosa;
  const insomnio = req.body.insomnio;
  const tca = req.body.tca;
  const sintomatologiatrauma = req.body.sintomatologiatrauma;
  const sintratamiento = req.body.sintratamiento;
  const psicosomatizacion = req.body.psicosomatizacion;
  const agresorconsumidor = req.body.agresorconsumidor;
  const trastornoagresor = req.body.trastornoagresor;
  const totalpsicologico = req.body.totalpsicologico;
  const habitualidadagresion = req.body.habitualidadagresion;
  const realizodenuncia = req.body.realizodenuncia;
  const nodenuncia = req.body.nodenuncia;
  const desistimientodenuncia = req.body.desistimientodenuncia;
  const sinabogade = req.body.sinabogade;
  const antecedentesagresor = req.body.antecedentesagresor;
  const agresorarmas = req.body.agresorarmas;
  const sincautelares = req.body.sincautelares;
  const desinstitucional = req.body.desinstitucional;
  const violenciainst = req.body.violenciainst;
  const causavif = req.body.causavif;
  const desacato = req.body.desacato;
  const totallegal = req.body.totallegal;
  const embarazo = req.body.embarazo;
  const amenazasactuales = req.body.amenazasactuales;
  const nnavictimasvif = req.body.nnavictimasvif;
  const violenciapsicologica = req.body.violenciapsicologica;
  const violenciafisica = req.body.violenciafisica;
  const violenciasexual = req.body.violenciasexual;
  const violenciaeco = req.body.violenciaeco;
  const masagresores = req.body.masagresores;
  const terceraedad = req.body.terceraedad;
  const adolescente = req.body.adolescente;
  const situaciondiscapacidad = req.body.situaciondiscapacidad;
  const autopercepcion = req.body.autopercepcion;
  const totaltransversal = req.body.totaltransversal;
  const totalpauta = req.body.totalpauta;

  const query = "UPDATE riesgo SET  migrante=?, barreralinguistica=?, indocumentado=?, sinredapoyo=?, sinredamigues=?, novisibilidad=?, sintrabajo=?, viveconagresor=?, sindispositivos=?, aislamiento=?, dependeeconomicamente=?, nohogar=?, hijesencomun=?, niñesacargo=?, totalsocial=?, enfermedadbase=?, intentoss=?, planeacions=?, ideacions=?, abusosustancia=?, crisisansiosa=?, insomnio=?, tca=?, sintomatologiatrauma=?, sintratamiento=?, psicosomatizacion=?, agresorconsumidor=?, trastornoagresor=?, totalpsicologico=?, habitualidadagresion=?, realizodenuncia=?, nodenuncia=?, desistimientodenuncia=?, sinabogade=?, antecedentesagresor=?, agresorarmas=?, sincautelares=?, desinstitucional=?, violenciainst=?, causavif=?, desacato=?, totallegal=?, embarazo=?, amenazasactuales=?, nnavictimasvif=?, violenciapsicologica=?, violenciafisica=?, violenciasexual=?, violenciaeco=?, masagresores=?, terceraedad=?, adolescente=?, situaciondiscapacidad=?, autopercepcion=?, totaltransversal=?, totalpauta=? WHERE id = ?";
  db.query(query, [ migrante, barreralinguistica, indocumentado, sinredapoyo, sinredamigues, novisibilidad, sintrabajo, viveconagresor, sindispositivos, aislamiento, dependeeconomicamente, nohogar, hijesencomun, niñesacargo, totalsocial, enfermedadbase, intentoss, planeacions, ideacions, abusosustancia, crisisansiosa, insomnio, tca, sintomatologiatrauma, sintratamiento, psicosomatizacion, agresorconsumidor, trastornoagresor, totalpsicologico, habitualidadagresion, realizodenuncia, nodenuncia, desistimientodenuncia, sinabogade, antecedentesagresor, agresorarmas, sincautelares, desinstitucional, violenciainst, causavif, desacato, totallegal, embarazo, amenazasactuales, nnavictimasvif, violenciapsicologica, violenciafisica, violenciasexual, violenciaeco, masagresores, terceraedad, adolescente, situaciondiscapacidad, autopercepcion, totaltransversal, totalpauta, riesgoId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al actualizar la nota" });
    } else {
      res.json({ message: "Nota actualizada exitosamente" });
    }
  });
});

app.delete("/riesgo/:rut_usuario", (req, res) => {
  const rut_usuario = req.params.rut_usuario;
  const query = "DELETE FROM riesgo WHERE rut_usuario = ?";
  db.query(query, [rut_usuario], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al eliminar la sesion" });
    } else {
      res.json({ message: "sesiones eliminada exitosamente" });
    }
  });
});



// app.listen(3001, ()=>{
//     console.log("Corriendo en el puerto 3001")
// })

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${port}`);
});
