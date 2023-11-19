import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import esLocale from '@fullcalendar/core/locales/es';
import Swal from 'sweetalert2';

export const Calendario = () => {
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [eventData, setEventData] = useState({
    title: "",
    color: "#3788D8",
    start: "",
    end: "",
  });
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {

    cargarEventosDesdeBaseDeDatos();
  }, []);

  const cargarEventosDesdeBaseDeDatos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/calendario");
      const eventosDesdeBaseDeDatos = response.data.map((evento) => ({
        id: evento.id,
        title: evento.titulo,
        start: evento.fecha_inicio,
        end: evento.fecha_fin,
        backgroundColor: evento.color,
      }));
      setEvents(eventosDesdeBaseDeDatos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateClick = (arg) => {
    setShowEventModal(true);
    setEventData({
      ...eventData,
      start: arg.dateStr,
      end: arg.dateStr,
    });
    setSelectedEvent(null);
    setIsEditing(false); // No estás editando al crear un evento nuevo
  };
  








  const handleEventClick = (arg) => {
    setShowEventModal(true);
    setSelectedEvent(arg.event);
    const event = arg.event;

    const formattedStartDate = new Date(event.startStr);
    const formattedEndDate = new Date(event.endStr);

    formattedStartDate.setHours(formattedStartDate.getHours() - 3);

    formattedEndDate.setHours(formattedEndDate.getHours() - 3);


    const isoFormattedStartDate = formattedStartDate.toISOString().slice(0, 16);
    const isoFormattedEndDate = formattedEndDate.toISOString().slice(0, 16);

    setEventData({
      title: event.title,
      color: event.backgroundColor,
      start: isoFormattedStartDate, // Establecer la fecha y hora formateada
      end: isoFormattedEndDate,
    });
    setIsEditing(true); // Estás editando un evento existente
  };

  const handleAddEvent = async () => {
    const startDate = new Date(eventData.start);
    const endDate = new Date(eventData.end);

    if (startDate >= endDate) {
      alert("La hora de inicio debe ser menor que la hora de fin. Por favor, corrige las horas.");
    } else {
      if (selectedEvent) {
        // Actualizar evento existente
        selectedEvent.setProp("title", eventData.title);
        selectedEvent.setProp("backgroundColor", eventData.color);
        selectedEvent.setStart(eventData.start);
        selectedEvent.setEnd(eventData.end);

        // Actualizar el evento en la base de datos
        await actualizarEventoEnBaseDeDatos(selectedEvent.id, eventData);
      } else {
        // Agregar nuevo evento
        const newEvent = {
          title: eventData.title,
          start: eventData.start,
          end: eventData.end,
          backgroundColor: eventData.color,
          allDay: false,
        };
        // Verificar nuevamente si la hora de inicio es menor que la hora de fin antes de agregarlo a la base de datos
        const newEventStartDate = new Date(newEvent.start);
        const newEventEndDate = new Date(newEvent.end);
        if (newEventStartDate < newEventEndDate) {
          // Agregar el nuevo evento a la base de datos
          await agregarEventoEnBaseDeDatos(newEvent);
          setShowEventModal(false);
          setEventData({
            title: "",
            color: "#3788D8",
            start: "",
            end: "",
          });
          cargarEventosDesdeBaseDeDatos();
        } else {
          // Muestra una alerta si la hora de inicio no es menor que la hora de fin
          alert("La hora de inicio debe ser menor que la hora de fin. Por favor, corrige las horas.");
        }
      }
    }
  };

  const actualizarEventoEnBaseDeDatos = async (eventId, eventData) => {
    try {
      await axios.put(`http://localhost:3001/updatecalendar`, {
        id: eventId,
        titulo: eventData.title,
        color: eventData.color,
        fecha_inicio: eventData.start,
        fecha_fin: eventData.end
      });
      console.log("Evento actualizado exitosamente.");
      setShowEventModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const agregarEventoEnBaseDeDatos = async (newEvent) => {
    try {
      console.log("Datos que se enviarán al servidor:", newEvent);

      await axios.post("http://localhost:3001/calendario", {
        titulo: newEvent.title,
        color: newEvent.backgroundColor,
        fecha_inicio: newEvent.start,
        fecha_fin: newEvent.end
      });

      console.log("Evento agregado exitosamente.");
    } catch (error) {
      console.error("Error al agregar evento:", error);
    }
  };

  const handleDeleteEvent = async () => {
    if (selectedEvent) {
      // Mostrar el diálogo de confirmación antes de eliminar el evento
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      }).then(async (result) => {
        if (result.isConfirmed) {
          selectedEvent.remove();
          setSelectedEvent(null);
          setShowEventModal(false);
          setEvents((prevEvents) =>
            prevEvents.filter((event) => event !== selectedEvent)
          );
  
          // Eliminar el evento de la base de datos
          await eliminarEventoEnBaseDeDatos(selectedEvent.id);
        }
      });
    }
  };

  const eliminarEventoEnBaseDeDatos = async (eventId) => {
    try {
      await axios.delete(`http://localhost:3001/calendario/${eventId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="calendario-container">
      <div className="boton-calendario">


      </div>
      <Form.Label> Sala 1 Casa: 🟦 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sala 2 Casa: 🟥 &nbsp;&nbsp;&nbsp;&nbsp;  Sala 1 Domo: 🟨 &nbsp;&nbsp;&nbsp;&nbsp;   Sala 2 Domo: 🟩 &nbsp;&nbsp;&nbsp;&nbsp;   Espacio taller Domo: 🟪</Form.Label><br /><br />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridWeek"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }
        }
        height={"70vh"}
        slotMinTime="08:00:00"  // Establece la hora de inicio
        slotMaxTime="18:00:00"  // Establece la hora de finalización
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        locales={[esLocale]} // Configura el idioma a español
        locale="es" // Establece el idioma por defecto
      />
      {showEventModal && (
        <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
          <Modal.Header closeButton className="custom-modal-header">
            <Modal.Title>
              {selectedEvent ? "Editar Evento" : "Agregar Evento"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formEventTitle">
                <Form.Label>Título del evento:</Form.Label>
                <Form.Control
                  type="text"
                  value={eventData.title}
                  onChange={(e) =>
                    setEventData({ ...eventData, title: e.target.value })
                  }
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="formEventColor">
                <Form.Label>Elegir sala:</Form.Label>
                <Form.Control
                  as="select"
                  value={eventData.color}
                  onChange={(e) =>
                    setEventData({ ...eventData, color: e.target.value })
                  }
                >
                  <option value="#3788D8">Sala 1 Casa</option>
                  <option value="#E91E63">Sala 2 Casa</option>
                  <option value="#FFC107">Sala 1 Domo</option>
                  <option value="#008000">Sala 2 Domo</option>
                  <option value="#7c3bf5">Espacio taller Domo</option>
                 

                  
                </Form.Control>
              </Form.Group>
              <br></br>
              <Form.Group controlId="formEventStartTime">
                <Form.Label>Hora de inicio:</Form.Label>

                <Form.Control
                  type={"datetime-local"}
                  value={eventData.start}
                  onChange={(e) =>
                    setEventData({ ...eventData, start: e.target.value })
                  }
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="formEventEndTime">
                <Form.Label>Hora de fin:</Form.Label>
                <Form.Control
                  type={"datetime-local"}
                  value={eventData.end}
                  onChange={(e) =>
                    setEventData({ ...eventData, end: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="custom-modal-footer">

            {isEditing && (
              <Button variant="danger" onClick={handleDeleteEvent}>
                Eliminar
              </Button>
            )}
            <div className="custom-botones-guardar">
            <Button variant="primary" onClick={handleAddEvent}>
              {selectedEvent ? "Guardar Cambios" : "Agregar"}
            </Button>
            </div>
            <div className="custom-botones-cancelar"> 
            <Button variant="secondary" onClick={() => setShowEventModal(false)}>
              Cancelar
            </Button>
            </div>
          </Modal.Footer>

        </Modal>
      )}
    </div>
  );
};
