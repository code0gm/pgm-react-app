import { Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchDashboardMenuData, routesMap } from '../../services/MenuService'
import DashboardLayout from './DashboardLayout'

function DashboardRoutes() {
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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {menu.map(({ id, path, component }) => {
            const Component = routesMap[component]
            return <Route key={id} path={path} element={<Component />} />
          })}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default DashboardRoutes
