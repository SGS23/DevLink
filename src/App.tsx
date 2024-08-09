import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Admin } from './pages/admin'
import { Networks } from './pages/networks'
import { ErrorPage } from './pages/error'

import { Private } from './routes/Private'

//ROTAS
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login', //quando acessar isso
    element: <Login />//quero ir pra isso
  },
  {
    path: '/admin',
    element: <Private> <Admin /> </Private>
  },
  {
    path: '/admin/social',
    element: <Private><Networks /></Private>
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export { router }
