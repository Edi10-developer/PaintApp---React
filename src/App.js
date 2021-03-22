import React, { useState, useEffect, useRef } from 'react'
import randomColor from 'randomcolor'

import Paint from './components/Paint'

export default function Playground() {
  const [count, setCount] = useState(30)
  
  const inputRef = useRef()
  
  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(randomColor())
    //inputRef.current.focus()
  }, [count])
  
  return (
    <div>
     <Paint />
    </div>
  )
}