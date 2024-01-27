import { useState } from 'react'
import Navbar from './components/navbar/NavBar'
import PlayerTable from './components/table/PlayerTable'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const players = [
    {
      name: 'Player 1',
      info: ['Info 1A', 'Info 1B', 'Info 1C'],
    },
    {
      name: 'Player 2',
      info: ['Info 2A', 'Info 2B', 'Info 2C'],
    },
    // Add more player data here
  ];

  return (
    <>
     <Navbar />
     <PlayerTable players={players} />
    </>
  )
}

export default App
