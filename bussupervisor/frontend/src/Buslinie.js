import React from 'react'

export default function Buslinie({buslinie}) {
  return (
    <div>
        {buslinie.name}
        {buslinie.haltestellen}
    </div>
  )
}
