import React from 'react'
import type { Unit } from '../types'
import { UnitPreview } from './UnitPreview'

type UnitsListProps = {
  units : Unit []
  setSelectedUnit: (id:string) => void
  selectedUnit: string
}

export const UnitsList = ({units, setSelectedUnit, selectedUnit}: UnitsListProps) => {
  
  return units.map((unit, idx) => <UnitPreview key={unit.id} unit={unit} idx={idx} setSelectedUnit={setSelectedUnit} selectedUnit={selectedUnit}/>) 
}