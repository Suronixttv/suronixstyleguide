import React from 'react'

import Button from '../buttons/Button'

function App() {
  return (
    <div className="App">
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <Button primary={true} label="Hallo"/>
      </div>
    </div>
  )
}

export default App
