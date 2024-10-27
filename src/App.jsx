import './App.css'
import Navbar from './componots/Navbar/Navbar'
import Footer from './componots/Footer/Footer'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
function App() {
  const MyRoute =createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Route>
    )
  )

  return (
    <>
    <Navbar/>
    <RouterProvider router={MyRoute} />
    <Footer/>
    </>
  )
}

export default App
