import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Flowers } from './pages/Flowers'
import { LyricsSync } from './pages/Prueba'

export default function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/flower' Component={Flowers} />
      <Route path='/prueba' Component={LyricsSync} />
    </Routes>
  )
}
