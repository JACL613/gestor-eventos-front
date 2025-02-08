import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Login from "./components/Login"
import Register from "./components/Register"
import EventList from "./components/EventList"
import EventForm from "./components/EventForm"
import Navbar from "./components/Navbar"

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5", // Indigo-600
    },
    secondary: {
      main: "#10B981", // Emerald-500
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/events" element={<EventList />} />
              <Route path="/events/new" element={<EventForm />} />
              <Route path="/events/:id" element={<EventForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

