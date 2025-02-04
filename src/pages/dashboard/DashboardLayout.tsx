import { Suspense, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { fetchDashboardMenuData } from '../../services/MenuService'

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
    <div>
      <h2>대시보드</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          {menu.length > 0 ? (
            menu.map(({ id, path, name }) => (
              <Link key={id} to={path}>
                {name}
              </Link>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </nav>
        <Outlet /> {/* 서브 라우트가 여기에 렌더링됨 */}
      </Suspense>
    </div>
  )
}

export default DashboardLayout
