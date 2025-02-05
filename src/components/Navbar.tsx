import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            홈
          </Button>
          <Button color="inherit" component={Link} to="/dashboard">
            대시보드
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
