import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Foods from './components/Foods/Foods'
import ErrorPage from './components/ErrorPage/ErrorPage'


const router = createBrowserRouter ([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'foods',
        element:<Foods></Foods>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path:'about',
        element:<AboutUs></AboutUs>
      },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
