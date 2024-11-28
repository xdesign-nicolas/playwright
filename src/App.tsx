import React from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { UserCard } from './components/UserCard'

function App() {
  return (
    <div className="App">
      <h1>Playwright Testing Example</h1>
      <Counter />
      <UserCard name="John Doe" email="john@example.com" />
    </div>
  )
}

export default App
