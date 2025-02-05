import { Suspense, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { fetchDashboardMenuData } from '../../services/MenuService'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'

function DashboardLayout() {
  const [menu, setMenu] = useState<
    { id: number; path: string; name: string; component: string }[]
  >([])

  useEffect(() => {
    const getMenu = async () => {
      const menuData = await fetchDashboardMenuData()
      setMenu(menuData)
    }
    getMenu()
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            대시보드
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Box
          component="nav"
          sx={{
            width: 250,
            flexShrink: 0,
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'divider',
          }}
        >
          <List>
            {menu.length > 0 ? (
              menu.map(({ id, path, name }) => (
                <ListItem key={id} disablePadding>
                  <ListItemButton component={Link} to={path}>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Loading..." />
              </ListItem>
            )}
          </List>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet /> {/* 서브 라우트가 여기에 렌더링됨 */}
          </Suspense>
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout
