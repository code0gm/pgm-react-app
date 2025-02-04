import { lazy } from 'react'

export const routesMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  Home: lazy(() => import('../pages/home/Home')),
  DashboardLayout: lazy(() => import('../pages/dashboard/DashboardLayout')),
  Demo: lazy(() => import('../pages/dashboard/Demo')),
  AddressBook: lazy(() => import('../pages/dashboard/AddressBook')),
}

export const fetchMainMenuData = async () => {
  return [
    { id: 1, path: '/', name: 'Home', component: 'Home' },
    {
      id: 2,
      path: '/DashboardLayout',
      name: 'DashboardLayout',
      component: 'DashboardLayout',
    },
  ]
}

export const fetchDashboardMenuData = async () => {
  return [
    { id: 1, path: 'Demo', name: 'Demo', component: 'Demo' },
    {
      id: 3,
      path: 'AddressBook',
      name: 'AddressBook',
      component: 'AddressBook',
    },
  ]
}
