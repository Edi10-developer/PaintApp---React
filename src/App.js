import React, { useState, useEffect } from 'react'
import randomColor from 'randomcolor'
import Paint from './components/Paint'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prevCount => prevCount + 1)
  const decrement = () => setCount(prevCount => prevCount - 1)

  const [color, setColor] = useState(0)
  useEffect(()=>{
    setColor(randomColor())
  }, [count])

  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      <Paint />
    </div>
  )
}

export default App;
