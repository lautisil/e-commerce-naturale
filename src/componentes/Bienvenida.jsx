import React from 'react'

const Bienvenida = ({ nombre,miArray,persona }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{miArray}</p>
      <p>{persona.nombre}</p>
    </div>
  )
}

export default Bienvenida