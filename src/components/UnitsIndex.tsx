import React from 'react'
import type { Unit } from '../types'
import { UnitsList } from './UnitsList'

type UnitsIndexProps = {
  units : Unit []
}

export const UnitsIndex = ({units}: UnitsIndexProps) => {
  return (
    <section className="units-wrapper flex-col">
      <UnitsList units={units}/>
    </section>
  )
}