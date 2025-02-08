"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Button, TextField, IconButton, Typography, Box, Container } from "@mui/material"
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material"

const EventList = () => {
  const [events, setEvents] = useState([])
  const [filterDate, setFilterDate] = useState("")
  const [filterLocation, setFilterLocation] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events", {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      setEvents(res.data)
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se encontraron eventos Code:"+err.status,
      })
    }
  }

  const handleFilter = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/events/filter?date=${filterDate}&location=${filterLocation}`,
        {
          headers: { "x-auth-token": localStorage.getItem("token") },
        },
      )
      setEvents(res.data)
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al filtrar los eventos, intentelo nuevamente. Code:"+err.status,
      })
    }
  }

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Desea eliminar este evento?",
        text: "No podra revertir esta accion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      })

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/api/events/${id}`, {
          headers: { "x-auth-token": localStorage.getItem("token") },
        })
        Swal.fire("Eliminado!", "El evento ha sido eliminado", "success")
        fetchEvents()
      }
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el evento Code:"+err.status,
      })
    }
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Events
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate("/events/new")}
          sx={{ mb: 2 }}
        >
          Add New Event
        </Button>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            label="Filter by date"
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="text"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            label="Filter by location"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Filter
          </Button>
        </Box>
        <Box>
          {events.map((event) => (
            <Box
              key={event._id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                p: 2,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Box>
                <Typography variant="h6">{event.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${new Date(event.date).toLocaleDateString()} - ${event.time} - ${event.location}`}
                </Typography>
              </Box>
              <Box>
                <IconButton aria-label="edit" onClick={() => navigate(`/events/${event._id}`)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleDelete(event._id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

export default EventList

