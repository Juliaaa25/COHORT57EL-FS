
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Alcohol from './Alcohol/Alcohol'
import CityPage from './CityPage/CityPage'
import type { JSX } from 'react'

function App():JSX.Element {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/alcohol" element={<Alcohol />} />
       <Route path="/citypage" element={<CityPage />} />
       <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
    
    </>
  )
}
export default App
