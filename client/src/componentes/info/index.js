import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';




export const InfoPacientes = () => {

    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const [id, setId] = useState(queryParams.id.trim() || '');

    const [nombre, setNombre] = useState(""); /* NOMBRE */
    const [rut, setRut] = useState(queryParams.rut.trim() || ''); /* RUT  */
    const [profesional, setProfesional] = useState(""); /* PROFESIONAL QUE LO INGRESÓ */
    const [prioridad, setPrioridad] = useState(""); /* PRIORIDAD DEL USUARIO */
    const [edad, setEdad] = useState(); /* EDAD */
    const [nacionalidad, setNacionalidad] = useState(""); /* NACIONALIDAD */
    const [nacimiento, setNacimiento] = useState(""); /* FECHA DE NACIMIENTO */
    const [civil, setCivil] = useState(""); /* ESTADO CIVIL */
    const [direccion, setDireccion] = useState(""); /* DIRECCIÓN */
    const [educacion, setEducacion] = useState(""); /* NIVEL EDUCACIONAL */
    const [telefono, setTelefono] = useState(); /* CONTACTO TELEFONO */
    const [correo, setCorreo] = useState(""); /* CONTACTO EMAIL */
    const [pareja, setPareja] = useState(""); /* ESTADO DE PAREJA ACTUAL */
    const [vinculoagresor, setVinculoagresor] = useState(""); /* VÍNCULO CON EL AGRESOR */
    const [sistemasalud, setSistemasalud] = useState(""); /* SISTEMA SALUD VARCHAR */
    const [sistemasaludDOS, setSistemasaludDOS] = useState(""); /* SISTEMA SALUD(SI ES CARGA O TITULAR) VARCHAR */
    const [fisica, setFisica] = useState(""); /* ENFERMEDAD FÍSICA VARCHAR */
    const [saludmental, setSaludmental] = useState(""); /* SALUD MENTAL VARCHAR */
    const [tratamiento, setTratamiento] = useState(""); /* USUARIE EN TRATAMIENTO (SI O NO) VARCHAR */
    const [farmaco, setFarmaco] = useState(""); /* CONSUMO DE FÁRMACO (SI O NO) VARCHAR */
    const [cualfarmaco, setCualfarmaco] = useState(""); /* TIPO DE FÁRMACO VARCHAR */
    const [drogas, setDrogas] = useState(""); /* DROGAS QUE CONSUME VARCHAR */
    const [intentoS, setIntentoS] = useState(""); /* HA INTENTADO SUICIDIO? (SI O NO) VARCHAR*/
    const [ideasS, setideasS] = useState(""); /* IDEACIÓN SUICIDA VARCHAR */
    const [profesion, setProfesion] = useState(""); /* PROFESION U OFICIO VARCHAR */
    const [remunerado, setRemunerado] = useState(""); /* REALIZA TRABAJO REMUNERADO (SI O NO) VARCHAR */
    const [trabaja, setTrabaja] = useState(""); /* TRABAJA DEPENDIENTE, INDEPENDIENTE O NO TRABAJA (SELECCIÓN MÚLTIPLE) VARCHAR */
    const [dondetrabaja, setDondetrabaja] = useState(""); /* TRABAJA, ¿DONDE? VARCHAR */
    const [horarios, setHorarios] = useState(""); /* HORARIOS VARCHAR */
    const [ingresossalario, setIngresossalario] = useState(""); /* INGRESO: SALARIO INT */
    const [ingresosjubilacion, setIngresosjubilacion] = useState(""); /* INGRESO: JUBILACIÓN INT*/
    const [ingresossubsidio, setIngresossubsidio] = useState(""); /* INGRESO: SUBSIDIO INT */
    const [ingresospension, setIngresospension] = useState(""); /* INGRESO: PENSIONES INT */
    const [ingresosotros, setIngresosotros] = useState(""); /* INGRESO: OTROS INT */
    const [ingresostotales, setIngresostotales] = useState("");
    const [dependeeco, setDependeeco] = useState(""); /* DEPENDE ECONÓMICAMENTE (SI O NO) VARCHAR */
    const [dependequien, setDependequien] = useState(""); /* DE QUIÉN DEPENDE (SELECCIÓN) VARCHAR */
    const [dependedelagresor, setDependedelagresor] = useState(""); /* EL MANTENEDOR ECÓNOMICO ES EL AGRESOR? (SI O NO) VARCHAR */
    const [viffamilia, setViffamilia] = useState(""); /* ANTECENDENTES VIF EN LA FAMILIA (SI O NO) VARCHAR */
    const [vifniñez, setVifniñez] = useState(""); /* VIF EN LA NIÑEZ (SI O NO) VARCHAR */
    const [vifporotro, setVifporotro] = useState(""); /* VIF POR OTRO AGRESOR (SI O NO) VARCHAR */
    const [otroquien, setOtroquien] = useState(""); /* QUIÉN ES EL OTRO AGRESOR? VARCHAR*/
    const [tipoviolencia, setTipoviolencia] = useState(""); /* TIPO VIOLENCIA (SELECCIÓN MULTIPLE???) VARCHAR */
    const [primerviolencia, setPrimerviolencia] = useState(""); /* PRIMER EPISODIO DE VIF VARCHAR */
    const [ultimoviolencia, setUltimoviolencia] = useState(""); /* ULTIMO EPISODIO DE VIF VARCHAR */
    const [personashogar, setPersonashogar] = useState(""); /* PERONAS QUE HABITAN EL HOGAR INT */
    const [canthijes, setCanthijes] = useState(""); /* CANTIDAD DE HIJOS INT */
    const [hijesagresor, setHijesagresor] = useState(""); /* HIJOS CON EL AGRESOR INT */
    const [cantnna, setCantnna] = useState(""); /* CANTIDAD DE NNA BAJO SU TUTELA INT */
    const [vivienda, setVivienda] = useState(""); /* VIVIENDA (SELECCIÓN) VARCHAR */

    const [pertenecejunta, setPertenecejunta] = useState(""); /* PERTENECE A: JUNTA DE VECINOS VARCHAR */
    const [perteneceadultomayor, setPerteneceadultomayor] = useState(""); /* PERTENECE A: ORGANIZACIONES PARA EL ADULTO MAYOR VARCHAR */
    const [pertenecemujer, setPertenecemujer] = useState(""); /* PERTENECE A: ORGANIZACIÓN PARA LA MUJER VARCHAR */
    const [pertenecereligion, setPertenecereligion] = useState(""); /* PERTENECE A: ORGANIZACIONES RELIGIOSAS VARCHAR */
    const [pertenecedeportiva, setPertenecedeportiva] = useState(""); /* PERTENECE A: ORGANIZACIONES DEPORTIVAS VARCHAR */
    const [pertenececultural, setPertenececultural] = useState(""); /* PERTENECE A: ORGANIZACIONES CULTURALES VARCHAR */
    const [perteneceotra, setPerteneceotra] = useState(""); /* PERTENECE A: OTRA VARCHAR */
    const [psicologica, setPsicologica] = useState(""); /* TIPO DE ATENCIÓN PSICOLÓGICA VARCHAR */
    const [legal, setLegal] = useState(""); /* TIPO DE ATENCIÓN LEGAL VARCHAR */
    const [social, setSocial] = useState(""); /* TIPO DE ATENCIÓN SOCIAL VARCHAR */
    const [listaespera, setListaespera] = useState("") /* VIVIENDA (SELECCIÓN) VARCHAR */
    const [familia, setFamilia] = useState("") /* VIVIENDA (SELECCIÓN) VARCHAR */

    const [editar, setEditar] = useState(false);
    const [empleadosList, setEmpleados] = useState([]);

    const [sesiones, setSesiones] = useState([]);
    const [fechaSesiones, setFechaSesiones] = useState("");
    const [descripcionSesiones, setDescripcionSesiones] = useState("");
    const [triggerRender, setTriggerRender] = useState(false);
    const [excedioLimite, setExcedioLimite] = useState(false);
    const [nombreSesiones, setNombreSesiones] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [rutSesiones, setRutSesiones] = useState("");
    const [sesionEditando, setSesionEditando] = useState(null);
    const [modoEdicion, setModoEdicion] = useState(false);

    const [pautaEditando, setPautaEditando] = useState(null);
    const [riesgos, setRiesgos] = useState([]);
    const [migrante, setMigrante] = useState("");
    const [barreralinguistica, setBarreralinguistica] = useState("");
    const [indocumentado, setIndocumentado] = useState("");
    const [sinredapoyo, setSinredapoyo] = useState("");
    const [sinredamigues, setSinredamigues] = useState("");
    const [novisibilidad, setNovisibilidad] = useState("");
    const [sintrabajo, setSintrabajo] = useState("");
    const [viveconagresor, setViveconagresor] = useState("");
    const [sindispositivos, setSindispositivos] = useState("");
    const [aislamiento, setAislamiento] = useState("");
    const [dependeeconomicamente, setDependeeconomicamente] = useState("");
    const [nohogar, setNohogar] = useState("");
    const [hijesencomun, setHijesencomun] = useState("");
    const [niñesacargo, setNiñesacargo] = useState("");
    const [totalsocial, setTotalsocial] = useState("");
    const [enfermedadbase, setEnfermedadbase] = useState("");
    const [intentoss, setIntentoss] = useState("");
    const [planeacions, setPlaneacions] = useState("");
    const [ideacions, setIdeacions] = useState("");
    const [abusosustancia, setAbusosustancia] = useState("");
    const [crisisansiosa, setCrisisansiosa] = useState("");
    const [insomnio, setInsomnio] = useState("");
    const [tca, setTca] = useState("");
    const [sintomatologiatrauma, setSintomatologiatrauma] = useState("");
    const [sintratamiento, setSintratamiento] = useState("");
    const [psicosomatizacion, setPsicosomatizacion] = useState("");
    const [agresorconsumidor, setAgresorconsumidor] = useState("");
    const [trastornoagresor, setTrastornoagresor] = useState("");
    const [totalpsicologico, setTotalpsicologico] = useState("");
    const [habitualidadagresion, setHabitualidadagresion] = useState("");
    const [realizodenuncia, setRealizodenuncia] = useState("");
    const [nodenuncia, setNodenuncia] = useState("");
    const [desistimientodenuncia, setDesistimientodenuncia] = useState("");
    const [sinabogade, setSinabogade] = useState("");
    const [antecedentesagresor, setAntecedentesagresor] = useState("");
    const [agresorarmas, setAgresorarmas] = useState("");
    const [sincautelares, setSincautelares] = useState("");
    const [desinstitucional, setDesinstitucional] = useState("");
    const [violenciainst, setViolenciainst] = useState("");
    const [causavif, setCausavif] = useState("");
    const [desacato, setDesacato] = useState("");
    const [totallegal, setTotallegal] = useState("");
    const [embarazo, setEmbarazo] = useState("");
    const [amenazasactuales, setAmenazasactuales] = useState("");
    const [nnavictimasvif, setNnavictimasvif] = useState("");
    const [violenciapsicologica, setViolenciapsicologica] = useState("");
    const [violenciafisica, setViolenciafisica] = useState("");
    const [violenciasexual, setViolenciasexual] = useState("");
    const [violenciaeco, setViolenciaeco] = useState("");
    const [masagresores, setMasagresores] = useState("");
    const [terceraedad, setTerceraedad] = useState("");
    const [adolescente, setAdolescente] = useState("");
    const [situaciondiscapacidad, setSituaciondiscapacidad] = useState("");
    const [autopercepcion, setAutopercepcion] = useState("");
    const [totaltransversal, setTotaltransversal] = useState("");
    const [totalpauta, setTotalpauta] = useState("");



    const parejaEleccion = [
        { nombre: "Sin pareja", valor: "NO" },
        { nombre: "Con pareja", valor: "SI" },
    ];

    const sistemaEleccion = [
        { nombre: "Titular", valor: "Titular" },
        { nombre: "Carga", valor: "Carga" },
    ];

    const tratamientoEleccion = [
        { nombre: "En Tratamiento", valor: "SI" },
        { nombre: "Sin Tratamiento", valor: "NO" },
    ];

    const farmacoEleccion = [
        { nombre: "Consume Fármacos", valor: "SI" },
        { nombre: "No Consume Fármacos", valor: "NO" },
    ]

    const intentoSEleccion = [
        { nombre: "Sí lo ha intentado", valor: "SI" },
        { nombre: "No lo ha intentado", valor: "NO" },
    ]

    const remuneradoEleccion = [
        { nombre: "Sí", valor: "SI" },
        { nombre: "No", valor: "NO" },
    ]

    const dependeecoEleccion = [
        { nombre: "Sí", valor: "SI" },
        { nombre: "No", valor: "NO" },
    ]

    const dependedelagresorEleccion = [
        { nombre: "Sí", valor: "SI" },
        { nombre: "No", valor: "NO" },
    ]

    const viffamiliaEleccion = [
        { nombre: "Sí", valor: "SI" },
        { nombre: "No", valor: "NO" },
    ]

    const vifniñezEleccion = [
        { nombre: "Sí", valor: "SI" },
        { nombre: "No", valor: "NO" },
    ]

    const vifporotroEleccion = [
        { nombre: "Sí", valor: "SI" },
        { nombre: "No", valor: "NO" },
    ]

    const listaesperaEleccion = [
        { nombre: "Sí", valor: "SI" },
        { nombre: "No", valor: "NO" },
    ]

    // Agregar un estado para indicar si estamos en modo de edición o no
    const [editMode, setEditMode] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#f9f0fb'); // Establecer un color de fondo inicial

    const [showCancelarButton, setshowCancelarButton] = useState(false);

    const [showEditMode, setShowEditMode] = useState(false);
    const [showEditButton, setShowEditButton] = useState(false);




    const editarEmpleado = () => {
        setEditMode(true);
        setBackgroundColor('#E2DDDB');
        setshowCancelarButton(true);
        setShowEditMode(true);
    };


    const showEditarRiesgoOff = () => {
        setshowCancelarButton(true);
        setEditMode(false);
    };


    const editarEmpleadoOFF = () => {
        setEditMode(false);
        setBackgroundColor('#f9f0fb');
        setshowCancelarButton(false);
    };


    const handleTabChange = (key) => {
        if (key === "ficha" || key === "pauta" || key === "sesiones") {
            editarEmpleadoOFF(); // Salir del modo de edición al cambiar de pestaña
        }
    };



    const guardarCambios = () => {
        Axios.put('http://localhost:3001/update', {
            id: id,
            nombre: nombre,
            rut: rut,
            profesional: profesional,
            prioridad: prioridad,
            edad: edad,
            nacionalidad: nacionalidad,
            nacimiento: nacimiento,
            civil: civil,
            direccion: direccion,
            educacion: educacion,
            telefono: telefono,
            correo: correo,
            pareja: pareja,
            vinculoagresor: vinculoagresor,
            sistemasalud: sistemasalud,
            sistemasaludDOS: sistemasaludDOS,
            fisica: fisica,
            saludmental: saludmental,
            tratamiento: tratamiento,
            farmaco: farmaco,
            cualfarmaco: cualfarmaco,
            drogas: drogas,
            intentoS: intentoS,
            ideasS: ideasS,
            profesion: profesion,
            remunerado: remunerado,
            trabaja: trabaja,
            dondetrabaja: dondetrabaja,
            horarios: horarios,
            ingresossalario: ingresossalario,
            ingresosjubilacion: ingresosjubilacion,
            ingresossubsidio: ingresossubsidio,
            ingresospension: ingresospension,
            ingresosotros: ingresosotros,
            ingresostotales: ingresostotales,
            dependeeco: dependeeco,
            dependequien: dependequien,
            dependedelagresor: dependedelagresor,
            viffamilia: viffamilia,
            vifniñez: vifniñez,
            vifporotro: vifporotro,
            otroquien: otroquien,
            tipoviolencia: tipoviolencia,
            primerviolencia: primerviolencia,
            ultimoviolencia: ultimoviolencia,
            personashogar: personashogar,
            canthijes: canthijes,
            hijesagresor: hijesagresor,
            cantnna: cantnna,
            vivienda: vivienda,
            pertenecejunta: pertenecejunta,
            perteneceadultomayor: perteneceadultomayor,
            pertenecemujer: pertenecemujer,
            pertenecereligion: pertenecereligion,
            pertenecedeportiva: pertenecedeportiva,
            pertenececultural: pertenececultural,
            perteneceotra: perteneceotra,
            psicologica: psicologica,
            legal: legal,
            social: social,
            listaespera: listaespera,
            familia: familia,
        }).then(() => {
            Swal.fire({
                title: '<strong>Update exitoso!!</strong>',
                html: `<i>El empleado <strong>${nombre}</strong> fue actualizado con éxito!!!</i>`,
                icon: 'success',
                timer: 3500,
            });
        });
        // Cambiar el estado de edición nuevamente a falso
        setEditMode(false);
    };

    function formatDate(date) {
        const formattedDate = new Date(date);
        const dia = (formattedDate.getDate()).toString().padStart(2, '0');
        const mes = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
        const año = formattedDate.getFullYear();
        return `${dia}/${mes}/${año}`;
    }

    function formatDate2(date) {
        const formattedDate = new Date(date);
        const dia = (formattedDate.getDate()).toString().padStart(2, '0');
        const mes = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
        const año = formattedDate.getFullYear();
        return `${año}-${mes}-${dia}`;
    }

    const getUsuario = (id) => {
        Axios.get(`http://localhost:3001/usuarios/${id}`)
            .then((response) => {
                const user = response.data;
                if (user) {
                    const formattedStartDate = new Date(user.nacimiento);
                    const isoFormattedStartDate = formattedStartDate.toISOString().slice(0, 10);
                    setNombre(user.nombre);
                    setRut(user.rut);
                    setProfesional(user.profesional);
                    setPrioridad(user.prioridad);
                    setEdad(user.edad);
                    setNacionalidad(user.nacionalidad);
                    setNacimiento(isoFormattedStartDate);
                    setCivil(user.civil);
                    setDireccion(user.direccion);
                    setEducacion(user.educacion);
                    setTelefono(user.telefono);
                    setCorreo(user.correo);
                    setPareja(user.pareja);
                    setVinculoagresor(user.vinculoagresor);
                    setSistemasalud(user.sistemasalud);
                    setSistemasaludDOS(user.sistemasaludDOS);
                    setFisica(user.fisica);
                    setSaludmental(user.saludmental);
                    setTratamiento(user.tratamiento);
                    setFarmaco(user.farmaco);
                    setCualfarmaco(user.cualfarmaco);
                    setDrogas(user.drogas);
                    setIntentoS(user.intentoS);
                    setideasS(user.ideasS);
                    setProfesion(user.profesion);
                    setRemunerado(user.remunerado);
                    setTrabaja(user.trabaja);
                    setDondetrabaja(user.dondetrabaja);
                    setHorarios(user.horarios);
                    setIngresossalario(user.ingresossalario);
                    setIngresosjubilacion(user.ingresosjubilacion);
                    setIngresossubsidio(user.ingresossubsidio);
                    setIngresospension(user.ingresospension);
                    setIngresosotros(user.ingresosotros);
                    setIngresostotales(user.ingresostotales);
                    setDependeeco(user.dependeeco);
                    setDependequien(user.dependequien);
                    setDependedelagresor(user.dependedelagresor);
                    setViffamilia(user.viffamilia);
                    setVifniñez(user.vifniñez);
                    setVifporotro(user.vifporotro);
                    setOtroquien(user.otroquien);
                    setTipoviolencia(user.tipoviolencia);
                    setPrimerviolencia(user.primerviolencia);
                    setUltimoviolencia(user.ultimoviolencia);
                    setPersonashogar(user.personashogar);
                    setCanthijes(user.canthijes);
                    setHijesagresor(user.hijesagresor);
                    setCantnna(user.cantnna);
                    setVivienda(user.vivienda);
                    setPertenecejunta(user.pertenecejunta);
                    setPerteneceadultomayor(user.perteneceadultomayor);
                    setPertenecemujer(user.pertenecemujer);
                    setPertenecereligion(user.pertenecereligion);
                    setPertenecedeportiva(user.pertenecedeportiva);
                    setPertenececultural(user.pertenececultural);
                    setPerteneceotra(user.perteneceotra);
                    setPsicologica(user.psicologica);
                    setLegal(user.legal);
                    setSocial(user.social);
                    setListaespera(user.listaespera);
                    setFamilia(user.familia);

                } else {
                    // Manejar el caso en el que no se encuentra el usuario
                    console.log('Usuario no encontrado');
                    // Puedes mostrar un mensaje de error al usuario aquí si es necesario
                }
            })
            .catch((error) => {
                console.error('Error al obtener los datos del usuario:', error);
                // Puedes manejar el error aquí si es necesario
            });
    };

    const cargarSesionesDesdeServidor = () => {
        Axios.get(`http://localhost:3001/sesiones?rut_usuario=${rut}`)
            .then((response) => {
                const sesionesData = response.data;
                setSesiones(sesionesData);
            })
            .catch(error => {
                console.error('Error al cargar sesiones:', error);
            });
    };

    const getPauta = () => {
        Axios.get(`http://localhost:3001/riesgo?rut_usuario=${rut}`)
            .then((response) => {

                const riesgosData = response.data;
                setRiesgos(riesgosData);
                setMigrante(riesgosData.migrante);
                setBarreralinguistica(riesgosData.barreralinguistica);
                setIndocumentado(riesgosData.indocumentadoo);
                setSinredapoyo(riesgosData.sinredapoyo);
                setSinredamigues(riesgosData.sinredamigues);
                setNovisibilidad(riesgosData.novisibilidad);
                setSintrabajo(riesgosData.sintrabajo);
                setViveconagresor(riesgosData.viveconagresor);
                setSindispositivos(riesgosData.sindispositivos);
                setAislamiento(riesgosData.aislamiento);
                setDependeeconomicamente(riesgosData.dependeeconomicamente);
                setNohogar(riesgosData.nohogar);
                setHijesencomun(riesgosData.hijesencomun);
                setNiñesacargo(riesgosData.niñesacargo);
                setTotalsocial(riesgosData.totalsocial);
                setEnfermedadbase(riesgosData.enfermedadbase);
                setIntentoss(riesgosData.intentoss);
                setPlaneacions(riesgosData.planeacions);
                setIdeacions(riesgosData.ideacions);
                setAbusosustancia(riesgosData.abusosustancia);
                setCrisisansiosa(riesgosData.crisisansiosa);
                setInsomnio(riesgosData.insomnio);
                setTca(riesgosData.tca);
                setSintomatologiatrauma(riesgosData.sintomatologiatrauma);
                setSintratamiento(riesgosData.sintratamiento);
                setPsicosomatizacion(riesgosData.psicosomatizacion);
                setAgresorconsumidor(riesgosData.agresorconsumidor);
                setTrastornoagresor(riesgosData.trastornoagresor);
                setTotalpsicologico(riesgosData.totalpsicologico);
                setHabitualidadagresion(riesgosData.habitualidadagresion);
                setRealizodenuncia(riesgosData.realizodenuncia);
                setNodenuncia(riesgosData.nodenuncia);
                setDesistimientodenuncia(riesgosData.desistimientodenuncia);
                setSinabogade(riesgosData.sinabogade);
                setAntecedentesagresor(riesgosData.antecedentesagresor);
                setAgresorarmas(riesgosData.agresorarmas);
                setSincautelares(riesgosData.sincautelares);
                setDesinstitucional(riesgosData.desinstitucional);
                setViolenciainst(riesgosData.violenciainst);
                setCausavif(riesgosData.causavif);
                setDesacato(riesgosData.desacato);
                setTotallegal(riesgosData.totallegal);
                setEmbarazo(riesgosData.embarazo);
                setAmenazasactuales(riesgosData.amenazasactuales);
                setNnavictimasvif(riesgosData.nnavictimasvif);
                setViolenciapsicologica(riesgosData.violenciapsicologica);
                setViolenciafisica(riesgosData.violenciafisica);
                setViolenciasexual(riesgosData.violenciasexual);
                setViolenciaeco(riesgosData.violenciaeco);
                setMasagresores(riesgosData.masagresores);
                setTerceraedad(riesgosData.terceraedad);
                setAdolescente(riesgosData.adolescente);
                setSituaciondiscapacidad(riesgosData.situaciondiscapacidad);
                setAutopercepcion(riesgosData.autopercepcion);
                setTotaltransversal(riesgosData.totaltransversal);
                setTotalpauta(riesgosData.totalpauta);
            })
            .catch(error => {
                console.error('Error al cargar pautas:', error);
            });
    };

    const limpiarCamposSesiones = () => {
        setFechaSesiones("");
        setDescripcionSesiones("");

    };

    const confirmarGuardarSesiones = () => {
        if (descripcionSesiones.trim() !== "") {
            const MAX_CONTENT_LENGTH = 1500;
            if (descripcionSesiones.length <= MAX_CONTENT_LENGTH) {
                const nuevaSesion = {
                    rut_usuario: rut,
                    fecha: fechaSesiones,
                    descripcion: descripcionSesiones
                };
                Axios
                    .post("http://localhost:3001/sesiones", nuevaSesion)
                    .then((response) => {
                        setSesiones([...sesiones, response.data]);
                        limpiarCamposSesiones();
                        setShowModal(false);
                        setExcedioLimite(false); // Reiniciar el estado de exceder límite
                        Swal.fire("Éxito", "La sesión se ha creado con éxito.", "success");
                        // Después de mostrar el SweetAlert, actualiza la lista
                        cargarSesionesDesdeServidor();
                    })
                    .catch((error) => {
                        console.error(error);
                    }); 
            } else {
                // Muestra un SweetAlert de error si el contenido excede el límite
                Swal.fire("Error", "El contenido de la sesión excede el límite de 1500 caracteres.", "error");
                setExcedioLimite(true); // Establecer el estado para mostrar la alerta de exceder límite
            }
        } else {
            // Muestra un SweetAlert de error si falta información
            Swal.fire("Error", "Por favor, complete todos los campos obligatorios.", "error");
        }
    };

    const editarSesion = (index) => {

        setDescripcionSesiones(index.descripcion);
        setFechaSesiones(formatDate2(index.fecha));
        setSesionEditando(index);
        setModoEdicion(true);
        setShowModal(true);

    };

    const actualizarSesion = () => {

        if (sesionEditando !== null) {
            const sesionesId = sesionEditando.id;
            const sesionActualizada = { id: sesionesId, fechaSesiones, descripcionSesiones };
            console.log('aksjdkasd', sesionActualizada)
            const MAX_CONTENT_LENGTH = 1500;
            if (descripcionSesiones.length <= MAX_CONTENT_LENGTH) {
                Axios.put(`http://localhost:3001/sesiones/${sesionesId}`, sesionActualizada) // Cambia la URL de acuerdo a tu servidor
                .then(response => {
                    const nuevasSesiones = [...sesiones];
                    nuevasSesiones[sesionEditando] = response.data;
                    setSesiones(nuevasSesiones);
                    cargarSesionesDesdeServidor();
                })
                
                .catch(error => {
                    console.error(error);
                });

            } else {
                // Muestra un SweetAlert de error si el contenido excede el límite
                Swal.fire("Error", "El contenido de la sesión excede el límite de 1500 caracteres.", "error");
                setExcedioLimite(true); // Establecer el estado para mostrar la alerta de exceder límite
            
                };
           

            setDescripcionSesiones("");
            setFechaSesiones("");
            setShowModal(false);
            setModoEdicion(false);
            setSesionEditando(null);
        }
    };

    const editarPautaR = (index) => {
        setMigrante(index.migrante);
        setBarreralinguistica(index.barreralinguistica);
        setIndocumentado(index.indocumentado);
        setSinredapoyo(index.sinredapoyo);
        setSinredamigues(index.sinredamigues);
        setNovisibilidad(index.novisibilidad);
        setSintrabajo(index.sintrabajo);
        setViveconagresor(index.viveconagresor);
        setSindispositivos(index.sindispositivos);
        setAislamiento(index.aislamiento);
        setDependeeconomicamente(index.dependeeconomicamente);
        setNohogar(index.nohogar);
        setHijesencomun(index.hijesencomun);
        setNiñesacargo(index.niñesacargo);
        setTotalsocial(index.totalsocial);
        setEnfermedadbase(index.enfermedadbase);
        setIntentoss(index.intentoss);
        setPlaneacions(index.planeacions);
        setIdeacions(index.ideacions);
        setAbusosustancia(index.abusosustancia);
        setCrisisansiosa(index.crisisansiosa);
        setInsomnio(index.insomnio);
        setTca(index.tca);
        setSintomatologiatrauma(index.sintomatologiatrauma);
        setSintratamiento(index.sintratamiento);
        setPsicosomatizacion(index.psicosomatizacion);
        setAgresorconsumidor(index.agresorconsumidor);
        setTrastornoagresor(index.trastornoagresor);
        setTotalpsicologico(index.totalpsicologico);
        setHabitualidadagresion(index.habitualidadagresion);
        setRealizodenuncia(index.realizodenuncia);
        setNodenuncia(index.nodenuncia);
        setDesistimientodenuncia(index.desistimientodenuncia);
        setSinabogade(index.sinabogade);
        setAntecedentesagresor(index.antecedentesagresor);
        setAgresorarmas(index.agresorarmas);
        setSincautelares(index.sincautelares);
        setDesinstitucional(index.desinstitucional);
        setViolenciainst(index.violenciainst);
        setCausavif(index.causavif);
        setDesacato(index.desacato);
        setTotallegal(index.totallegal);
        setEmbarazo(index.embarazo);
        setAmenazasactuales(index.amenazasactuales);
        setNnavictimasvif(index.nnavictimasvif);
        setViolenciapsicologica(index.violenciapsicologica);
        setViolenciafisica(index.violenciafisica);
        setViolenciasexual(index.violenciasexual);
        setViolenciaeco(index.violenciaeco);
        setMasagresores(index.masagresores);
        setTerceraedad(index.terceraedad);
        setAdolescente(index.adolescente);
        setSituaciondiscapacidad(index.situaciondiscapacidad);
        setAutopercepcion(index.autopercepcion);
        setTotaltransversal(index.totaltransversal);
        setTotalpauta(index.totalpauta);


        setEditMode(true);
        setShowEditMode(true);
        setPautaEditando(index);
    };

    const actualizarPauta = () => {
        if (setPautaEditando !== null) {
            const riesgoId = pautaEditando.id;

            const totalSocial2 =
                parseFloat(migrante) +
                parseFloat(barreralinguistica) +
                parseFloat(indocumentado) +
                parseFloat(sinredamigues) +
                parseFloat(sinredapoyo) +
                parseFloat(novisibilidad) +
                parseFloat(sintrabajo) +
                parseFloat(viveconagresor) +
                parseFloat(sindispositivos) +
                parseFloat(aislamiento) +
                parseFloat(dependeeconomicamente) +
                parseFloat(nohogar) +
                parseFloat(hijesencomun) +
                parseFloat(niñesacargo)

            const totalPsicologico2 = 0 + parseFloat(enfermedadbase)
                + parseFloat(intentoss)
                + parseFloat(planeacions)
                + parseFloat(ideacions)
                + parseFloat(abusosustancia)
                + parseFloat(crisisansiosa)
                + parseFloat(tca)
                + parseFloat(insomnio)
                + parseFloat(sintomatologiatrauma)
                + parseFloat(sintratamiento)
                + parseFloat(psicosomatizacion)
                + parseFloat(agresorconsumidor)
                + parseFloat(trastornoagresor)

            const totalLegal2 =
                parseFloat(habitualidadagresion) +
                parseFloat(realizodenuncia) +
                parseFloat(nodenuncia) +
                parseFloat(desistimientodenuncia) +
                parseFloat(sinabogade) +
                parseFloat(antecedentesagresor) +
                parseFloat(agresorarmas) +
                parseFloat(sincautelares) +
                parseFloat(desinstitucional) +
                parseFloat(violenciainst) +
                parseFloat(causavif) +
                parseFloat(desacato)

            const totalTransversal2 =
                parseFloat(embarazo) +
                parseFloat(amenazasactuales) +
                parseFloat(nnavictimasvif) +
                parseFloat(violenciapsicologica) +
                parseFloat(violenciafisica) +
                parseFloat(violenciasexual) +
                parseFloat(violenciaeco) +
                parseFloat(masagresores) +
                parseFloat(terceraedad) +
                parseFloat(adolescente) +
                parseFloat(situaciondiscapacidad) +
                parseFloat(autopercepcion)

            const totalPauta2 =
                parseFloat(totalLegal2) +
                parseFloat(totalPsicologico2) +
                parseFloat(totalSocial2) +
                parseFloat(totalTransversal2)



            const pautaActualizada = { id: riesgoId, migrante, barreralinguistica, indocumentado, sinredapoyo, sinredamigues, novisibilidad, sintrabajo, viveconagresor, sindispositivos, aislamiento, dependeeconomicamente, nohogar, hijesencomun, niñesacargo, totalsocial: totalSocial2, enfermedadbase, intentoss, planeacions, ideacions, abusosustancia, crisisansiosa, insomnio, tca, sintomatologiatrauma, sintratamiento, psicosomatizacion, agresorconsumidor, trastornoagresor, totalpsicologico: totalPsicologico2, habitualidadagresion, realizodenuncia, nodenuncia, desistimientodenuncia, sinabogade, antecedentesagresor, agresorarmas, sincautelares, desinstitucional, violenciainst, causavif, desacato, totallegal: totalLegal2, embarazo, amenazasactuales, nnavictimasvif, violenciapsicologica, violenciafisica, violenciasexual, violenciaeco, masagresores, terceraedad, adolescente, situaciondiscapacidad, autopercepcion, totaltransversal: totalTransversal2, totalpauta: totalPauta2 };
            Axios.put(`http://localhost:3001/riesgo/${riesgoId}`, pautaActualizada) // Cambia la URL de acuerdo a tu servidor
                .then(response => {

                    const nuevasPautas = [...riesgos];
                    nuevasPautas[pautaEditando] = response.data;
                    setRiesgos(nuevasPautas);
                    getPauta();
                })
                .catch(error => {
                    console.error(error);
                });

            Axios.put('http://localhost:3001/update', {
                id: id,
                nombre: nombre,
                rut: rut,
                profesional: profesional,
                prioridad: clasificarPrioridad(totalPauta2).toUpperCase(),
                edad: edad,
                nacionalidad: nacionalidad,
                nacimiento: nacimiento,
                civil: civil,
                direccion: direccion,
                educacion: educacion,
                telefono: telefono,
                correo: correo,
                pareja: pareja,
                vinculoagresor: vinculoagresor,
                sistemasalud: sistemasalud,
                sistemasaludDOS: sistemasaludDOS,
                fisica: fisica,
                saludmental: saludmental,
                tratamiento: tratamiento,
                farmaco: farmaco,
                cualfarmaco: cualfarmaco,
                drogas: drogas,
                intentoS: intentoS,
                ideasS: ideasS,
                profesion: profesion,
                remunerado: remunerado,
                trabaja: trabaja,
                dondetrabaja: dondetrabaja,
                horarios: horarios,
                ingresossalario: ingresossalario,
                ingresosjubilacion: ingresosjubilacion,
                ingresossubsidio: ingresossubsidio,
                ingresospension: ingresospension,
                ingresosotros: ingresosotros,
                ingresostotales: ingresostotales,
                dependeeco: dependeeco,
                dependequien: dependequien,
                dependedelagresor: dependedelagresor,
                viffamilia: viffamilia,
                vifniñez: vifniñez,
                vifporotro: vifporotro,
                otroquien: otroquien,
                tipoviolencia: tipoviolencia,
                primerviolencia: primerviolencia,
                ultimoviolencia: ultimoviolencia,
                personashogar: personashogar,
                canthijes: canthijes,
                hijesagresor: hijesagresor,
                cantnna: cantnna,
                vivienda: vivienda,
                pertenecejunta: pertenecejunta,
                perteneceadultomayor: perteneceadultomayor,
                pertenecemujer: pertenecemujer,
                pertenecereligion: pertenecereligion,
                pertenecedeportiva: pertenecedeportiva,
                pertenececultural: pertenececultural,
                perteneceotra: perteneceotra,
                psicologica: psicologica,
                legal: legal,
                social: social,
                listaespera: listaespera,
                familia: familia,
            }).then(() => {
            });

            setMigrante("");
            setBarreralinguistica("");
            setIndocumentado("");
            setSinredapoyo("");
            setSinredamigues("");
            setNovisibilidad("");
            setSintrabajo("");
            setViveconagresor("");
            setSindispositivos("");
            setAislamiento("");
            setDependeeconomicamente("");
            setNohogar("");
            setHijesencomun("");
            setNiñesacargo("");
            setTotalsocial("");
            setEnfermedadbase("");
            setIntentoss("");
            setPlaneacions("");
            setIdeacions("");
            setAbusosustancia("");
            setCrisisansiosa("");
            setInsomnio("");
            setTca("");
            setSintomatologiatrauma("");
            setSintratamiento("");
            setPsicosomatizacion("");
            setAgresorconsumidor("");
            setTrastornoagresor("");
            setTotalpsicologico("");
            setHabitualidadagresion("");
            setRealizodenuncia("");
            setNodenuncia("");
            setDesistimientodenuncia("");
            setSinabogade("");
            setAntecedentesagresor("");
            setAgresorarmas("");
            setSincautelares("");
            setDesinstitucional("");
            setViolenciainst("");
            setCausavif("");
            setDesacato("");
            setTotallegal("");
            setEmbarazo("");
            setNnavictimasvif("");
            setViolenciapsicologica("");
            setViolenciafisica("");
            setViolenciasexual("");
            setViolenciaeco("");
            setMasagresores("");
            setTerceraedad("");
            setAdolescente("");
            setSituaciondiscapacidad("");
            setAutopercepcion("");
            setTotaltransversal("");
            setTotalpauta("");


            setShowModal(false);
            setModoEdicion(false);
            setPautaEditando(null);

        }
    };

    function clasificarPrioridad(totalPauta2) {
        if (totalPauta2 === 0) {
            return "Pendiente";
        } else if (totalPauta2 >= 1 && totalPauta2 <= 21) {
            return "Leve";
        } else if (totalPauta2 >= 22 && totalPauta2 <= 42) {
            return "Medio";
        } else if (totalPauta2 >= 43 && totalPauta2 <= 63) {
            return "Grave";
        } else if (totalPauta2 >= 64 && totalPauta2 <= 84) {
            return "Urgente";
        }
    }

    useEffect(() => {
        getUsuario(id)
        cargarSesionesDesdeServidor();
        getPauta();
    }, []);
    return (
        <div className="container1" class='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <font size='5'>
                    <b>{nombre}</b>
                </font>
            </div>
            <Tabs
                defaultActiveKey="ficha"

                aria-label="tabs"
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
                onSelect={(k) => handleTabChange(k)}
            >
                {console.log('aaaa:', showCancelarButton)}
                {riesgos.map((riesgo) => (<Tab eventKey="ficha" title={<span style={{ color: 'black' }} className='fichatab'>Ficha de Usuarie</span>} >
                    <div className="infopacientes1">
                        <div className="botones-container">

                            <div className="editarb">
                                {!showCancelarButton ? (
                                    <div className="editarb">
                                        <button type="button" onClick={() => { editarEmpleado(); }} className="btn btn">
                                            Editar
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                            <div className="derecha">

                                <div className='editarguardar'>
                                    {editMode && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                guardarCambios();
                                                editarEmpleadoOFF()
                                            }}
                                            className="btn btn-primary"
                                        >
                                            Guardar
                                        </button>
                                    )}
                                </div>
                                {showCancelarButton && (
                                    <div className="editaroff">
                                        <button type="button" onClick={() => { editarEmpleadoOFF(); getUsuario(id); }} className="btn btn">
                                            Cancelar
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <br></br>
                        <div>

                            <div className='listaEsperaInfo'>
                                <Form.Label id="basic-addon1"> <font size='4'> <b>Se encuentra en lista de espera: &nbsp;</b></font> </Form.Label>
                                
                                {listaesperaEleccion.map((listaesperaOption, index) => (
                                    <div key={index} className="form-check form-check-inline ">
                                        {editMode ? (
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`listaesperaOption${index}`}
                                                value={listaesperaOption.valor}
                                                checked={listaespera === listaesperaOption.valor}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setListaespera(e.target.value.toUpperCase());
                                                    } else {
                                                        // Puedes manejar la deselección si es necesario
                                                        setListaespera(""); // O establecerlo como vacío
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`listaesperaOption${index}`}
                                                value={listaesperaOption.valor}
                                                readOnly
                                                checked={listaespera === listaesperaOption.valor}
                                            />
                                        )}
                                        <label className="form-check-label" htmlFor={`listaesperaOption${index}`}>
                                            {listaesperaOption.nombre}
                                        </label>
                                    </div>
                                ))}
                            </div>


                            <div className="subtitulo1">
                                <b>1.ANTECEDENTES DEL USUARIE:</b>
                            </div>
                            {/* Campo "Nombre" */}
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Nombre:
                                </span>
                                {editMode ? (
                                    <input type="text" value={nombre}
                                        onChange={(event) => {
                                            setNombre(event.target.value.toUpperCase());
                                        }}
                                        className="form-control narrow-input" placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={nombre}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    RUT:
                                </span>
                                {editMode ? (
                                    <input type="text" maxLength={10} value={rut}
                                        onChange={(event) => {
                                            setRut(event.target.value.toUpperCase());
                                        }}
                                        className="form-control" placeholder="Ingresar Rut (sin punto, con guión)" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        maxLength={9}
                                        value={rut}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    PROFESIONAL:
                                </span>
                                {editMode ? (
                                    <input type="text" value={profesional}
                                        onChange={(event) => {
                                            setProfesional(event.target.value.toUpperCase());
                                        }}
                                        className="form-control" placeholder="Profesional que lo ingresa" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={profesional}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    PRIORIDAD:
                                </span>
                                {editMode ? (
                                    <input type="text" value={prioridad}
                                        onChange={(event) => {
                                            setPrioridad(event.target.value.toUpperCase());
                                        }}
                                        className="form-control" placeholder="Prioridad del paciente" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={clasificarPrioridad(riesgo.totalpauta).toUpperCase()}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}

                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    EDAD:
                                </span>
                                {editMode ? (
                                    <input type="number" value={edad} inputMode="numeric" maxLength={3}
                                        onChange={(event) => {
                                            setEdad((event.target.value.slice(0, 3)));
                                        }}
                                        className="form-control no-arrow" placeholder="Ingresar Edad" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={edad}
                                        readOnly
                                        className="form-control no-arrow"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    NACIONALIDAD:
                                </span>
                                {editMode ? (
                                    <input type="text" value={nacionalidad}
                                        onChange={(event) => {
                                            setNacionalidad(event.target.value.toUpperCase());
                                        }}
                                        className="form-control" placeholder="Ingresar Nacionalidad" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={nacionalidad}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    NACIMIENTO:
                                </span>
                                {editMode ? (
                                    <input type='date' value={nacimiento}
                                        onChange={(event) => {
                                            setNacimiento(event.target.value);
                                        }}
                                        className="form-control" placeholder="dd-mm-aaaa" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={formatDate(nacimiento)}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    ESTADO CIVIL:
                                </span>
                                {editMode ? (
                                    <input type="text" value={civil}
                                        onChange={(event) => {
                                            setCivil(event.target.value.toUpperCase());
                                        }}
                                        className="form-control" placeholder="Ingresar estado civil" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={civil}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    DIRECCIÓN:
                                </span>
                                {editMode ? (
                                    <input type="text" value={direccion}
                                        onChange={(event) => {
                                            setDireccion(event.target.value.toUpperCase());
                                        }}
                                        className="form-control" placeholder="Ingresar dirección" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={direccion.trim()}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: 'white' }}>
                                    EDUCACIÓN:
                                </span>
                                {editMode ? (
                                    <input type="text" maxLength="100" value={educacion.trim()}
                                        onChange={(event) => {
                                            setEducacion((event.target.value.toUpperCase()).trim());
                                        }}
                                        className="form-control" placeholder="Ingresar educacion" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={educacion.trim()}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    TELÉFONO:
                                </span>
                                {editMode ? (
                                    <input type="text" inputMode="numeric" maxLength={10} value={telefono}
                                        onChange={(event) => {
                                            setTelefono((event.target.value.slice(0, 9)));
                                        }}
                                        className="form-control no-arrow" placeholder="Ingresar Telefono" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={telefono}
                                        readOnly
                                        className="form-control no-arrow"
                                        placeholder="Ingrese un nombre"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Correo:
                                </span>
                                {editMode ? (
                                    <input type="text" value={correo}
                                        onChange={(event) => {
                                            setCorreo(event.target.value.toUpperCase());
                                        }}
                                        className="form-control" placeholder="Ingresar Correo" aria-label="Username" aria-describedby="basic-addon1" />
                                ) : (
                                    <input
                                        type="text"
                                        value={correo.trim()}
                                        readOnly
                                        className="form-control"
                                        placeholder="Ingresar Correo"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                )}
                            </div>
                            <div className="antecedentes1.1">
                                <div className='subtitulo1' style={{ marginBottom: '10px' }}>
                                    <b>1.1 REGISTRO ANTECEDENTES USUARIE:</b>
                                </div>
                                <div>
                                    <span id="basic-addon1">Estado de pareja actual:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    {parejaEleccion.map((parejaOption, index) => (
                                        <div key={index} className="form-check form-check-inline ">
                                            {editMode ? (
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`parejaOption${index}`}
                                                    value={parejaOption.valor}
                                                    checked={pareja === parejaOption.valor}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setPareja(e.target.value.toUpperCase());
                                                        } else {
                                                            // Puedes manejar la deselección si es necesario
                                                            setPareja(""); // O establecerlo como vacío
                                                        }
                                                    }}
                                                />
                                            ) : (
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`parejaOption${index}`}
                                                    value={parejaOption.valor}
                                                    readOnly
                                                    checked={pareja === parejaOption.valor}
                                                />
                                            )}
                                            <label className="form-check-label" htmlFor={`parejaOption${index}`}>
                                                {parejaOption.nombre}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="input-group mb-3" >
                                    <Form.Group controlId="formEventPareja">
                                        <Form.Label style={{ marginTop: '15px' }}>Vínculo con el Agresor:</Form.Label>
                                        {editMode ? (
                                            <Form.Control
                                                as="select"
                                                value={vinculoagresor}
                                                onChange={(e) => setVinculoagresor(e.target.value)}>
                                                <option value="default">Ver Opciones</option>
                                                <option value="conyuge">CÓNYUGE</option>
                                                <option value="exconyuge">EX CÓNYUGE</option>
                                                <option value="conviviente">Conviviente</option>
                                                <option value="excoviviente">EX CONVIVIENTE</option>
                                                <option value="pololo">POLOLO</option>
                                                <option value="expololo">EX POLOLO</option>
                                                <option value="padreijo">PADRE DE HIJO/A EN COMÚN</option>
                                                <option value="otrorelacn">CONVIVIENTE</option>
                                            </Form.Control>
                                        ) : (
                                            <Form.Control
                                                as="select"
                                                value={vinculoagresor}
                                                disabled>
                                                <option value="default">Ver Opciones</option>
                                                <option value="conyuge">CÓNYUGE</option>
                                                <option value="exconyuge">EX CÓNYUGE</option>
                                                <option value="conviviente">Conviviente</option>
                                                <option value="excoviviente">EX CONVIVIENTE</option>
                                                <option value="pololo">POLOLO</option>
                                                <option value="expololo">EX POLOLO</option>
                                                <option value="padreijo">PADRE DE HIJO/A EN COMÚN</option>
                                                <option value="otrorelacn">CONVIVIENTE</option>
                                            </Form.Control>
                                        )}
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='salud'>
                                <div className='salud1' style={{ marginBottom: '10px' }}><b>2. SALUD </b></div>
                                <div className="input-group mb-3">
                                    <Form.Group controlId="formEventSalud">
                                        <Form.Label>Sistema de Salud:</Form.Label>
                                        {editMode ? (
                                            <Form.Control
                                                as="select"
                                                value={sistemasalud}
                                                onChange={(e) =>
                                                    setSistemasalud(e.target.value)
                                                }>
                                                <option value="default">Ver Opciones</option>
                                                <option value="Isapre">ISAPRE</option>
                                                <option value="Fonasa">FONASA</option>
                                                <option value="Ninguno">NINGUNA</option>
                                            </Form.Control>
                                        ) : (
                                            <Form.Control
                                                as="select"
                                                value={sistemasalud}
                                                disabled>
                                                <option value="default">Ver Opciones</option>
                                                <option value="Isapre">ISAPRE</option>
                                                <option value="Fonasa">FONASA</option>
                                                <option value="Ninguno">NINGUNA</option>
                                            </Form.Control>
                                        )}
                                    </Form.Group>
                                </div>
                                <Form.Label id="basic-addon1"> Beneficiario: </Form.Label><br></br>
                                {sistemaEleccion.map((sistemaOption, index) => (
                                    <div key={index} className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`sistemaOption${index}`}
                                            value={sistemaOption.valor}
                                            checked={sistemasaludDOS === sistemaOption.valor}
                                            onChange={(e) => {
                                                if (editMode) {  // Solo permitir cambios si está en modo de edición
                                                    if (e.target.checked) {
                                                        setSistemasaludDOS(e.target.value);
                                                    }
                                                }
                                            }}
                                        // Deshabilitar casillas en modo de lectura
                                        />
                                        <label className="form-check-label" htmlFor={`sistemaOption${index}`}>
                                            {sistemaOption.nombre}
                                        </label>
                                    </div>
                                ))}
                                <div className='salud2' style={{ marginBottom: '10px', marginTop: '20px' }}><b>2.1 ENFERMEDADES DIAGNOSTICADAS</b></div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Física (especifique):</span>
                                    {editMode ? (
                                        <textarea
                                            value={fisica}
                                            onChange={(event) => {
                                                if (editMode) {
                                                    setFisica(event.target.value.toUpperCase());
                                                }
                                            }}
                                            className="form-control"
                                            placeholder={editMode ? "En caso de no haber, ingresar: nada" : "N/A"}
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            disabled={!editMode}
                                        />
                                    ) : (
                                        <textarea
                                            value={fisica}
                                            readOnly
                                            className="form-control"
                                            placeholder="N/A"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Salud Mental:</span>
                                    {editMode ? (
                                        <textarea
                                            value={saludmental}
                                            onChange={(event) => {
                                                if (editMode) {
                                                    setSaludmental(event.target.value.toUpperCase());
                                                }
                                            }}
                                            className="form-control"
                                            placeholder={editMode ? "Señale diagnóstico asociado" : "N/A"}
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            disabled={!editMode}
                                        />
                                    ) : (
                                        <textarea
                                            value={saludmental}
                                            readOnly
                                            className="form-control"
                                            placeholder="N/A"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <Form.Label id="basic-addon1"> Usuarie Actualemente en Tratamiento: </Form.Label><br></br>
                                {tratamientoEleccion.map((tratamientoOption, index) => (
                                    <div key={index} className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`tratamientoOption${index}`}
                                            value={tratamientoOption.valor}
                                            checked={tratamiento === tratamientoOption.valor}
                                            onChange={(e) => {
                                                if (editMode && e.target.checked) {
                                                    setTratamiento(e.target.value.toUpperCase());
                                                }
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor={`tratamientoOption${index}`}>
                                            {tratamientoOption.nombre}
                                        </label>
                                    </div>
                                ))}
                                <br /><br />
                                <Form.Label id="basic-addon1"> Consumo de Fármacos:  </Form.Label><br></br>
                                {farmacoEleccion.map((farmacoOption, index) => (
                                    <div key={index} className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`farmacoOption${index}`}
                                            value={farmacoOption.valor}
                                            checked={farmaco === farmacoOption.valor}
                                            onChange={(e) => {
                                                if (editMode && e.target.checked) {
                                                    setFarmaco(e.target.value.toUpperCase());
                                                }
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor={`farmacoOption${index}`}>
                                            {farmacoOption.nombre}
                                        </label>
                                    </div>
                                ))}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Fármacos:</span>
                                    {editMode ? (
                                        <textarea
                                            value={cualfarmaco}
                                            onChange={(event) => {
                                                setCualfarmaco(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="¿Cuáles? (si no consume, ingresar: nada)"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <textarea
                                            value={cualfarmaco}
                                            readOnly
                                            className="form-control"
                                            placeholder="¿Cuáles? (si no consume, ingresar: nada)"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Drogas (Alcohol, Marihuana, etc):</span>
                                    {editMode ? (
                                        <textarea
                                            value={drogas}
                                            onChange={(event) => {
                                                setDrogas(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="¿Cuáles? (si no consume, ingresar: nada)"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />) : (
                                        <textarea
                                            value={drogas}
                                            readOnly
                                            className="form-control"
                                            placeholder="¿Cuáles? (si no consume, ingresar: nada)"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <Form.Label id="basic-addon1"> ¿Ha intentado atentar contra su vida?:  </Form.Label><br></br>
                                {intentoSEleccion.map((intentoSOption, index) => (
                                    <div key={index} className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`intentoSOption${index}`}
                                            value={intentoSOption.valor}
                                            checked={intentoS === intentoSOption.valor}
                                            onChange={(e) => {
                                                if (editMode && e.target.checked) {
                                                    setIntentoS(e.target.value.toUpperCase());
                                                }
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor={`tratamientoOption${index}`}>
                                            {intentoSOption.nombre}
                                        </label>
                                    </div>
                                ))}
                                <br />
                                <Form.Label>*No preguntar directamente, usar criterio profesional</Form.Label>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <Form.Group controlId="formEventIdeaS">
                                        <Form.Label>Tipo de Acción:</Form.Label>
                                        {editMode ? (
                                            <Form.Control
                                                as="select"
                                                value={ideasS}
                                                onChange={(e) =>
                                                    setideasS(e.target.value)
                                                }
                                            > <option value="default">Ver Opciones</option>
                                                <option value="ideacion">IDEACIÓN SUICIDA</option>
                                                <option value="planeacion">PLANEACIÓN SUICIDA</option>
                                                <option value="intento">INTENTO SUICIDA</option>
                                                <option value="ninugna">NINGUNA</option>

                                            </Form.Control>
                                        ) : (
                                            <Form.Control
                                                as="select"
                                                value={ideasS}
                                                disabled
                                            >
                                                <option value="default">Ver Opciones</option>
                                                <option value="ideacion">IDEACIÓN SUICIDA</option>
                                                <option value="planeacion">PLANEACIÓN SUICIDA</option>
                                                <option value="intento">INTENTO SUICIDA</option>
                                                <option value="ninugna">NINGUNA</option>
                                            </Form.Control>
                                        )}
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='laboral'>
                                <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>3. SITUACIÓN LABORAL:</b></div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1" >Profesión u Oficio:</span>
                                    {editMode ? (
                                        <input type="text" value={profesion}
                                            onChange={(event) => {
                                                setProfesion(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Ingrese ocupación"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    ) : (
                                        <input
                                            type="text"
                                            value={profesion}
                                            readOnly
                                            className="form-control"
                                            placeholder="Ingrese ocupación"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <Form.Label id="basic-addon1"> ¿Realiza trabajo remunerado?  </Form.Label><br></br>
                                {remuneradoEleccion.map((remuneradoOption, index) => (
                                    <div key={index} className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`remuneradoOption${index}`}
                                            value={remuneradoOption.valor}
                                            checked={remunerado === remuneradoOption.valor}
                                            onChange={(e) => {
                                                if (editMode && e.target.checked) {
                                                    setRemunerado(e.target.value.toUpperCase());
                                                }
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor={`remuneradoOption${index}`}>
                                            {remuneradoOption.nombre}
                                        </label>
                                    </div>
                                ))}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <Form.Group controlId="formEventIdeaS">
                                        <Form.Label>Forma de Trabajo:</Form.Label>
                                        {editMode ? (
                                            <Form.Control
                                                as="select"
                                                value={trabaja}
                                                onChange={(e) =>
                                                    setTrabaja(e.target.value)
                                                }
                                            > <option value="default">Ver Opciones</option>
                                                <option value="Independiente">INDEPENDIENTE </option>
                                                <option value="Dependiente">DEPENDIENTE </option>
                                                <option value="No Trabaja">NO TRABAJA</option>
                                            </Form.Control>
                                        ) : (
                                            <Form.Control
                                                as="select"
                                                value={trabaja}
                                                disabled>
                                                <option value="default">Ver Opciones</option>
                                                <option value="Independiente">INDEPENDIENTE </option>
                                                <option value="Dependiente">DEPENDIENTE </option>
                                                <option value="No Trabaja">NO TRABAJA</option>
                                            </Form.Control>
                                        )}
                                    </Form.Group>
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">¿Dónde Trabaja?</span>
                                    {editMode ? (
                                        <input type="text"
                                            value={dondetrabaja}
                                            onChange={(event) => {
                                                setDondetrabaja(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Ingrese ocupación"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="text"
                                            value={dondetrabaja}
                                            readOnly
                                            className="form-control"
                                            placeholder="Ingrese ocupación"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Horario de Trabajo</span>
                                    {editMode ? (
                                        <input type="text"
                                            value={horarios}
                                            onChange={(event) => {
                                                setHorarios(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="¿Cuál es su horario de trabajo?"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="text"
                                            value={horarios}
                                            readOnly
                                            className="form-control"
                                            placeholder="¿Cuál es su horario de trabajo?"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                {/* Salario */}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Salario</span>
                                    {editMode ? (
                                        <input type="number"
                                            value={ingresossalario}
                                            onChange={(event) => {
                                                setIngresossalario(event.target.value);
                                            }}
                                            className="form-control no-arrow"
                                            placeholder="¿Cuál es su salario?"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number"
                                            value={ingresossalario}
                                            readOnly
                                            className="form-control no-arrow"
                                            placeholder="¿Cuál es su salario?"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                {/* Jubilación */}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Jubilación</span>
                                    {editMode ? (
                                        <input type="number"
                                            value={ingresosjubilacion}
                                            onChange={(event) => {
                                                setIngresosjubilacion(event.target.value);
                                            }}
                                            className="form-control no-arrow"
                                            placeholder="¿Cuánto es su jubilación?"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    ) : (<input type="number"
                                        value={ingresosjubilacion}
                                        readOnly
                                        className="form-control no-arrow"
                                        placeholder="¿Cuánto es su jubilación?"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                {/* Subsidio */}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Subsidio</span>
                                    {editMode ? (
                                        <input type="number"
                                            value={ingresossubsidio}
                                            onChange={(event) => {
                                                setIngresossubsidio(event.target.value);
                                            }}
                                            className="form-control no-arrow"
                                            placeholder="¿Cuál es su Subsidio?"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number"
                                            value={ingresossubsidio}
                                            readOnly
                                            className="form-control no-arrow"
                                            placeholder="¿Cuál es su Subsidio?"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                {/* Pensiones */}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Pensiones</span>
                                    {editMode ? (
                                        <input type="number"
                                            value={ingresospension}
                                            onChange={(event) => {
                                                setIngresospension(event.target.value);
                                            }}
                                            className="form-control no-arrow" placeholder="¿Cuál es su Pensiones?" aria-label="Username" aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number"
                                            value={ingresospension}
                                            readOnly
                                            className="form-control no-arrow" placeholder="¿Cuál es su Pensiones?" aria-label="Username" aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                {/* Otros Ingresos */}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Otros Ingresos</span>
                                    {editMode ? (
                                        <input type="number"
                                            value={ingresosotros}
                                            onChange={(event) => {
                                                setIngresosotros(event.target.value);
                                            }}
                                            className="form-control no-arrow" placeholder="¿Cuál es su Otros Ingreso?" aria-label="Username" aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number"
                                            value={ingresosotros}
                                            readOnly
                                            className="form-control no-arrow" placeholder="¿Cuál es su Otros Ingreso?" aria-label="Username" aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                {/* TOTAL */}
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">total</span>
                                    {editMode ? (
                                        <input type="number"
                                            value={ingresostotales}
                                            onChange={(event) => {
                                                setIngresostotales(event.target.value);
                                            }}
                                            className="form-control" placeholder="total" aria-label="Username" aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number"
                                            value={ingresostotales}
                                            readOnly
                                            className="form-control" placeholder="total" aria-label="Username" aria-describedby="basic-addon1" />
                                    )}
                                </div>
                            </div>
                            {/* 3.1 Situación Económica  */}
                            <div className='laboral2' style={{ marginBottom: '10px', marginTop: '20px' }}><b>3.1 SITUACIÓN ECONÓMICA</b></div>
                            <Form.Label id="basic-addon1"> ¿Depende Económicamente?  </Form.Label><br></br>
                            {dependeecoEleccion.map((dependeecoOption, index) => (
                                <div key={index} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`dependeecoOption${index}`}
                                        value={dependeecoOption.valor}
                                        checked={dependeeco === dependeecoOption.valor}
                                        onChange={(e) => {
                                            if (editMode && e.target.checked) {
                                                setDependeeco(e.target.value.toUpperCase());
                                            }
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor={`dependeecoOption${index}`}>
                                        {dependeecoOption.nombre}
                                    </label>
                                </div>
                            ))}
                            <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                <Form.Group controlId="formEventIdeaS">
                                    <Form.Label>¿De quién depende económicamente?</Form.Label>
                                    {editMode ? (
                                        <Form.Control
                                            as="select"
                                            value={dependequien}
                                            onChange={(e) =>
                                                setDependequien(e.target.value)
                                            }
                                        > <option value="default">Ver Opciones</option>
                                            <option value="Pareja">PAREJA </option>
                                            <option value="Ex Pareja">EX PAREJA </option>
                                            <option value="Padres hijes en común"> PADRES HIJES EN COMÚN</option>
                                            <option value="Familiar">FAMILIAR </option>
                                            <option value="Amigo/a">AMIGO/A</option>
                                            <option value="Otro/a">OTRO/A</option>
                                            <option value="Nadie">NADIE</option>
                                        </Form.Control>
                                    ) : (
                                        <Form.Control
                                            as="select"
                                            value={dependequien}
                                            disabled
                                        >
                                            <option value="default">Ver Opciones</option>
                                            <option value="Pareja">PAREJA </option>
                                            <option value="Ex Pareja">EX PAREJA </option>
                                            <option value="Padres hijes en común"> PADRES HIJES EN COMÚN</option>
                                            <option value="Familiar">FAMILIAR </option>
                                            <option value="Amigo/a">AMIGO/A</option>
                                            <option value="Otro/a">OTRO/A</option>
                                            <option value="Nadie">NADIE</option>
                                        </Form.Control>
                                    )}
                                </Form.Group>
                            </div>
                            <Form.Label id="basic-addon1"> Su mantenedor económico es también su agresor </Form.Label><br></br>
                            {dependedelagresorEleccion.map((dependedelagresorOption, index) => (
                                <div key={index} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`dependelagresorOption${index}`}
                                        value={dependedelagresorOption.valor}
                                        checked={dependedelagresor === dependedelagresorOption.valor}
                                        onChange={(e) => {
                                            if (editMode && e.target.checked) {
                                                setDependedelagresor(e.target.value.toUpperCase());
                                            }
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor={`dependedelagresorOption${index}`}>
                                        {dependedelagresorOption.nombre}
                                    </label>
                                </div>
                            ))}
                            <div className='laboral2' style={{ marginBottom: '10px', marginTop: '20px' }}><b>4. CONTEXTO FAMILIAR DE ORIGEN USUARIE</b></div>
                            <Form.Label id="basic-addon1"> Antecedentes VIF de la familia </Form.Label><br></br>
                            {viffamiliaEleccion.map((viffamiliarOption, index) => (
                                <div key={index} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`viffamiliarOption${index}`}
                                        value={viffamiliarOption.valor}
                                        checked={viffamilia === viffamiliarOption.valor}
                                        onChange={(e) => {
                                            if (editMode && e.target.checked) {
                                                setViffamilia(e.target.value.toUpperCase());
                                            }
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor={`viffamiliarOption${index}`}>
                                        {viffamiliarOption.nombre}
                                    </label>
                                </div>
                            ))}
                            <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                            <Form.Label id="basic-addon1" > Maltrato en la niñez </Form.Label><br></br>
                            {vifniñezEleccion.map((vifniñezOption, index) => (
                                <div key={index} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`vifniñezOption${index}`}
                                        value={vifniñezOption.valor}
                                        checked={vifniñez === vifniñezOption.valor}
                                        onChange={(e) => {
                                            if (editMode && e.target.checked) {
                                                setVifniñez(e.target.value.toUpperCase());
                                            }
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor={`vifniñezOption${index}`}>
                                        {vifniñezOption.nombre}
                                    </label>
                                </div>
                            ))}
                            <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                            <Form.Label id="basic-addon1" > Ha sufrido VIF por otro agresor </Form.Label><br></br>
                            {vifporotroEleccion.map((vifporotroOption, index) => (
                                <div key={index} className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`vifporotroOption${index}`}
                                        value={vifporotroOption.valor}
                                        checked={vifporotro === vifporotroOption.valor}
                                        onChange={(e) => {
                                            if (editMode && e.target.checked) {
                                                setVifporotro(e.target.value.toUpperCase());
                                            }
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor={`vifporotroOption${index}`}>
                                        {vifporotroOption.nombre}
                                    </label>
                                </div>
                            ))}
                            <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                <span className="input-group-text" id="basic-addon1">¿Quién?</span>
                                {editMode ? (
                                    <input type="text"
                                        value={otroquien}
                                        onChange={(event) => {
                                            setOtroquien(event.target.value.toUpperCase());
                                        }}
                                        className="form-control"
                                        placeholder="Indicar la persona"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                ) : (
                                    <input type="text"
                                        value={otroquien}
                                        readOnly
                                        className="form-control"
                                        placeholder="Indicar la persona"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                )}
                            </div>
                            <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                            <Form.Label id="basic-addon1" > Tipo de Violencia </Form.Label><br></br>
                            <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                <span className="input-group-text" id="basic-addon1">Tipo</span>
                                {editMode ? (
                                    <input type="text"
                                        value={tipoviolencia}
                                        onChange={(event) => {
                                            setTipoviolencia(event.target.value.toUpperCase());
                                        }}
                                        className="form-control"
                                        placeholder="Fisica, Psicologica, Sexual, Economica"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                ) : (
                                    <input type="text"
                                        value={tipoviolencia}
                                        readOnly
                                        className="form-control"
                                        placeholder="Fisica, Psicologica, Sexual, Economica"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                )}
                            </div>
                            <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                            <Form.Label id="basic-addon1" > Primer episodio de Violencia </Form.Label><br></br>
                            <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                <span className="input-group-text" id="basic-addon1">Primer episodio</span>
                                {editMode ? (
                                    <textarea
                                        value={primerviolencia}
                                        onChange={(event) => {
                                            setPrimerviolencia(event.target.value.toUpperCase());
                                        }}
                                        className="form-control"
                                        placeholder="Relato"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                ) : (
                                    <textarea
                                        value={primerviolencia}
                                        readOnly
                                        className="form-control"
                                        placeholder="Relato"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                )}
                            </div>
                            <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                            <Form.Label id="basic-addon1" > Último episodio de VIF </Form.Label><br></br>
                            <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                <span className="input-group-text" id="basic-addon1">Último episodio</span>
                                {editMode ? (
                                    <textarea
                                        value={ultimoviolencia}
                                        onChange={(event) => {
                                            setUltimoviolencia(event.target.value.toUpperCase());
                                        }}
                                        className="form-control"
                                        placeholder="Relato"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                ) : (
                                    <textarea
                                        value={ultimoviolencia}
                                        readOnly
                                        className="form-control"
                                        placeholder="Relato"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                )}
                            </div>
                            <div className='socio-familiar'>
                                <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>4.2 Composición Familiar:</b></div>
                                <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                                <Form.Label id="basic-addon1" > Antecedentes Familiares </Form.Label><br></br>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Personas que habitan el hogar</span>
                                    {editMode ? (
                                        <input type="number"
                                            value={personashogar}
                                            onChange={(event) => {
                                                setPersonashogar(event.target.value.toUpperCase());
                                            }}
                                            className="form-control no-arrow"
                                            placeholder="Especificar cantidad"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number"
                                            value={personashogar}
                                            readOnly
                                            className="form-control no-arrow"
                                            placeholder="Especificar cantidad"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Hijes</span>
                                    {editMode ? (<input type="number" value={canthijes}
                                        onChange={(event) => {
                                            setCanthijes(event.target.value.toUpperCase());
                                        }}
                                        className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                    ) : (<input type="number" value={canthijes}
                                        readOnly
                                        className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />)}
                                </div>

                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Hijes con el agresor</span>
                                    {editMode ? (<input type="number" value={hijesagresor}
                                        onChange={(event) => {
                                            setHijesagresor(event.target.value.toUpperCase());
                                        }}
                                        className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number" value={hijesagresor}
                                            readOnly
                                            className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">NNA bajo su tutela</span>
                                    {editMode ? (<input type="number" value={cantnna}
                                        onChange={(event) => {
                                            setCantnna(event.target.value.toUpperCase());
                                        }}
                                        className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                    ) : (
                                        <input type="number" value={cantnna}
                                            readOnly
                                            className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Familia</span>
                                    {editMode ? (<textarea style={{ height: "90px" }} value={familia}
                                        onChange={(event) => {
                                            setCantnna(event.target.value.toUpperCase());
                                        }}
                                        className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                    ) : (
                                        <textarea style={{ height: "90px" }} value={familia}
                                            readOnly
                                            className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                    )}
                                </div>
                                <Form.Label>*Ingresa nombre, parentesco, fecha nacimiento, escolaridad, situación discapacidad, nacionalidad y previsión para cada familiar</Form.Label>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <Form.Group controlId="formEventIdeaS">
                                        <Form.Label>Vivienda</Form.Label>
                                        {editMode ? (
                                            <Form.Control
                                                as="select"
                                                value={vivienda}
                                                onChange={(e) =>
                                                    setVivienda(e.target.value)
                                                }
                                            > <option value="default">Ver Opciones</option>
                                                <option value="Propia">PROPIA </option>
                                                <option value="Arrendada por usuarie">ARRENDADA POR USUARIE </option>
                                                <option value="Allegada"> ALLEGADA</option>
                                                <option value="Vivienda del Agresor">VIVIENDA DEL AGRESOR </option>
                                                <option value="Allegada en casa de familia del Agresor">ALLEGADA EN CASA DE FAMILIA DEL AGRESOR </option>
                                                <option value="Usufructuaria">USUFRUCTUARIA</option>
                                                <option value="otra">OTRA</option>
                                            </Form.Control>
                                        ) : (
                                            <Form.Control
                                                as="select"
                                                value={vivienda}
                                                disabled
                                            >
                                                <option value="default">Ver Opciones</option>
                                                <option value="Propia">PROPIA </option>
                                                <option value="Arrendada por usuarie">ARRENDADA POR USUARIE </option>
                                                <option value="Allegada"> ALLEGADA</option>
                                                <option value="Vivienda del Agresor">VIVIENDA DEL AGRESOR </option>
                                                <option value="Allegada en casa de familia del Agresor">ALLEGADA EN CASA DE FAMILIA DEL AGRESOR </option>
                                                <option value="Usufructuaria">USUFRUCTUARIA</option>
                                                <option value="otra">OTRA</option>
                                            </Form.Control>
                                        )}
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='Eco-mapa'>
                                <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>5. PARTICIPACIÓN SOCIAL Y COMUNIDAD:</b></div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Junta de Vecinos</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={pertenecejunta}
                                            onChange={(event) => {
                                                setPertenecejunta(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={pertenecejunta}
                                            readOnly
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Organizaciones para el adulto mayor</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={perteneceadultomayor}
                                            onChange={(event) => {
                                                setPerteneceadultomayor(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={perteneceadultomayor}
                                            readOnly
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Organizaciones para la mujer</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={pertenecemujer}
                                            onChange={(event) => {
                                                setPertenecemujer(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={pertenecemujer}
                                            readOnly
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Organizaciones religiosas </span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={pertenecereligion}
                                            onChange={(event) => {
                                                setPertenecereligion(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={pertenecereligion}
                                            readOnly
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Organizaciones deportivas</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={pertenecedeportiva}
                                            onChange={(event) => {
                                                setPertenecedeportiva(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={pertenecedeportiva}
                                            readOnly
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                                    <span className="input-group-text" id="basic-addon1">Organizaciones culturales</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={pertenececultural}
                                            onChange={(event) => {
                                                setPertenececultural(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={pertenececultural}
                                            readOnly
                                            className="form-control"
                                            placeholder="Nombre"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className='Area-de-atencion-requerida'>
                                <div className='subtitulo1' style={{ marginBottom: '10px' }}>
                                    <b>5. ÁREA DE ATENCIÓN REQUERIDA:</b>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Psicologia</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={psicologica}
                                            onChange={(event) => {
                                                setPsicologica(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Acompañamiento, Reparacion"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={psicologica}
                                            readOnly
                                            className="form-control"
                                            placeholder="Acompañamiento, Reparacion"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Legal</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={legal}
                                            onChange={(event) => {
                                                setLegal(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Pension, VIF, RDR, Cuidado Personal, Otro"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={legal}
                                            readOnly
                                            className="form-control"
                                            placeholder="Pension, VIF, RDR, Cuidado Personal, Otro"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Social</span>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            value={social}
                                            onChange={(event) => {
                                                setSocial(event.target.value.toUpperCase());
                                            }}
                                            className="form-control"
                                            placeholder="Habilidades Marentales, Acompañaniento, Talleres, Otros"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={social}
                                            readOnly
                                            className="form-control"
                                            placeholder="Habilidades Marentales, Acompañaniento, Talleres, Otros"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>))}

                <Tab value="2" eventKey="sesiones" title={<span style={{ color: 'black' }} className='sesionestab'>Registro de Sesiones</span>}>
                    <div className="boton-redactar1">

                        <Button variant="primary" onClick={() => setShowModal(true)}>
                            Crear Sesión
                        </Button>
                    </div>
                    <br />
                    <Modal
                        show={showModal}
                        onHide={() => {
                            setShowModal(false);
                            setSesionEditando(null);
                            limpiarCamposSesiones();
                            setExcedioLimite(false);
                        }}
                        size="xl"
                    >
                        <Modal.Header closeButton className="custom-modal-header">
                            <Modal.Title>{"Crear Sesión"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="custom-modal-body">
                            <div>
                                <label>RUT:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    value={rut}
                                    onChange={(e) => setRutSesiones(e.target.value)}
                                    readOnly
                                />
                            </div>
                            <br></br>
                            <div>
                                <label>Fecha:</label>
                                <input
                                    type="date"
                                    class="form-control"
                                    value={fechaSesiones}
                                    onChange={(e) => setFechaSesiones(e.target.value)}
                                />
                            </div>
                            <br></br>
                            <div>
                                <label>Descripcion de la Sesión (máximo 1500 caracteres) : </label>
                                <textarea
                                    className="form-control"
                               
                                    style={{ height: "200px", width: "100%" }} // Ajusta la altura y el ancho aquí
                                    value={descripcionSesiones}
                                    onChange={(e) => setDescripcionSesiones(e.target.value)}
                                />
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="custom-modal-footer">
                            <div className="custom-botones-cancelar">
                                <Button variant="secondary" onClick={() => setShowModal(false)}>
                                    Cancelar
                                </Button>
                            </div>
                            <div className="custom-botones-guardar">
                                <Button variant="primary" onClick={modoEdicion ? actualizarSesion : confirmarGuardarSesiones}>
                                    {sesionEditando !== null ? "Actualizar" : "Guardar"}
                                </Button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                    {sesiones.map((sesion) => (
                        <Card className="anuncio-card" style={{ height: '310px', marginBottom: '20px' }}>
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center', fontSize: '25px' }}><b>{formatDate(sesion.fecha) ? formatDate(sesion.fecha) : "Sin fecha"}</b>
                                    <Button style={{ backgroundColor: 'transparent', border: 'none', position: 'absolute', right: '0px', top: '10px' }} variant="danger" onClick={() => editarSesion(sesion)}>
                                        <box-icon type='solid' name='edit-alt' size='30px'></box-icon>
                                    </Button>
                                </Card.Title>
                                <Card.Text style={{ height: '125px' }}>{sesion.descripcion}</Card.Text>
                                <br></br>
                            </Card.Body>
                        </Card>
                    ))}
                </Tab>
                {riesgos.map((riesgo) => (
                    <Tab eventKey="pauta" title={<span style={{ color: 'black' }} className='riesgotab'>Pauta de Riesgo</span>}>
                        
                        <div className="botones-container">
                        <div className="editarb">
                            {!editMode ? (
                                <div className="editarb">
                                    <button type="button" onClick={() => { editarPautaR(riesgo); }} className="btn btn">Editar</button>
                                </div>
                            ) : null}
                            </div>
                            {/* Botón "Guardar" para guardar los cambios */}
                            <div className='derecha'>
                                <div className="editarguardar">
                                    {editMode && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                actualizarPauta();
                                                showEditarRiesgoOff()
                                            }}
                                            className="btn btn-primary">
                                            Guardar
                                        </button>
                                    )}
                            </div>

                                {editMode && (
                                    <div className="editaroff">
                                        <button type="button" onClick={() => { showEditarRiesgoOff(); getUsuario(id); }} className="btn btn">
                                            Cancelar
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Total Social*/}

                        <br />
                        <div className='ContenedorTablaR'>
                            <Table className='TablaRiesgoTotal' responsive="md" >

                                <thead>
                                    <tr>
                                        <th class="tg-0pky" className='tituloriesgoTot' colSpan="6">Totales de la Pauta (para visualizar los totales se deben guardar los cambios)</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th class="tg-0lax">Total Social (máx 22)</th>
                                        <th class="tg-0lax">Total Psicológico (más 20)</th>
                                        <th class="tg-0lax">Total Legal (máx 18)</th>
                                        <th class="tg-0lax">Total Transversal (máx 24)</th>
                                        <th class="tg-0lax">Total Pauta (máx 84)</th>
                                        <th class="tg-0lax">Prioridad</th>

                                    </tr>

                                    <tr>
                                        <th class="tg-0lax" className="numerotablatot" >
                                            {riesgo.totalsocial}
                                        </th>
                                        <th class="tg-0lax" className="numerotablatot">
                                            {riesgo.totalpsicologico}
                                        </th>
                                        <th class="tg-0lax" className="numerotablatot">
                                            {riesgo.totallegal}
                                        </th>
                                        <th class="tg-0lax" className="numerotablatot">
                                            {riesgo.totaltransversal}
                                        </th>
                                        <th class="tg-0lax" className="numerotablatot">
                                            {riesgo.totalpauta}
                                        </th>
                                        <th class="tg-0lax" className="numerotablatot">
                                            {clasificarPrioridad(riesgo.totalpauta).toUpperCase()}
                                        </th>
                                    </tr>
                                </tbody>

                            </Table>
                        </div>
                        <Table className='TablaRiesgo' responsive="md" >

                            <thead>
                                <tr>
                                    <th class="tg-0pky" className='tituloriesgo' colSpan="3">SOCIAL: Redes con las que cuenta la usuaria, situación laboral, habitacional y económica.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla" >Migrante</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={migrante}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setMigrante(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"

                                                value={riesgo.migrante}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Barrera linguistica / No habla español</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={barreralinguistica}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setBarreralinguistica(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.barreralinguistica}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Indocumentade</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={indocumentado}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setIndocumentado(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.indocumentado}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sin red de apoyo familiar</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={sinredapoyo}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setSinredapoyo(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sinredapoyo}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sin red de amigues, compañeres u otros contactos</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={sinredamigues}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setSinredamigues(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sinredamigues}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">No visibilizade por otra red o programa</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={novisibilidad}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setNovisibilidad(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.novisibilidad}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sin trabajo / Trabajo precario / Ilegal</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={sintrabajo}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setSintrabajo(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sintrabajo}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Vive con el agresor/a</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={viveconagresor}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setViveconagresor(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.viveconagresor}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sin dispositivos propios para la conectividad </td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={sindispositivos}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setSindispositivos(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sindispositivos}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Aislamiento producto de la violencia</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={aislamiento}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setAislamiento(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.aislamiento}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Depende económicamente del agresor (Sus ingresos no son suficientes para mantenerse sola/o)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={dependeeconomicamente}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setDependeeconomicamente(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.dependeeconomicamente}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">No cuenta cuenta con hogar de llegada ó alternativo</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={nohogar}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setNohogar(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.nohogar}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Hijes en común con el agresor</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={hijesencomun}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setHijesencomun(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.hijesencomun}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Niñes a su cargo</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" value={niñesacargo}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setNiñesacargo(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.niñesacargo}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>

                            </tbody>

                        </Table>
                        <Table className='TablaRiesgo' responsive="lg">
                            <thead>
                                <tr>
                                    <th class="tg-0pky" className='tituloriesgo' colSpan="3">ÁREA PSICOLÓGICA: Síntomas psíquicos y físicos que se observan crónicos o que han ido en aumento. Sufrimiento y malestar que ya está más allá, posiblemente propiciados por la violencia.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla"> Enfermedad base (Que se agrave o agrave la situación de la persona)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={enfermedadbase}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setEnfermedadbase(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.enfermedadbase}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Intentos suicidas</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={intentoss}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setIntentoss(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.intentoss}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Planeación suicida</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={planeacions}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setPlaneacions(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.planeacions}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Ideación suicida</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={ideacions}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setIdeacions(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.ideacions}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Abuso de sustancias </td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={abusosustancia}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setAbusosustancia(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.abusosustancia}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Crisis ansiosa (crisis de angustia, crisis de pánico)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={crisisansiosa}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setCrisisansiosa(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.crisisansiosa}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla"> Insomnio (Dificultad para dormir que le perjudique en la vida diaria)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={insomnio}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setInsomnio(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.insomnio}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Trastornos alimenticios (bajas y subidas de peso graves, anorexia, bulimia, etc)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={tca}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setTca(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.tca}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sintomatología Trauma (Pesadillas, Flashback, agorafobia, miedo irracional) </td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={sintomatologiatrauma}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setSintomatologiatrauma(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sintomatologiatrauma}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sin tratamiento (Enfermedad física o trastorno mental sin tratamiento)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={sintratamiento}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setSintratamiento(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sintratamiento}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Psicosomatización (Presenta síntomas físicos que surgen del trauma)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={psicosomatizacion}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setPsicosomatizacion(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.psicosomatizacion}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Agresor consumidor (agresor consume sustancias de manera problemática)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={agresorconsumidor}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setAgresorconsumidor(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.agresorconsumidor}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Trastorno agresor/a (agresor/a con trastorno de salud mental que genera un riesgo)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={trastornoagresor}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setTrastornoagresor(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.trastornoagresor}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>

                            </tbody>
                        </Table>
                        <Table className='TablaRiesgo' responsive="lg">
                            <thead>
                                <tr>
                                    <th class="tg-0pky" className='tituloriesgo' colSpan="3">LEGAL: Situaciones de índole judicial que puedan implicar un mayor riesgo para la persona.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Habitualidad agresión</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={habitualidadagresion}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setHabitualidadagresion(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.habitualidadagresion}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Realizó denuncia que implica riesgo</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={realizodenuncia}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setRealizodenuncia(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.realizodenuncia}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">No denuncia y eso implica riesgo</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={nodenuncia}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setNodenuncia(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.nodenuncia}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Desistimiento denuncia</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={desistimientodenuncia}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setDesistimientodenuncia(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.desistimientodenuncia}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sin abogade (No cuenta con abogade que le represente cuando requiere)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={sinabogade}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setSinabogade(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sinabogade}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Antecedentes agresor (el agresor cuenta con antecedentes penales o de VIF)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={antecedentesagresor}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setAntecedentesagresor(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.antecedentesagresor}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Agresor armas (Agresor tiene acceso a armas)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={agresorarmas}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setAgresorarmas(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.agresorarmas}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Sin Cautelares (No cuenta con medidas de protección activas)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={sincautelares}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setSincautelares(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.sincautelares}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Desconocimiento institucional (Desconoce dónde acudir para pedir ayuda, sin conocimiento en herramientas tecnológicas, sin clave única)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={desinstitucional}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setDesinstitucional(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.desinstitucional}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Violencia Institucional ( La persona es violentada o invisibilizada por parte de las instituciones)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={violenciainst}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setViolenciainst(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.violenciainst}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Causas VIF anteriores (Causas anteriores de VIF con agresore u otre)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={causavif}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setCausavif(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.causavif}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Desacato (se rompen las medidas de protección por parte del/ la agresor)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={desacato}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setDesacato(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.desacato}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>

                            </tbody>
                        </Table>
                        <Table className='TablaRiesgo' responsive="lg">
                            <thead>
                                <tr>
                                    <th class="tg-0pky" className='tituloriesgo' colSpan="3">ASPECTOS TRANSVERSALES:  Cómo se dan, hace cuánto tiempo. ¿Han ido en aumento? ¿Por qué consulta ahora? ¿Cuándo se dan las agresiones? ¿En qué situaciones? ¿Qué pasa antes, después? ¿Hay personas que tienen conocimiento de que se vive esta situación?  ¿Ha realizado constatación de lesiones?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Embarazo actual o reciente</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={embarazo}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setEmbarazo(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.embarazo}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Amenazas actuales (Ha recibido amenazas verbales, amedrentamiento físico)</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={amenazasactuales}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setAmenazasactuales(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.amenazasactuales}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">NNA víctima de VIF (NNA a cargo de la víctima de VIF)</td>
                                    <th class="tg-0lax" className="numerotabla">1</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={nnavictimasvif}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-1]*$/)) {
                                                        setNnavictimasvif(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.nnavictimasvif}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Violencia psicológica</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={violenciapsicologica}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setViolenciapsicologica(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.violenciapsicologica}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Violencia física</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={violenciafisica}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setViolenciafisica(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.violenciafisica}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Violencia sexual</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={violenciasexual}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setViolenciasexual(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.violenciafisica}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Violencia económica</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={violenciaeco}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setViolenciaeco(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.violenciaeco}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Más de un agresor</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={masagresores}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setMasagresores(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.masagresores}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Tercera Edad</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={terceraedad}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setTerceraedad(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.terceraedad}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Adolescente</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={adolescente}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setAdolescente(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.adolescente}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"

                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Situación de discapacidad</td>
                                    <th class="tg-0lax" className="numerotabla">2</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={situaciondiscapacidad}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-2]*$/)) {
                                                        setSituaciondiscapacidad(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.situaciondiscapacidad}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-0lax" className="titulostabla">Autopercepción riesgo Vital </td>
                                    <th class="tg-0lax" className="numerotabla">3</th>
                                    <th class="tg-0lax" className="numeritosTabla no-arrow">

                                        {editMode ? (
                                            <input type="number" maxLength={10} value={autopercepcion}
                                                onChange={(event) => {
                                                    let value = event.target.value.slice(0, 1);
                                                    if (value.match(/^[0-3]*$/)) {
                                                        setAutopercepcion(value);
                                                    }
                                                }}
                                                className="inputTabla no-arrow" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} />
                                        ) : (
                                            <input
                                                type="number"
                                                maxLength={9}
                                                value={riesgo.autopercepcion}
                                                readOnly
                                                className="inputTabla no-arrow"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onWheel={(e) => e.target.blur()}
                                            />
                                        )}

                                    </th>
                                </tr>

                            </tbody>
                        </Table>





                    </Tab>))}

            </Tabs>
        </div>
    );
};
