import React from 'react'
import type { Unit } from '../types'
import { TraysIcon } from './TraysIcon'

type UnitsIndexProps = {
  unit : Unit 
  idx : number
}

export const UnitPreview = ({unit, idx}: UnitsIndexProps) => {
  return (
    <article className="unit-container ">
      <div className="unit-panel grid"> 
        <TraysIcon idx={idx}/>
      </div>
    </article>
  )
}