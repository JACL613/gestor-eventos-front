import { Link, useNavigate } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import {
  Event as EventIcon,
  ExitToApp as LogoutIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
} from "@mui/icons-material"

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <EventIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Event Manager
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/events" sx={{ mr: 2 }}>
            Events
          </Button>
          {localStorage.getItem("token") ? (
            <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" sx={{ mr: 2 }} startIcon={<LoginIcon />}>
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register" startIcon={<RegisterIcon />}>
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

