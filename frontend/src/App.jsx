import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SelectMovie from './components/SelectMovie'
import Home from './pages/Home'
import BookMyShowState from './context/BookMyShowState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookMyShowState>
        <Home />
      </BookMyShowState>
    </>
  )
}

export default App
