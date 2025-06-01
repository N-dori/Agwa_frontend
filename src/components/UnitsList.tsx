import React from 'react'
import type { Unit } from '../types'
import { UnitPreview } from './UnitPreview'

type UnitsIndexProps = {
  units : Unit []
}

export const UnitsList = ({units}: UnitsIndexProps) => {
  
  return units.map((unit, idx) => <UnitPreview key={unit.id} unit={unit} idx={idx}/>) 
}