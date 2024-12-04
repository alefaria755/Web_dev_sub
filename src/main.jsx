import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'


const router = createBrowserRouter([
  {
    //Elemento Pai
    path:'/',element:<App/>,

    //Elemento Filho
    children:[
      {path:'/', element:<Home/>},
      {path:'/books', element:<Books/>},
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
