import React from 'react'
import type { Unit } from '../types'
import { UnitsList } from './UnitsList'

type UnitsIndexProps = {
  units : Unit []
  setSelectedUnit: (id:string) => void
  selectedUnit: string
}

export const UnitsIndex = ({units, setSelectedUnit, selectedUnit}: UnitsIndexProps) => {
  const UnitsListProps = {
    units,
    setSelectedUnit,
    selectedUnit
  }
  return (
    <section className="units-wrapper flex-col">
      <UnitsList {...UnitsListProps}/>
    </section>
  )
}