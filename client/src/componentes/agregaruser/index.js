import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../../index.css';

export const AgregarUsuario = () => {

    const [riesgos, setRiesgos] = useState([]);

    const [nombre, setNombre] = useState(""); /* NOMBRE */
    const [rut, setRut] = useState(""); /* RUT  */
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
    const [ingresostotales, setIngresostotales] = useState("")
    const [dependeeco, setDependeeco] = useState(""); /* DEPENDE ECONÓMICAMENTE (SI O NO) VARCHAR */
    const [dependequien, setDependequien] = useState(""); /* DE QUIÉN DEPENDE (SELECCIÓN) VARCHAR */
    const [dependedelagresor, setDependedelagresor] = useState("") /* EL MANTENEDOR ECÓNOMICO ES EL AGRESOR? (SI O NO) VARCHAR */
    const [viffamilia, setViffamilia] = useState("") /* ANTECENDENTES VIF EN LA FAMILIA (SI O NO) VARCHAR */
    const [vifniñez, setVifniñez] = useState("") /* VIF EN LA NIÑEZ (SI O NO) VARCHAR */
    const [vifporotro, setVifporotro] = useState("") /* VIF POR OTRO AGRESOR (SI O NO) VARCHAR */
    const [otroquien, setOtroquien] = useState("") /* QUIÉN ES EL OTRO AGRESOR? VARCHAR*/
    const [tipoviolencia, setTipoviolencia] = useState("") /* TIPO VIOLENCIA (SELECCIÓN MULTIPLE???) VARCHAR */
    const [primerviolencia, setPrimerviolencia] = useState("") /* PRIMER EPISODIO DE VIF VARCHAR */
    const [ultimoviolencia, setUltimoviolencia] = useState("") /* ULTIMO EPISODIO DE VIF VARCHAR */
    const [personashogar, setPersonashogar] = useState("") /* PERONAS QUE HABITAN EL HOGAR INT */
    const [canthijes, setCanthijes] = useState("") /* CANTIDAD DE HIJOS INT */
    const [hijesagresor, setHijesagresor] = useState("") /* HIJOS CON EL AGRESOR INT */
    const [cantnna, setCantnna] = useState("") /* CANTIDAD DE NNA BAJO SU TUTELA INT */
    const [vivienda, setVivienda] = useState("") /* VIVIENDA (SELECCIÓN) VARCHAR */


    const [pertenecejunta, setPertenecejunta] = useState("") /* PERTENECE A: JUNTA DE VECINOS VARCHAR */
    const [perteneceadultomayor, setPerteneceadultomayor] = useState("") /* PERTENECE A: ORGANIZACIONES PARA EL ADULTO MAYOR VARCHAR */
    const [pertenecemujer, setPertenecemujer] = useState("") /* PERTENECE A: ORGANIZACIÓN PARA LA MUJER VARCHAR */
    const [pertenecereligion, setPertenecereligion] = useState("") /* PERTENECE A: ORGANIZACIONES RELIGIOSAS VARCHAR */
    const [pertenecedeportiva, setPertenecedeportiva] = useState("") /* PERTENECE A: ORGANIZACIONES DEPORTIVAS VARCHAR */
    const [pertenececultural, setPertenececultural] = useState("") /* PERTENECE A: ORGANIZACIONES CULTURALES VARCHAR */
    const [perteneceotra, setPerteneceotra] = useState("") /* PERTENECE A: OTRA VARCHAR */
    const [psicologica, setPsicologica] = useState("") /* TIPO DE ATENCIÓN PSICOLÓGICA VARCHAR */
    const [legal, setLegal] = useState("") /* TIPO DE ATENCIÓN LEGAL VARCHAR */
    const [social, setSocial] = useState("") /* TIPO DE ATENCIÓN SOCIAL VARCHAR */
    const [listaespera, setListaespera] = useState("") /* VIVIENDA (SELECCIÓN) VARCHAR */
    const [familia, setFamilia] = useState("") /* VIVIENDA (SELECCIÓN) VARCHAR */




    const [id, setId] = useState();
    const [editar, setEditar] = useState(false);
    const [empleadosList, setEmpleados] = useState([]);

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
    const add = () => {
        Axios.post("http://localhost:3001/create", {
            nombre: nombre,
            rut: rut,
            profesional: profesional,
            prioridad: 'PENDIENTE',
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
            getEmpleados()
            limpiarCampos();
            Swal.fire({
                title: "<strong>Registro exitoso!!</strong>",
                html: "<i>El empleado <strong>" + nombre + "</strong> fue registrado con éxito!!!</i>",
                icon: 'success',
                timer: 3500
            })
        });

        Axios.post("http://localhost:3001/riesgo", {
            id: id,
            migrante: 0,
            barreralinguistica: 0,
            indocumentado: 0,
            sinredapoyo: 0,
            sinredamigues: 0,
            novisibilidad: 0,
            sintrabajo: 0,
            viveconagresor: 0,
            sindispositivos: 0,
            aislamiento: 0,
            dependeeconomicamente: 0,
            nohogar: 0,
            hijesencomun: 0,
            niñesacargo: 0,
            totalsocial: 0,
            enfermedadbase: 0,
            intentoss: 0,
            planeacions: 0,
            ideacions: 0,
            abusosustancia: 0,
            crisisansiosa: 0,
            insomnio: 0,
            tca: 0,
            sintomatologiatrauma: 0,
            sintratamiento: 0,
            psicosomatizacion: 0,
            agresorconsumidor: 0,
            trastornoagresor: 0,
            totalpsicologico: 0,
            habitualidadagresion: 0,
            realizodenuncia: 0,
            nodenuncia: 0,
            desistimientodenuncia: 0,
            sinabogade: 0,
            antecedentesagresor: 0,
            agresorarmas: 0,
            sincautelares: 0,
            desinstitucional: 0,
            violenciainst: 0,
            causavif: 0,
            desacato: 0,
            totallegal: 0,
            embarazo: 0,
            amenazasactuales: 0,
            nnavictimasvif: 0,
            violenciapsicologica: 0,
            violenciafisica: 0,
            violenciasexual: 0,
            violenciaeco: 0,
            masagresores: 0,
            terceraedad: 0,
            adolescente: 0,
            situaciondiscapacidad: 0,
            autopercepcion: 0,
            totaltransversal: 0,
            totalpauta: 0,
            rut_usuario: rut,
            prio: 0
        })
            .then((response) => {
                setRiesgos([...riesgos, response.data]);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const limpiarCampos = () => {
        setNombre("");
        setRut("");
        setProfesional("");
        setPrioridad("");
        setEdad("");
        setNacionalidad("");
        setNacimiento("");
        setCivil("");
        setDireccion("");
        setEducacion("");
        setTelefono("");
        setCorreo("");
        setPareja("");
        setVinculoagresor("");
        setSistemasalud("");
        setSistemasaludDOS("");
        setFisica("");
        setSaludmental("");
        setTratamiento("");
        setCualfarmaco("");
        setDrogas("");
        setIntentoS("");
        setideasS("");
        setProfesion("");
        setRemunerado("");
        setTrabaja("");
        setDondetrabaja("");
        setHorarios("");
        setIngresossalario("");
        setIngresosjubilacion("");
        setIngresossubsidio("");
        setIngresospension("");
        setIngresosotros("");
        setIngresostotales("");
        setDependeeco("");
        setDependequien("");
        setDependedelagresor("");
        setViffamilia("");
        setVifniñez("");

        setVifporotro("");

        setOtroquien("");
        setTipoviolencia("");
        setPrimerviolencia("");
        setUltimoviolencia("");
        setPersonashogar("");
        setCanthijes("");
        setHijesagresor("");
        setCantnna("");
        setVivienda("");
        setPertenecejunta("");
        setPerteneceadultomayor("");
        setPertenecemujer("");
        setPertenecereligion("");
        setPertenecedeportiva("");
        setPertenececultural("");
        setPerteneceotra("");
        setPsicologica("");
        setLegal("");
        setSocial("");
        setListaespera("");
        setFamilia("");



        setEditar(false);
    }

    const getEmpleados = () => {
        Axios.get("http://localhost:3001/usuarios").then((response) => {
            setEmpleados(response.data);
        });
    }


    const handleBlur = (event) => {
        const value = event.target.value;
        const rutRegex = /^[0-9]{7,8}-[0-9kK]{1}$/;
        if (value.trim() !== "" && !rutRegex.test(value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El RUT debe tener el formato 12345678-9',
            });
        }
    };


    const sumarIngresos = () => {
        const total =
            0 +
            parseFloat(ingresossalario) +
            parseFloat(ingresosjubilacion) +
            parseFloat(ingresossubsidio) +
            parseFloat(ingresospension) +
            parseFloat(ingresosotros);
        setIngresostotales(total);
    };



    return (
        <div className="container1" class='container'  >
            <div className='agregarpacientes1'  >
                <div className='titulopaciente'><font size="+3"><b>FICHA DE USUARIE</b></font></div>
                <br></br>

                <div className='antencedentes1'>
                    <Form.Label id="basic-addon1"> Se encuentra en lista de espera: </Form.Label><br></br>

                    {listaesperaEleccion.map((listaesperaOption, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`listaesperaOption${index}`}
                                value={listaesperaOption.valor}
                                checked={listaespera === listaesperaOption.valor}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setListaespera(e.target.value.toUpperCase());
                                    }
                                }}
                            />
                            <label className="form-check-label" htmlFor={`listaesperaOPtion${index}`}>
                                {listaesperaOption.nombre}
                            </label>
                        </div>
                    ))}
                    <br /><br />
                    <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>1. ANTECEDENTES DEL USUARIE:</b></div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                        <input type="text" value={nombre}
                            onChange={(event) => {
                                setNombre(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    {/* RUT */}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Rut</span>
                        <input
                            type="text"
                            value={rut}
                            onChange={(event) => {
                                let value = event.target.value;
                                const regex = /^[0-9kK-]*$/;
                                if (regex.test(value)) {
                                    if (value.length > 10) {
                                        value = value.slice(0, 10);
                                    } else if (value.length === 9 && value.charAt(8) !== '-') {
                                        value = value.slice(0, 8) + '-' + value.slice(8);
                                    }
                                    setRut(value);
                                }
                            }}
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="Ingresar Rut (sin punto, con guión)"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Profesional</span>
                        <input type="text" value={profesional}
                            onChange={(event) => {
                                setProfesional(event.target.value.toUpperCase());
                            }}

                            className="form-control" placeholder="Profesional que lo ingresa" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text no-arrow" id="basic-addon1">Edad</span>
                        <input type="number" value={edad}
                            onChange={(event) => {
                                setEdad(event.target.value.slice(0,3));
                            }}

                            className="form-control no-arrow" placeholder="Ingresar Edad" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nacionalidad</span>
                        <input type="text" value={nacionalidad}
                            onChange={(event) => {
                                setNacionalidad(event.target.value.toUpperCase());
                            }}

                            className="form-control" placeholder="Ingresar Nacionalidad" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">

                        <span className="input-group-text" id="basic-addon1">Fecha de Nacimiento</span>

                        <input type='date' value={nacimiento}
                            onChange={(event) => {
                                setNacimiento(event.target.value);
                            }}


                            className="form-control" placeholder="dd-mm-aaaa" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Estado Civil</span>
                        <input type="text" value={civil}
                            onChange={(event) => {
                                setCivil(event.target.value.toUpperCase());
                            }}

                            className="form-control" placeholder="Ingresar estado civil" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Direccion</span>
                        <input type="text" value={direccion}
                            onChange={(event) => {
                                setDireccion(event.target.value.toUpperCase());
                            }}

                            className="form-control" placeholder="Ingresar dirección" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Educacion</span>
                        <input type="text" value={educacion}
                            onChange={(event) => {
                                setEducacion(event.target.value.toUpperCase());
                            }}

                            className="form-control" placeholder="Ingresar educacion" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text no-arrow" id="basic-addon1">Telefono</span>
                        <input type="number" value={telefono}
                            onChange={(event) => {
                                setTelefono(event.target.value.slice(0, 9));
                            }}

                            className="form-control no-arrow" placeholder="Ingresar Telefono" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Correo</span>
                        <input type="text" value={correo}
                            onChange={(event) => {
                                setCorreo(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Ingresar Correo" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                </div>
                <div className="antecedentes1.1">
                    <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>1.1 REGISTRO ANTECEDENTES USUARIE:</b></div>


                    <Form.Label id="basic-addon1"> Estado de pareja actual: </Form.Label><br></br>

                    {parejaEleccion.map((parejaOption, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`parejaOption${index}`}
                                value={parejaOption.valor}
                                checked={pareja === parejaOption.valor}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setPareja(e.target.value.toUpperCase());
                                    }
                                }}
                            />
                            <label className="form-check-label" htmlFor={`parejaOption${index}`}>
                                {parejaOption.nombre}
                            </label>
                        </div>
                    ))}


                    <div className="input-group mb-3">
                        <Form.Group controlId="formEventPareja">
                            <Form.Label style={{ marginTop: '15px' }}>Vínculo con el Agresor:</Form.Label>
                            <Form.Control
                                as="select"
                                value={vinculoagresor}
                                onChange={(e) =>
                                    setVinculoagresor(e.target.value)
                                }
                            >   <option value="default">Ver Opciones</option>
                                <option value="conyuge">CÓNYUGE</option>
                                <option value="exconyuge">EX CÓNYUGE</option>
                                <option value="excoviviente">EX CONVIVIENTE</option>
                                <option value="pololo">POLOLO</option>
                                <option value="expololo">EX POLOLO</option>
                                <option value="padreijo">PADRE DE HIJO/A EN COMÚN</option>
                                <option value="otrorelacn">CONVIVIENTE</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <div className='salud'>
                    <div className='salud1' style={{ marginBottom: '10px' }}><b>2. SALUD </b></div>
                    <div className="input-group mb-3">
                        <Form.Group controlId="formEventSalud">
                            <Form.Label>Sistema de Salud:</Form.Label>
                            <Form.Control
                                as="select"
                                value={sistemasalud}
                                onChange={(e) =>
                                    setSistemasalud(e.target.value)
                                }
                            > <option value="default">Ver Opciones</option>
                                <option value="Isapre">ISAPRE</option>
                                <option value="Fonasa">FONASA</option>
                                <option value="Ninguno">NINGUNA</option>

                            </Form.Control>
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
                                    if (e.target.checked) {
                                        setSistemasaludDOS(e.target.value);
                                    }
                                }}
                            />
                            <label className="form-check-label" htmlFor={`sistemaOption${index}`}>
                                {sistemaOption.nombre}
                            </label>
                        </div>
                    ))}




                    <div className='salud2' style={{ marginBottom: '10px', marginTop: '20px' }}><b>2.1 ENFERMEDADES DIAGNOSTICADAS</b></div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Física (especifique):</span>
                        <textarea value={fisica}
                            onChange={(event) => {
                                setFisica(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="En caso de no haber,  ingresar: nada" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Salud Mental:</span>
                        <textarea value={saludmental}
                            onChange={(event) => {
                                setSaludmental(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Señale diagnóstico asociado" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    if (e.target.checked) {
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
                                    if (e.target.checked) {
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
                        <textarea value={cualfarmaco}
                            onChange={(event) => {
                                setCualfarmaco(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="¿Cuáles? (si no consume, ingresar: nada)" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Drogas (Alcohol, Marihuana, etc):</span>

                        <textarea value={drogas}
                            onChange={(event) => {
                                setDrogas(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="¿Cuáles? (si no consume, ingresar: nada)" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    if (e.target.checked) {
                                        setIntentoS(e.target.value.toUpperCase());

                                    }
                                }}
                            />
                            <label className="form-check-label" htmlFor={`intentoSOption${index}`}>
                                {intentoSOption.nombre}
                            </label>
                        </div>
                    ))}
                    <br />
                    <Form.Label>*No preguntar directamente, usar criterio profesional</Form.Label><br />
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <Form.Group controlId="formEventIdeaS">
                            <Form.Label>Tipo de Acción:</Form.Label>
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

                        </Form.Group><br />

                    </div>
                </div>
                <div className='laboral'>
                    <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>3. SITUACIÓN LABORAL:</b></div>
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Profesión u Oficio:</span>

                        <input type="text" value={profesion}
                            onChange={(event) => {
                                setProfesion(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Ingrese ocupación" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    if (e.target.checked) {
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
                        </Form.Group>
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">¿Dónde Trabaja?</span>

                        <input type="text" value={dondetrabaja}
                            onChange={(event) => {
                                setDondetrabaja(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Ingrese ocupación" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Horario de Trabajo</span>

                        <input type="text" value={horarios}
                            onChange={(event) => {
                                setHorarios(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="¿Cuál es su horario de trabajo?" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    {/* Salario */}
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text " id="basic-addon1">Salario</span>

                        <input type="number" value={ingresossalario}
                            onChange={(event) => {
                                setIngresossalario(event.target.value);
                                sumarIngresos();

                            }}
                            className="form-control no-arrow" placeholder="¿Cuál es su salario?" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} onBlur={sumarIngresos} />
                    </div>

                    {/* Jubilación */}
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Jubilación</span>

                        <input type="number" value={ingresosjubilacion}
                            onChange={(event) => {
                                setIngresosjubilacion(event.target.value);
                                sumarIngresos();
                            }}
                            className="form-control no-arrow" placeholder="¿Cuánto es su jubilación?" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} onBlur={sumarIngresos} />
                    </div>

                    {/* Subsidio */}
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Subsidio</span>

                        <input type="number" value={ingresossubsidio}
                            onChange={(event) => {
                                setIngresossubsidio(event.target.value);
                                sumarIngresos();
                            }}
                            className="form-control no-arrow" placeholder="¿Cuál es su Subsidio?" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} onBlur={sumarIngresos} />
                    </div>

                    {/* Pensiones */}
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Pensiones</span>

                        <input type="number" value={ingresospension}
                            onChange={(event) => {
                                setIngresospension(event.target.value);
                                sumarIngresos();
                            }}
                            className="form-control no-arrow" placeholder="¿Cuál es su Pensiones?" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} onBlur={sumarIngresos} />
                    </div>


                    {/* Otros Ingresos */}
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Otros Ingresos</span>

                        <input type="number" value={ingresosotros}
                            onChange={(event) => {
                                setIngresosotros(event.target.value);
                                sumarIngresos();
                            }}
                            className="form-control no-arrow" placeholder="¿Cuáles son sus Otros Ingreso?" aria-label="Username" aria-describedby="basic-addon1" onWheel={(e) => e.target.blur()} onBlur={sumarIngresos} />
                    </div>

                    {/* TOTAL */}
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">TOTAL</span>
                        <input
                            type="number"
                            value={ingresostotales}
                            onChange={(event) => {
                                setIngresostotales(event.target.value);
                            }}
                            className="form-control"
                            placeholder="TOTAL"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onWheel={(e) => e.target.blur()}

                            readOnly
                        />
                    </div>
                </div>

                {/* 3.1 Situación Económica  */}

                <div className='laboral2' style={{ marginBottom: '10px', marginTop: '20px' }}><b>3.1 SITUACIÓN ECONÓMICA</b><br />
                    <br></br>
                    <Form.Label id="basic-addon1"> ¿Depende Económicamente?  </Form.Label>
                    <br></br>
                    {dependeecoEleccion.map((dependeecoOption, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`dependeecoOption${index}`}
                                value={dependeecoOption.valor}
                                checked={dependeeco === dependeecoOption.valor}
                                onChange={(e) => {
                                    if (e.target.checked) {
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
                        </Form.Group>
                    </div>
                    <Form.Label id="basic-addon1"> ¿Su mantenedor económico es también su agresor? </Form.Label>
                    <br />
                    {dependedelagresorEleccion.map((dependedelagresorOption, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`dependelagresorOption${index}`}
                                value={dependedelagresorOption.valor}
                                checked={dependedelagresor === dependedelagresorOption.valor}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setDependedelagresor(e.target.value.toUpperCase());
                                    }
                                }}
                            />
                            <label className="form-check-label" htmlFor={`dependedelagresorOption${index}`}>
                                {dependedelagresorOption.nombre}
                            </label>
                        </div>
                    ))}
                </div>


                <div className='laboral2' style={{ marginBottom: '10px', marginTop: '20px' }}><b>4. CONTEXTO FAMILIAR DE ORIGEN USUARIE</b><br /><br />
                    <Form.Label id="basic-addon1"> Antecedentes VIF de la familia </Form.Label><br />
                    {viffamiliaEleccion.map((viffamiliarOption, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`viffamiliarOption${index}`}
                                value={viffamiliarOption.valor}
                                checked={viffamilia === viffamiliarOption.valor}
                                onChange={(e) => {
                                    if (e.target.checked) {
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

                    <Form.Label id="basic-addon1" > ¿Ha sufrido maltrato en la niñez? </Form.Label><br />

                    {vifniñezEleccion.map((vifniñezOption, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`vifniñezOption${index}`}
                                value={vifniñezOption.valor}
                                checked={vifniñez === vifniñezOption.valor}
                                onChange={(e) => {
                                    if (e.target.checked) {
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
                    <Form.Label id="basic-addon1" > ¿Ha sufrido VIF por otro agresor? </Form.Label><br />

                    {vifporotroEleccion.map((vifporotroOption, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`vifporotroOption${index}`}
                                value={vifporotroOption.valor}
                                checked={vifporotro === vifporotroOption.valor}
                                onChange={(e) => {
                                    if (e.target.checked) {
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

                        <input type="text" value={otroquien}
                            onChange={(event) => {
                                setOtroquien(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Indicar la persona" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>



                    <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                    <Form.Label id="basic-addon1" > Tipo de Violencia </Form.Label>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Tipo</span>

                        <input type="text" value={tipoviolencia}
                            onChange={(event) => {
                                setTipoviolencia(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Fisica, Psicologica, Sexual, Economica" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                    <Form.Label id="basic-addon1" > Primer episodio de Violencia </Form.Label>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Primer episodio</span>

                        <textarea value={primerviolencia}
                            onChange={(event) => {
                                setPrimerviolencia(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Relato" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                    <Form.Label id="basic-addon1" > Último episodio de VIF </Form.Label>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Último episodio</span>

                        <textarea value={ultimoviolencia}
                            onChange={(event) => {
                                setUltimoviolencia(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Relato" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>


                <div className='socio-familiar'>
                    <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>4.2 Composición Familiar:</b></div>



                    <div className='laboral2' style={{ marginBottom: '10px', marginTop: '10px' }}><b></b></div>
                    <Form.Label id="basic-addon1" > Antecedentes Familiares </Form.Label><br></br>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Personas que habitan el hogar</span>

                        <input type="number" value={personashogar}
                            onChange={(event) => {
                                setPersonashogar(event.target.value.toUpperCase());
                            }}
                            className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Hijes</span>

                        <input type="number" value={canthijes}
                            onChange={(event) => {
                                setCanthijes(event.target.value.toUpperCase());
                            }}
                            className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Hijes con el agresor</span>

                        <input type="number" value={hijesagresor}
                            onChange={(event) => {
                                setHijesagresor(event.target.value.toUpperCase());
                            }}
                            className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">NNA bajo su tutela</span>

                        <input type="number" value={cantnna}
                            onChange={(event) => {
                                setCantnna(event.target.value.toUpperCase());
                            }}
                            className="form-control no-arrow" placeholder="Especificar cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Identificación Familiar*</span>

                        <textarea value={familia} style={{ height: "90px" }}
                            onChange={(event) => {
                                setFamilia(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Ingrese familiares" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <Form.Label>*Ingresar nombre, parentesco, fecha nacimiento, escolaridad, situación discapacidad, nacionalidad y previsión para cada familiar</Form.Label><br />
                                
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <Form.Group controlId="formEventIdeaS">
                            <Form.Label>Vivienda</Form.Label>
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
                        </Form.Group>
                    </div>

                    


                </div>

                <div className='Eco-mapa'>
                    <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>5. PARTICIPACIÓN SOCIAL Y COMUNIDAD:</b></div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Junta de Vecinos</span>
                        <input type="text" value={pertenecejunta}
                            onChange={(event) => {
                                setPertenecejunta(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Organizaciones para el adulto mayor</span>
                        <input type="text" value={perteneceadultomayor}
                            onChange={(event) => {
                                setPerteneceadultomayor(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Organizaciones para la mujer</span>
                        <input type="text" value={pertenecemujer}
                            onChange={(event) => {
                                setPertenecemujer(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Organizaciones religiosas </span>
                        <input type="text" value={pertenecereligion}
                            onChange={(event) => {
                                setPertenecereligion(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Organizaciones deportivas</span>
                        <input type="text" value={pertenecedeportiva}
                            onChange={(event) => {
                                setPertenecedeportiva(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Organizaciones culturales</span>
                        <input type="text" value={pertenececultural}
                            onChange={(event) => {
                                setPertenececultural(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Otra: </span>
                        <input type="text" value={perteneceotra}
                            onChange={(event) => {
                                setPerteneceotra(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                </div>

                <div className='Area-de-atencion-requerida'>

                    <div className='subtitulo1' style={{ marginBottom: '10px' }}><b>5. ÁREA DE ATENCIÓN REQUERIDA:</b></div>
                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Psicologia</span>
                        <input type="text" value={psicologica}
                            onChange={(event) => {
                                setPsicologica(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Acompañamiento, Reparacion" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Legal</span>
                        <input type="text" value={legal}
                            onChange={(event) => {
                                setLegal(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder=" Pension, VIF, RDR, Cuidado Personal, Otro" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3" style={{ marginTop: '10px' }}>
                        <span className="input-group-text" id="basic-addon1">Social</span>
                        <input type="text" value={social}
                            onChange={(event) => {
                                setSocial(event.target.value.toUpperCase());
                            }}
                            className="form-control" placeholder="Habilidades Marentales, Acompañaniento, Talleres, Otros" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>






            </div>



            <ul>
            </ul>
            <br></br>
            <div className='modalboton22b1'><Link to={`/todopacientes`} ><button class="btn btn" type="button" onClick={add}>Guardar</button></Link></div>
        </div>




    );
};