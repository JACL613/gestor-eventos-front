"use client"

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { TextField, Button, Typography, Box, Container } from "@mui/material"
import { PersonAdd as RegisterIcon } from "@mui/icons-material"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { email, password })
      localStorage.setItem("token", res.data.token)
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Your account has been created successfully!",
      })
      navigate("/events")
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "There was an error during registration. Please try again.",
      })
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" className="mb-4">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} startIcon={<RegisterIcon />}>
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Register

