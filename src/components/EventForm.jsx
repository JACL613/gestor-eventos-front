"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { TextField, Button, Typography, Box, Container } from "@mui/material"
import { Save as SaveIcon } from "@mui/icons-material"

const EventForm = () => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  })
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchEvent()
    }
  }, [id])

  const fetchEvent = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/events/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      })
      setEvent(res.data)
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch event details. Please try again.",
      })
    }
  }

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/events/${id}`, event, {
          headers: { "x-auth-token": localStorage.getItem("token") },
        })
        Swal.fire({
          icon: "success",
          title: "Event Updated",
          text: "The event has been updated successfully!",
        })
      } else {
        await axios.post("http://localhost:5000/api/events", event, {
          headers: { "x-auth-token": localStorage.getItem("token") },
        })
        Swal.fire({
          icon: "success",
          title: "Event Created",
          text: "The new event has been created successfully!",
        })
      }
      navigate("/events")
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to save the event. Please try again.",
      })
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography component="h1" variant="h5" gutterBottom>
          {id ? "Edit Event" : "Create Event"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Event Name"
            name="name"
            autoFocus
            value={event.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="date"
            label="Date"
            name="date"
            type="date"
            value={event.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="time"
            label="Time"
            name="time"
            type="time"
            value={event.time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="location"
            label="Location"
            name="location"
            value={event.location}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={event.description}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} startIcon={<SaveIcon />}>
            {id ? "Update Event" : "Create Event"}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default EventForm

