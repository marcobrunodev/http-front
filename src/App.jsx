import React, { useEffect, useState}from 'react'

function App() {
  const [title, setTitle] = useState('...')
  const [hours, setHours] = useState('...')

  useEffect(() => {
    fetch('http://localhost:3001/frontend')
      .then(response => response.json())
      .then(({title, hours}) => {
        setTitle(title)
        setHours(hours)
      });
  }, [])

  return (
    <>
      <h1>FrontEnd Feliz</h1>
      <h2>{title}</h2>
      <h3>{hours}</h3>
    </>
  )
}

export default App
