import React from 'react'
import Buslinie from './Buslinie'

export default function BuslinienList({ buslinien }) {
  return (
    buslinien.map(buslinie => {
        return <Buslinie key= {buslinie.name} buslinie={buslinie}/>
    })
  )
}
