import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// ! layout
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Article from "./pages/Article"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "article/:id",
          element: <Article />
        }
      ]
    },
  ])


  return <RouterProvider router={routes} />
}

export default App